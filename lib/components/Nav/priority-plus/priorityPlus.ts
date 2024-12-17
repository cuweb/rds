/* eslint-disable */
// @ts-nocheck

import {
  createHideOverflowEvent,
  createItemsChangedEvent,
  createShowOverflowEvent,
  createToggleClickedEvent,
  Events,
} from './events/createEvent'
import createEventHandler from './events/eventHandler'
import DeepPartial from './types/DeepPartial'
import createMirror from './utils/createMirror'
import processTemplate from './utils/processTemplate'
import validateAndThrow from './validation'

enum El {
  Container = 'container',
  Main = 'main',
  PrimaryNavWrapper = 'primary-nav-wrapper',
  PrimaryNav = 'primary-nav',
  OverflowNav = 'overflow-nav',
  OverflowNavNew = 'overflow-nav-new',
  ToggleBtn = 'toggle-btn',
  NavItems = 'nav-item',
}

type NavType = El.PrimaryNav | El.OverflowNav

enum StateModifiers {
  ButtonVisible = 'is-showing-toggle',
  OverflowVisible = 'is-showing-overflow',
  PrimaryHidden = 'is-hiding-primary',
}

interface ElementRefs {
  [El.Container]: HTMLElement
  clone: {
    [El.Main]: HTMLElement
    [El.NavItems]: HTMLElement[]
    [El.ToggleBtn]: HTMLElement
  }
  primary: {
    [El.Main]: HTMLElement
    [El.PrimaryNavWrapper]: HTMLElement
    [El.PrimaryNav]: HTMLElement
    [El.NavItems]: HTMLLIElement[]
    [El.OverflowNav]: HTMLElement
    [El.OverflowNavNew]: HTMLElement
    [El.ToggleBtn]: HTMLElement
  }
}

interface Instance {
  eventListeners: Map<
    (eventDetail: CustomEvent<{}>) => void,
    {
      eventType: Events
      wrappedCallback: (eventDetail: CustomEvent<{}>) => void
    }
  >
  itemMap: WeakMap<HTMLElement | Element, NavType>
  observer: IntersectionObserver
}

interface Options {
  classNames: {
    [El.Container]: string[]
    [El.Main]: string[]
    [El.PrimaryNavWrapper]: string[]
    [El.PrimaryNav]: string[]
    [El.OverflowNav]: string[]
    [El.OverflowNavNew]: string[]
    [El.ToggleBtn]: string[]
    [El.NavItems]: string[]
  }
  collapseAtCount: number
  defaultOverflowVisible: boolean
  openOnToggle: boolean
  innerToggleTemplate: string | ((args: object) => string)
}

const defaultOptions: Options = {
  classNames: {
    [El.Container]: ['p-plus-container'],
    [El.Main]: ['p-plus'],
    [El.PrimaryNavWrapper]: ['p-plus__primary-wrapper'],
    [El.PrimaryNav]: ['p-plus__primary'],
    [El.OverflowNav]: ['p-plus__overflow'],
    [El.OverflowNavNew]: ['cu-nav__overflow-nav-new'],
    [El.ToggleBtn]: ['p-plus__toggle-btn'],
    [El.NavItems]: ['p-plus__primary-nav-item'],
  },
  collapseAtCount: -1,
  openOnToggle: true,
  defaultOverflowVisible: false,
  innerToggleTemplate: 'More',
}

function priorityPlus(targetElem: HTMLElement, userOptions: DeepPartial<Options> = {}) {
  /**
   * @todo: We shouldn't have to cast this as Options, however DeepPartial creates
   * breaks the type of innerToggleTemplate (?).
   */
  const options = {
    ...defaultOptions,
    ...userOptions,
    classNames: { ...defaultOptions.classNames, ...userOptions.classNames },
  } as Options

  const { classNames } = options

  /**
   * The instance's event emitter.
   */
  const eventHandler = createEventHandler()

  /**
   * 'Instance' state variables and misc references.
   * Force a cast as we know we will initialise these.
   */
  const inst: Instance = {
    eventListeners: new Map(),
    itemMap: new WeakMap(),
  } as Instance

  /**
   * References to DOM elements so we can easily retrieve them.
   * Force a cast as we know we will initialise these.
   */
  const el: ElementRefs = {
    clone: {},
    primary: {},
  } as ElementRefs

  /**
   * Gets an element's 'mirror' Map for the clone/primary navigation - e.g.
   * if you pass a clone Map, you get the original Map and vice-versa.
   */
  const getElemMirror = createMirror()

  /**
   * Generates classes based on an element name.
   */
  function cn(key: El): string {
    return classNames[key].join(' ')
  }

  /**
   * Generates data-attributes based on an element name. These are used to query
   * the generated DOM and populate the 'el' object.
   */
  function dv(key: El): string {
    return `data-${key}`
  }

  /**
   * Generates the HTML wrapper to use in-place of the user's supplied menu.
   */
  function createMarkup(): string {
    return `
      <div ${dv(El.Main)} class="${cn(El.Main)}">
        <div class="${cn(El.PrimaryNavWrapper)}" ${dv(El.PrimaryNavWrapper)}></div>
        <button
          ${dv(El.ToggleBtn)}
          class="${cn(El.ToggleBtn)}"
          aria-expanded="false"
        >${processTemplate(options.innerToggleTemplate)}</button>
        <${targetElem.tagName}
          ${dv(El.OverflowNav)}
          class="${cn(El.OverflowNav)}"
          aria-hidden="true"
        >
        </${targetElem.tagName}>
      </div>
    `
  }

  /**
   * Clones the target menu and enhances it with additional properties, such
   * as data attributes and classes.
   */
  function cloneNav(elem: HTMLElement): HTMLElement {
    const targetClone = elem.cloneNode(true) as HTMLElement
    enhanceOriginalMenu(targetClone)

    const navItems = Array.from(targetClone.children) as HTMLLIElement[]
    navItems.forEach(enhanceOriginalNavItem)

    return targetClone
  }

  /**
   * Enhance the original list element with classes/attributes.
   */
  function enhanceOriginalMenu(elem: HTMLElement) {
    elem.classList.add(...classNames[El.PrimaryNav])
    elem.setAttribute(dv(El.PrimaryNav), '')
  }

  /**
   * Enhance an original menu list-item with classes/attributes.
   */
  function enhanceOriginalNavItem(elem: HTMLLIElement) {
    elem.classList.add(...classNames[El.NavItems])
    elem.setAttribute(dv(El.NavItems), '')
  }

  /**
   * Replaces the navigation with the two clones and populates the 'el' object.
   */
  function setupEl() {
    const { itemMap } = inst
    const markup = createMarkup()
    const container = document.createElement('div')
    container.classList.add(...classNames[El.Container])
    container.setAttribute(dv(El.Container), 'true')
    el[El.Container] = container

    const original = document.createRange().createContextualFragment(markup)

    // Setup the wrapper and clone/enhance the original menu.
    el.primary[El.PrimaryNavWrapper] = original.querySelector(`[${dv(El.PrimaryNavWrapper)}]`) as HTMLElement
    el.primary[El.PrimaryNavWrapper].appendChild(cloneNav(targetElem))

    const cloned = original.cloneNode(true) as Element

    // Establish references. By this point the menu is fully built.
    el.primary[El.Main] = original.querySelector(`[${dv(El.Main)}]`) as HTMLElement
    el.primary[El.PrimaryNav] = original.querySelector(`[${dv(El.PrimaryNav)}]`) as HTMLElement
    el.primary[El.NavItems] = Array.from(original.querySelectorAll(`[${dv(El.NavItems)}]`)) as HTMLLIElement[]
    el.primary[El.OverflowNav] = original.querySelector(`[${dv(El.OverflowNav)}]`) as HTMLElement
    el.primary[El.OverflowNavNew] = document.querySelector(`[${dv(El.OverflowNavNew)}]`) as HTMLElement
    el.primary[El.ToggleBtn] = original.querySelector(`[${dv(El.ToggleBtn)}]`) as HTMLElement

    // el.primary[El.OverflowNav] = document.querySelector('.cu-nav__overflow') as HTMLElement
    // el.primary[El.ToggleBtn] = document.querySelector('.cu-nav__toggle-btn') as HTMLElement

    el.clone[El.Main] = cloned.querySelector(`[${dv(El.Main)}]`) as HTMLElement
    el.clone[El.NavItems] = Array.from(cloned.querySelectorAll(`[${dv(El.NavItems)}]`)) as HTMLElement[]
    el.clone[El.ToggleBtn] = cloned.querySelector(`[${dv(El.ToggleBtn)}]`) as HTMLElement
    el.clone[El.Main].setAttribute('aria-hidden', 'true')
    el.clone[El.Main].setAttribute('data-clone', 'true')
    el.clone[El.Main].classList.add(`${classNames[El.Main][0]}--clone`)
    el.clone[El.Main].classList.add(`${classNames[El.Main][0]}--${StateModifiers.ButtonVisible}`)

    container.appendChild(original)
    container.appendChild(cloned)

    // By default every item belongs in the primary nav, since the intersection
    // observer will run on-load anyway.
    el.clone[El.NavItems].forEach((item) => itemMap.set(item, El.PrimaryNav))

    const parent = targetElem.parentNode as HTMLElement
    parent.replaceChild(container, targetElem)
  }

  /**
   * Sets the toggle button visibility.
   */
  function updateBtnDisplay(show: boolean = true) {
    el.primary[El.Main].classList[show ? 'add' : 'remove'](`${classNames[El.Main][0]}--${StateModifiers.ButtonVisible}`)

    if (typeof options.innerToggleTemplate !== 'string') {
      // We need to do it for both, as layout is affected
      ;[el.primary[El.ToggleBtn], el.clone[El.ToggleBtn]].forEach((btn) => {
        btn.innerHTML = processTemplate(options.innerToggleTemplate, {
          toggleCount: countVisibleChildren(el.primary[El.OverflowNavNew]),
          totalCount: el.clone[El.NavItems].length,
        })
      })
    }
  }

  /**
   * Get array of cloned navItems from primary/overflow.
   */
  function getCloneItemsByType(navType: NavType) {
    const { itemMap } = inst
    // Always use the clone as the base for our new nav,
    // since the order is canonical and it is never filtered.
    return el.clone[El.NavItems].filter((item) => itemMap.get(item) === navType)
  }

  /**
   * Get a list of cloned elements that we need to
   * render for our navType.
   */
  function getRenderableItems(navType: NavType) {
    const { collapseAtCount } = options

    if (navType === El.PrimaryNav || collapseAtCount < 0) {
      return getCloneItemsByType(navType)
    }

    const primaryCount = getCloneItemsByType(El.PrimaryNav).length

    if (primaryCount > 0 && primaryCount <= collapseAtCount) {
      return el.clone[El.NavItems]
    }

    return getCloneItemsByType(navType)
  }

  /**
   * (Re) generate the navigation list for either the visible or the overflow nav.
   * We use this to completely recreate the nav each time we update it,
   * avoiding ordering complexity and having to run append multiple times on
   * the mounted nav.
   */
  function generateNav(navType: NavType): HTMLElement {
    const newNav = el.primary[navType].cloneNode()

    getRenderableItems(navType).forEach((item) => {
      const elem = getElemMirror(el.clone[El.NavItems], el.primary[El.NavItems]).get(item) as HTMLElement

      newNav.appendChild(elem)
    })

    return newNav as HTMLElement
  }

  /**
   * Replaces the passed in nav type with a newly generated copy in the DOM.
   */
  function updateNav(navType: NavType) {
    const newNav = generateNav(navType)
    const parent = el.primary[navType].parentNode as HTMLElement

    // Replace the existing nav element in the DOM
    parent.replaceChild(newNav, el.primary[navType])

    // Update our reference to it
    el.primary[navType] = newNav
  }

  /**
   * Run every time a nav item intersects with the parent container.
   * We use this opportunity to check which type of nav the items belong to.
   */
  function onIntersect({ target, intersectionRatio }: IntersectionObserverEntry) {
    inst.itemMap.set(target, intersectionRatio < 0.99 && El.PrimaryNav)

    const primaryNavItem = getElemMirror(el.clone[El.NavItems], el.primary[El.NavItems]).get(target as HTMLElement)

    let overflowNavNewItem = Array.from(el.primary[El.OverflowNavNew].children).find((element) => {
      return element.innerHTML.includes(target.innerHTML)
    })

    if (intersectionRatio < 0.99) {
      overflowNavNewItem?.classList.remove(`${classNames[El.NavItems][0]}--hidden`)
      primaryNavItem?.classList.add(`${classNames[El.NavItems][0]}--hidden`)
    } else {
      overflowNavNewItem?.classList.add(`${classNames[El.NavItems][0]}--hidden`)
      primaryNavItem?.classList.remove(`${classNames[El.NavItems][0]}--hidden`)
    }
  }

  function countVisibleChildren(navElement: HTMLElement): number {
    return Array.from(navElement.children).filter(
      (child) => !child.classList.contains(`${classNames[El.NavItems][0]}--hidden`),
    ).length
  }

  /**
   * The IO callback, which collects intersection events.
   */
  function intersectionCallback(events: IntersectionObserverEntry[]) {
    // Update the designation
    events.forEach(onIntersect)

    // Update the navs to reflect the new changes
    // ;([El.PrimaryNav] as NavType[]).forEach(updateNav)
    // ;([El.OverflowNav] as NavType[]).forEach(updateNav)

    eventHandler.trigger(
      createItemsChangedEvent({
        overflowCount: countVisibleChildren(el.primary[El.OverflowNavNew]),
      }),
    )

    /**
     * Once this callback is run, we can be confident that we are ready to pass on
     * events to users. If we do so beforehand, internal initialisation events (e.g.
     * the first itemsChanged and showOverflow events) will be sent to user-defined
     * listeners.
     */
    eventHandler.setEventReady(true)
  }

  /**
   * Sets the visibility of the overflow navigation.
   */
  function setOverflowNavOpen(open = true) {
    const openClass = `${classNames[El.Main][0]}--${StateModifiers.OverflowVisible}`
    el.primary[El.Main].classList[open ? 'add' : 'remove'](openClass)
    el.primary[El.OverflowNavNew].setAttribute('aria-hidden', open ? 'false' : 'true')
    el.primary[El.OverflowNavNew].classList[open ? 'add' : 'remove']('cu-nav__overflow-nav-new--open')
    el.primary[El.ToggleBtn].setAttribute('aria-expanded', open ? 'true' : 'false')
    el.primary[El.ToggleBtn].classList[open ? 'add' : 'remove']('p-plus__toggle-btn--open')

    eventHandler.trigger(open ? createShowOverflowEvent() : createHideOverflowEvent())

    return this
  }

  /**
   * Toggles the visibility of the overflow navigation.
   */
  function toggleOverflowNav() {
    const openClass = `${classNames[El.Main][0]}--${StateModifiers.OverflowVisible}`
    setOverflowNavOpen(!el.primary[El.Main].classList.contains(openClass))

    return this
  }

  /**
   * Sets the visibility of the primary navigation (we hide the primary nav
   * when all the navigation items are hidden in the overflow nav).
   */
  function setPrimaryHidden(hidden = true) {
    const hiddenClass = `${classNames[El.Main][0]}--${StateModifiers.PrimaryHidden}`
    el.primary[El.Main].classList[hidden ? 'add' : 'remove'](hiddenClass)
    el.primary[El.PrimaryNav].setAttribute('aria-hidden', String(hidden))
  }

  /**
   * Handle the overflow-nav toggle btn click.
   */
  function onToggleClick(e: Event) {
    e.preventDefault()
    eventHandler.trigger(createToggleClickedEvent({ original: e }))
  }

  /**
   * Callback for when either nav is updated.
   */
  function onItemsChanged({ detail: { overflowCount } = {} }: CustomEvent<{ [x: string]: any }>) {
    updateBtnDisplay(overflowCount > 0)

    if (overflowCount === 0) {
      setOverflowNavOpen(false)
    }

    setPrimaryHidden(overflowCount === el.clone[El.NavItems].length)
  }

  /**
   * Retrieves an index of the primary nav elements.
   */
  function getNavElements() {
    // Clone it to avoid users changing the el references,
    // e.g. inst.getNavElements()['toggle-btn'] = null;
    return { ...el.primary }
  }

  /**
   * Establishes initial event listeners.
   */
  function bindListeners() {
    inst.observer = new IntersectionObserver(intersectionCallback, {
      root: el.clone[El.Main],
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.99],
    })

    el.clone[El.NavItems].forEach((elem) => inst.observer.observe(elem))

    el.primary[El.ToggleBtn].addEventListener('click', onToggleClick)

    eventHandler.on(Events.ItemsChanged, onItemsChanged, false)

    if (options.openOnToggle) {
      eventHandler.on(Events.ToggleClicked, toggleOverflowNav, false)
    }
  }

  /**
   * Remove listeners and attempt to reset the DOM.
   */
  function destroy() {
    if (inst.observer) inst.observer.disconnect()

    el.primary[El.ToggleBtn].removeEventListener('click', onToggleClick)

    // Unhook instance based event listeners
    Array.from(inst.eventListeners.entries()).forEach(([cb, { eventType }]) => {
      eventHandler.off(eventType, cb)
    })

    // Attempt to reset the DOM back to how it was
    const parent = el[El.Container].parentNode as HTMLElement
    parent.replaceChild(targetElem, el[El.Container])
  }

  ;(function init() {
    validateAndThrow(targetElem, userOptions, defaultOptions)
    setupEl()
    bindListeners()
    if (options.defaultOverflowVisible) setOverflowNavOpen(true)
  })()

  return {
    destroy,
    getNavElements,
    off: eventHandler.off,
    on: eventHandler.on,
    setOverflowNavOpen,
    toggleOverflowNav,
  }
}

export default priorityPlus
