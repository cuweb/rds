interface OnChangePluginProps {
    onChange: (htmlString: string | null) => void;
    required: boolean;
    disabled: boolean;
}
declare function OnChangePlugin({ onChange, required, disabled }: OnChangePluginProps): null;
export default OnChangePlugin;
