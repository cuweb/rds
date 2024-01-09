import type { Meta, StoryObj } from '@storybook/react'
import { iconNames } from '../../../public/assets/font-awesome/icon-list.js'

const meta: Meta = {
  title: 'Resources/Icons',
}

export default meta
type Story = StoryObj

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-10 gap-16 px-12 mx-auto my-6 max-w-7xl">
      {iconNames.map((icon) => (
        <div key={icon.value}>
          <img src={`./public/assets/font-awesome/${icon.value}.svg`} alt="" />
          <p className="mt-4 text-xs text-center">{icon.label}</p>
        </div>
      ))}
    </div>
  ),
}
