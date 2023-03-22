import type { Meta, StoryObj } from '@storybook/react'
import { JobItem } from '../components/Listings/JobItem/JobItem'
import { JobItemData as data } from '../components/Listings/JobItem/JobItemData'
import { StackedList } from '../layouts/StackedList/StackedList'

export default {
  title: 'Cards & Lists/Lists/Job Item',
  component: JobItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof JobItem>

type Story = StoryObj<typeof JobItem>

export const Default: Story = {
  render: (args) => (
    <JobItem as="div" link={args.link}>
      <JobItem.Content>
        <JobItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
        <JobItem.Details dateData={args.dateData} date={args.date} />
      </JobItem.Content>
    </JobItem>
  ),
}

Default.args = {
  fontSize: 'base',
  title: 'Job item title',
  link: 'https://carleton.ca',
  date: 'September 24th, 2020',
  dateData: '2020-01-07',
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <JobItem as="li" link={args.link}>
        <JobItem.Content>
          <JobItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <JobItem.Details dateData={args.dateData} date={args.date} />
        </JobItem.Content>
      </JobItem>
    </StackedList>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="Job listings" hasBorder hasShadow>
      {data.map(({ id, title, link, dateData, date }) => (
        <JobItem key={id} as="li" link={link}>
          <JobItem.Content>
            <JobItem.Title title={title} link={link} />
            <JobItem.Details dateData={dateData} date={date} />
          </JobItem.Content>
        </JobItem>
      ))}
    </StackedList>
  ),
}
