import type { Meta, StoryObj } from '@storybook/react'
import { iconNames } from '../../../public/assets/font-awesome/icon-list.js'

const meta: Meta = {
  title: 'Components/Icons',
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj

export const Icons: Story = {
  render: () => (
    <div className="grid max-w-5xl grid-cols-8 gap-16 mx-auto my-6">
      {iconNames.map((icon) => (
        <div key={icon.value}>
          <img src={`./public/assets/font-awesome/${icon.value}.svg`} alt="" />
          <p className="mt-4 text-xs text-center">{icon.label}</p>
        </div>
      ))}
    </div>
  ),
}
