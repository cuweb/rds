/**
 * cu-motion.js — RDS vanilla motion runtime
 *
 * Pairs with the .cu-card / .cu-listing (and other animated component) CSS shipped
 * in dist/style.css. Watches any element with `data-cu-reveal` and sets
 * `data-revealed="true"` on it when it scrolls into view, which is what the CSS
 * keys off to fade and translate it in.
 *
 * Honours `prefers-reduced-motion: reduce` by revealing everything immediately
 * (no IntersectionObserver, no animation delay).
 *
 * Usage in WordPress:
 *   // functions.php
 *   wp_enqueue_script(
 *     'cu-motion',
 *     get_template_directory_uri() . '/assets/cu-motion.js',
 *     array(),
 *     '1.0',
 *     true
 *   );
 *
 *   // a dynamic block's render.php
 *   <div class="cu-card" data-cu-reveal>
 *     ...
 *   </div>
 *
 * For dynamically inserted content (e.g. AJAX, load-more buttons), call
 * `window.cuMotion.register(container)` after inserting to pick up new elements.
 */
;(function () {
  'use strict'

  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (window.cuMotion) return // already loaded — don't double-init

  var SELECTOR = '[data-cu-reveal]'
  var REVEALED = 'data-revealed'
  var THRESHOLD = 0.15
  var ROOT_MARGIN = '0px 0px -10% 0px'

  var observed = typeof WeakSet === 'function' ? new WeakSet() : null
  var observer = null

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }

  function reveal(el) {
    el.setAttribute(REVEALED, 'true')
  }

  function getObserver() {
    if (observer) return observer
    if (typeof IntersectionObserver === 'undefined') return null
    observer = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i]
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN },
    )
    return observer
  }

  function register(root) {
    root = root || document
    var elements = root.querySelectorAll(SELECTOR)
    if (!elements.length) return

    var reduced = prefersReducedMotion()
    var obs = reduced ? null : getObserver()

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i]
      if (observed && observed.has(el)) continue
      if (reduced || !obs) {
        reveal(el)
      } else {
        obs.observe(el)
        if (observed) observed.add(el)
      }
    }
  }

  function init() {
    register(document)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

  window.cuMotion = { init: init, register: register }
})()
