import type { Meta, StoryObj } from '@storybook/react'
import { FileItem } from './FileItem'
import { FileItemData as data } from './FileItemData'
import { StackedList } from '../../../layouts/StackedList/StackedList'
export default {
  title: 'Cards & Lists/Lists (Deprecated)/File Item',
  component: FileItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof FileItem>

type Story = StoryObj<typeof FileItem>

export const Default: Story = {
  render: (args) => (
    <FileItem as="div" link={args.link}>
      <FileItem.Content>
        <FileItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
        <FileItem.Details filesize={args.filesize} date={args.date} />
      </FileItem.Content>
    </FileItem>
  ),
}

Default.args = {
  fontSize: 'base',
  title: 'File item title',
  link: 'https://carleton.ca',
  filesize: '175KB',
  date: 'September 24th, 2020',
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <FileItem as="li" link={args.link}>
        <FileItem.Content>
          <FileItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <FileItem.Details filesize={args.filesize} date={args.date} />
        </FileItem.Content>
      </FileItem>
    </StackedList>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="File listing" hasBorder hasShadow>
      {data.map(({ id, title, link, filesize, date }) => (
        <FileItem key={id} as="li" link={link}>
          <FileItem.Content>
            <FileItem.Title title={title} link={link} />
            <FileItem.Details filesize={filesize} date={date} />
          </FileItem.Content>
        </FileItem>
      ))}
    </StackedList>
  ),
}
