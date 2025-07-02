export declare const getInlineStyle: (image: string, focalPointX: number, focalPointY: number) => {
    backgroundImage: string;
    backgroundPosition: string;
};
export declare const getOpacityStyle: (opacity: number) => {
    opacity: string;
};
export declare const getImageStyles: (isType: string, image: string | undefined) => "relative bg-opacity-50 bg-cover bg-cu-black-50" | "bg-cu-black-900" | "bg-cu-black-50";
