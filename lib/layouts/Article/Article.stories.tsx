import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './Article'
import { ArticleData as data } from '../../data/ArticleData'

const meta: Meta<typeof Article> = {
  title: 'Layouts/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Article>

export const Primary: Story = {}

Primary.args = {
  children: 'Article HTML5 tag as component',
}

export const ContentProp: Story = {
  name: 'Content as a Prop',
  args: {
    content: data,
  },
}
