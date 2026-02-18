import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { PageHeader } from '../PageHeader/PageHeader'
import { Table } from './Table'

const meta: Meta = {
  title: 'Components/Table/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const tableColumns = [
  {
    default: true,
    header: 'ID',
    key: 'id',
    order: 'descending' as 'descending',
    sort: {
      sortable: true,
    },
  },
  {
    header: 'Title',
    key: 'title',
    sort: {
      sortable: true,
    },
  },
  {
    header: 'Description',
    key: 'description',
    sort: {
      sortable: false,
    },
  },
  {
    header: 'Edit',
    key: 'link',
    sort: {
      sortable: false,
    },
  },
]

const tableData = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.',
    id: 1,
    link: <a href="http://thing/1">Edit</a>,
    title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  },
  {
    description: 'Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.',
    id: 2,
    link: <a href="http://thing/2">Edit</a>,
    title:
      'Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps',
  },
  {
    description:
      'Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.',
    id: 3,
    link: <a href="http://thing/3">Edit</a>,
    title: 'Captivating Captions: Why We Use Captions on Videos',
  },
  {
    description:
      'Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.',
    id: 4,
    link: <a href="http://thing/4">Edit</a>,
    title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  },
  {
    description: 'Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.',
    id: 5,
    link: <a href="http://thing/5">Edit</a>,
    title: 'How to Write for the Web',
  },
]

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Table Examples"
            size="lg"
          />
          <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />

        <Section maxWidth="7xl" isGrey>
          <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />

        <Section maxWidth="7xl">
          <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
