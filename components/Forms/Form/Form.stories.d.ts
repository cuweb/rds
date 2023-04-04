import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import * as yup from 'yup';
declare const meta: Meta<typeof Form>;
export default meta;
type Story = StoryObj<typeof Form>;
export declare const TestSchema: {
    firstname: {
        value: string;
        validation: yup.StringSchema<string, yup.AnyObject, undefined, "">;
    };
};
export declare const Default: Story;
export declare const Example: Story;
//# sourceMappingURL=Form.stories.d.ts.map