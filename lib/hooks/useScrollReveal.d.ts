export interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    disabled?: boolean;
}
export declare const useScrollReveal: <T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) => {
    ref: import('../../node_modules/react').RefObject<T>;
    isVisible: boolean;
};
