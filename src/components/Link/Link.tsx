import React, { forwardRef, PropsWithChildren, useEffect, useState } from 'react'

export interface LinkProps {
  href?: string | undefined
  as?: string | undefined
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  locale?: string | false
  legacyBehavior?: boolean
  className?: string
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  (
    {
      href,
      as,
      children,
      prefetch,
      replace,
      shallow,
      scroll,
      locale,
      className,
      onClick,
      onMouseEnter,
      onTouchStart,
    }: PropsWithChildren<LinkProps>,
    ref,
  ) => {
    const [myModule, setMyModule] = useState<any>()
    const LinkParams = {
      href,
      as,
      prefetch,
      replace,
      shallow,
      scroll,
      locale,
      className,
      onClick,
      onMouseEnter,
      onTouchStart,
    }

    useEffect(() => {
      async function loadModule() {
        try {
          const NextLink = await import(`next/${'link'}`)
          setMyModule(
            <NextLink ref={ref} {...LinkParams}>
              {children}
            </NextLink>,
          )
        } catch (error) {
          setMyModule(
            <a ref={ref} {...LinkParams}>
              {children}
            </a>,
          )
        }
      }

      loadModule()
    }, [])

    console.log(myModule)

    return <> {myModule}</>
  },
)

Link.displayName = 'Link'
