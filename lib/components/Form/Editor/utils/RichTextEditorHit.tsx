const RichTextEditorHit = ({ captionsEnabled }: { captionsEnabled: boolean }) => {
  return captionsEnabled ? <span className="hint-text">You can add more text here...</span> : null
}

export default RichTextEditorHit
