import { Meta, StoryObj } from '@storybook/react'
import exampleTableData from '../components/Table/exampleTableData.json'
import { ColumnDefinitionType, Table } from '../components/Table/Table'
import { Link } from '../components/Link/Link'

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

const data = exampleTableData

const tableData = data.map((obj) => {
  const link = 'http://thing/' + obj.id
  return {
    ...obj,
    link: (
      <>
        <Link className="text-cu-red" href={link}>
          Edit
        </Link>
      </>
    ),
  }
})

const finalTableData = tableData

const columns: Array<ColumnDefinitionType<(typeof data)[0], never>> = [
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
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
}

export const WithStripes: Story = {}
WithStripes.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: false,
  hasShadow: false,
}

export const WithShadow: Story = {}
WithShadow.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: true,
}

export const WithBorder: Story = {}
WithBorder.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: false,
}

export const ShadowAndBorder: Story = {}
ShadowAndBorder.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: true,
}

export const WithRangeOne: Story = {}
WithRangeOne.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [1, 3],
}

export const WithRangeTwo: Story = {}
WithRangeTwo.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [4, 5],
}
