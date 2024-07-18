const RichTextEditorHit = ({ captionsEnabled, placeholder }: { captionsEnabled: boolean; placeholder: string }) => {
  return captionsEnabled ? <span className="hint-text">{placeholder}</span> : null
}

export default RichTextEditorHit
