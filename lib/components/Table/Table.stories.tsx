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

const columnsWithWidth: ColumnDefinitionType[] = [
  {
    key: 'id' as never,
    header: 'ID',
    sort: {
      sortable: true,
    },
    order: 'descending',
    default: true,
    width: '5%',
  },
  {
    key: 'title' as never,
    header: 'Title',
    sort: {
      sortable: true,
    },
    width: '20%',
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
    width: '5%',
  },
]

export const CustomColumnsWidth: Story = {
  args: {
    data: tableData,
    columns: columnsWithWidth,
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
