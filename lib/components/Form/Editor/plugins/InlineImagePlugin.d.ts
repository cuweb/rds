import { Dispatch, SetStateAction } from '../../../../../node_modules/react';
import { InlineImagePayload } from './../nodes/InlineImageNode';
export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export default function InlineImagePlugin({ captionsEnabled, setCaptionsEnabled, }: {
    captionsEnabled?: boolean;
    setCaptionsEnabled: Dispatch<SetStateAction<boolean>>;
}): JSX.Element | null;
