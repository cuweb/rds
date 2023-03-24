import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../components/Heading/Heading'

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

export const Primary: Story = {}

Primary.args = {
  text: 'Heading Component',
}

export const CenterAligned: Story = {
  args: {
    ...Primary.args,
    isCenter: true,
  },
}

export const WithParagraph: Story = {
  args: {
    ...Primary.args,
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consectetur tortor, eget mollis odio. Etiam tristique, eros eget tincidunt mollis, ex nulla ornare enim, ac volutpat ex ex id risus.',
  },
}

export const CetnerWithPara: Story = {
  args: {
    ...Primary.args,
    isCenter: true,
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consectetur tortor, eget mollis odio. Etiam tristique, eros eget tincidunt mollis, ex nulla ornare enim, ac volutpat ex ex id risus.',
  },
}
