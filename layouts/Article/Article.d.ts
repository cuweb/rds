import React from 'react';
export interface ArticleBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface ArticleProps {
    children?: React.ReactNode;
    content?: string;
}
export declare const Article: ({ children, content }: ArticleProps) => JSX.Element;
//# sourceMappingURL=Article.d.ts.map