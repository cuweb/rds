
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { NumberCard } from '../components/Cards/NumberCard/NumberCard'
import { NumberCardData as data } from '../components/Cards/NumberCard/NumberCardData'
const meta: Meta<typeof NumberCard> = {
  title: 'Cards & Lists/Cards/Number Card',
  component: NumberCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof NumberCard>

export const Default: Story = {
  render: () => <NumberCard title="Carleton Alumni" content="177,000+" />,
}

export const TwoColumns: Story = {
  render: () => (
    <Column cols="2" gridGap="10" maxWidth="5xl">
      {data.map((item) => (
        <NumberCard key={222} title={item?.title} content={item?.content} />
      ))}
    </Column>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <Column cols="3" gridGap="10" maxWidth="7xl">
      {data.map((item) => (
        <NumberCard  key={567} title={item?.title} content={item?.content} />
      ))}
    </Column>
  ),
}

export const Center: Story = {
  render: () => (
    <Column cols="3" gridGap="10" maxWidth="7xl">
      {data.map((item) => (
        <NumberCard  key={222} title={item?.title} content={item?.content} isCenter />
      ))}
    </Column>
  ),
}
