import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { TableData } from '../../data/TableData'
import { ColumnDefinitionType, Table } from './Table'
import { Section } from '../../layouts/Section/Section'

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
    link: <a href={link}>Edit</a>,
  }
})

const columns: ColumnDefinitionType[] = [
  {
    key: 'id' as never,
    header: 'ID',
    sort: {
      sortable: true,
    },
    order: 'descending',
    default: true,
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

const columnsWithReactNode: ColumnDefinitionType[] = [
  {
    key: 'id' as never,
    header: (
      <>
        <label className="sr-only" htmlFor={`select-all-checkbox`}>
          Select all for bulk action
        </label>
        <input type="checkbox" id={`select-all-checkbox`} name="checked" value="all" />
      </>
    ),
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

export const Primary: Story = {
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
  },
  render: (args) => {
    return (
      <Section>
        <Table {...args} />
      </Section>
    )
  },
}

export const CustomColumnsWidth: Story = {
  args: {
    data: tableData,
    columns: columns,
    colgroup: [10, 30, 40, 20],
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true,
  },
  render: (args) => {
    return (
      <Section>
        <Table {...args} />
      </Section>
    )
  },
}

export const ReactNodeInColumn: Story = {
  args: {
    data: tableData,
    columns: columnsWithReactNode,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true,
  },
  render: (args) => {
    return (
      <Section>
        <Table {...args} />
      </Section>
    )
  },
}

export const RowHeader: Story = {
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true,
  },
  render: (args) => {
    return (
      <Section>
        <Table {...args} />
      </Section>
    )
  },
}

export const HasStripes: Story = {
  args: {
    data: tableData,
    columns: columns,
    hasStripes: true,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true,
  },
  render: (args) => {
    return (
      <Section>
        <Table {...args} />
      </Section>
    )
  },
}
