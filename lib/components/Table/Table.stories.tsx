import React from 'react'

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
      <a className="font-semibold text-cu-red" href={link}>
        Edit
      </a>
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
    key: 'description' as never,
    header: 'Description',
    sort: {
      sortable: false,
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
  hasShadow: false,
}

export const WithStripes: Story = {}
WithStripes.args = {
  data: tableData,
  columns: columns,
  hasStripes: true,
  hasShadow: false,
}

export const WithShadow: Story = {}
WithShadow.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasShadow: true,
}

export const WithRangeOne: Story = {}
WithRangeOne.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasShadow: true,
  range: [1, 3],
}

export const WithRangeTwo: Story = {}
WithRangeTwo.args = {
  data: tableData,
  columns: columns,
  hasStripes: false,
  hasShadow: true,
  range: [4, 5],
}
