import React from 'react';
export interface LinkProps {
    href?: string | undefined;
    as?: string | undefined;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    className?: string;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Link.d.ts.map