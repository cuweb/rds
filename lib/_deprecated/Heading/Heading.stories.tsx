import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {}

Default.args = {
  text: 'Heading Component',
}

export const CenterAligned: Story = {
  args: {
    ...Default.args,
    isCenter: true,
  },
}

export const WithParagraph: Story = {
  args: {
    ...Default.args,
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consectetur tortor, eget mollis odio. Etiam tristique, eros eget tincidunt mollis, ex nulla ornare enim, ac volutpat ex ex id risus.',
  },
}

export const CetnerWithPara: Story = {
  args: {
    ...Default.args,
    isCenter: true,
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consectetur tortor, eget mollis odio. Etiam tristique, eros eget tincidunt mollis, ex nulla ornare enim, ac volutpat ex ex id risus.',
  },
}
