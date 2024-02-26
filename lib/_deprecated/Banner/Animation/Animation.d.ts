export class Animation {
    constructor(...t: any[]);
    initGradient(current: any): void;
    scrollingTimeout: NodeJS.Timeout;
    isScrolling: boolean;
    width: number;
    xSegCount: number;
    ySegCount: number;
    isMetaKey: any;
    isMouseDown: boolean;
    last: any;
    isLoadedClass: boolean;
    el: any;
    connect(): Promise<void>;
    shaderFiles: {
        vertex: string;
        noise: string;
        blend: string;
        fragment: string;
    } | undefined;
    conf: {
        presetName: string;
        wireframe: boolean;
        density: number[];
        zoom: number;
        rotation: number;
        playing: boolean;
    } | undefined;
    minigl: MiniGl | undefined;
    computedCanvasStyle: CSSStyleDeclaration | undefined;
    disconnect(): void;
    initMaterial(): any;
    uniforms: {
        u_time: any;
        u_shadow_power: any;
        u_darken_top: any;
        u_active_colors: any;
        u_global: any;
        u_vertDeform: any;
        u_baseColor: any;
        u_waveLayers: any;
    } | undefined;
    vertexShader: string | undefined;
    initMesh(): void;
    material: any;
    geometry: any;
    mesh: any;
    shouldSkipFrame(e: any): true | undefined;
    updateFrequency(e: any): void;
    toggleColor(index: any): void;
    showGradientLegend(): void;
    isGradientLegendVisible: boolean | undefined;
    hideGradientLegend(): void;
    init(): void;
    waitForCssVars(): undefined;
    sectionColors: number[] | number[][] | undefined;
    initGradientColors(): void;
}
declare class MiniGl {
    constructor(canvas: any, width: any, height: any, debug?: boolean);
    canvas: any;
    gl: any;
    meshes: any[];
    debug: (e: any, ...args: any[]) => void;
    commonUniforms: {
        projectionMatrix: any;
        modelViewMatrix: any;
        resolution: any;
        aspectRatio: any;
    };
    setSize(e?: number, t?: number): void;
    width: number | undefined;
    height: number | undefined;
    setOrthographicCamera(e?: number, t?: number, n?: number, i?: number, s?: number): void;
    render(): void;
}
export {};
