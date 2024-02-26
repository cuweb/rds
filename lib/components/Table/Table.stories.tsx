import { Meta, StoryObj } from '@storybook/react'
import { TableData } from '../../data/TableData'
import { ColumnDefinitionType, Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Table>

const tableData = TableData.map((obj) => {
  const link = 'http://thing/' + obj.id
  return {
    ...obj,
    link: (
      <>
        <a className="text-cu-red" href={link}>
          Edit
        </a>
      </>
    ),
  }
})

const columns: ColumnDefinitionType[] = [
  {
    key: 'id' as never,
    header: 'ID',
    sort: {
      sortable: true,
    },
  },
  {
    key: 'title' as never,
    header: 'Title',
    sort: {
      sortable: true,
    },
  },
  {
    key: 'link' as never,
    header: 'Edit',
    sort: {
      sortable: false,
    },
  },
]

export const Default: Story = {}
Default.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
}

export const WithStripes: Story = {}
WithStripes.args = {
  data: tableData,
  columns: columns,
  hasStripes: true,
  hasBorder: false,
  hasShadow: false,
}

export const WithShadow: Story = {}
WithShadow.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: true,
}

export const WithBorder: Story = {}
WithBorder.args = {
  data: tableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: false,
}

export const ShadowAndBorder: Story = {}
ShadowAndBorder.args = {
  data: tableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: true,
}

export const WithRangeOne: Story = {}
WithRangeOne.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [1, 3],
}

export const WithRangeTwo: Story = {}
WithRangeTwo.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [4, 5],
}
