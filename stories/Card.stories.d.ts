import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ title, content }: {
            title: string;
            content: string;
        }): JSX.Element;
        displayName: string;
    };
    tags: string[];
    parameters: {
        controls: {
            sort: string;
        };
    };
    argTypes: {
        title: {
            control: {
                type: string;
            };
        };
        content: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=Card.stories.d.ts.map