import { Meta, StoryObj } from '@storybook/react'
import { DetailsItem } from '../components/Listings/DetailsItem/DetailsItem'
import { Container } from '../layouts/Container'
import { Column } from '../layouts/Column/Column'
import { StackedList } from '../layouts/StackedList/StackedList'
import { DetailsItemData as data } from '../components/Listings/DetailsItem/DetailsItemData'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Cards & Lists/Lists/Details Item',
  component: DetailsItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof DetailsItem>

type Story = StoryObj<typeof DetailsItem>

export const Default: Story = {
  render: (args) => (
    <DetailsItem as="div">
      <DetailsItem.Icon icon={args.icon} />

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
  ),
}

Default.args = {
  title: '405 Robertson Hall',
  description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
  icon: MapPinIcon,
}

export const SingleItemList: Story = {
  render: (args) => (
    <Column maxWidth="5xl">
      <StackedList hasBorder>
        <DetailsItem as="div">
          <DetailsItem.Icon icon={args.icon} />
          <DetailsItem.Content>
            <DetailsItem.Title title={args.title} />
            <DetailsItem.Description description={args.description} />
          </DetailsItem.Content>
        </DetailsItem>
      </StackedList>
    </Column>
  ),
}

SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <Container bgColor="grey">
      <Column maxWidth="5xl">
        <StackedList header="Details listing" hasBorder hasShadow>
          {data.map(({ title, description, icon }) => (
            <DetailsItem key={title}>
              <DetailsItem.Icon icon={icon} />
              <DetailsItem.Content>
                <DetailsItem.Title title={title} />
                <DetailsItem.Description description={description} />
              </DetailsItem.Content>
            </DetailsItem>
          ))}
        </StackedList>
      </Column>
    </Container>
  ),
}
