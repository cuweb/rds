import React, { FC } from 'react';
export declare const LinkContext: React.Context<string>;
export interface ILinkProvider {
    type: any;
    children: React.ReactNode;
}
export declare const Link: FC<ILinkProvider>;
export declare const LinkProvider: any;
