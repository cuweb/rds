import { InlineImagePayload } from './../nodes/InlineImageNode'
import { createCommand, LexicalCommand } from 'lexical'

export const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload> =
  createCommand('INSERT_INLINE_IMAGE_COMMAND')
