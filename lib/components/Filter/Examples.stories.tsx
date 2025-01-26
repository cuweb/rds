import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { Column } from '../../layouts/Column/Column'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Card } from '../Card/Card'
import { PageHeader } from '../PageHeader/PageHeader'
import { NewsData } from '../../data/NewsData'
import { Filter } from './Filter'

const meta: Meta = {
  title: 'Components/Filter/Examples',
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

const filterData = [
  {
    id: 'audience',
    name: 'Audience',
    options: [
      {
        checked: false,
        label: 'Staff',
        value: 'staff',
      },
      {
        checked: false,
        label: 'Student',
        value: 'student',
      },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    options: [
      {
        checked: false,
        label: 'General',
        value: 'general',
      },
      {
        checked: false,
        label: 'Online/Virtual',
        value: 'online/virtual',
      },
      {
        checked: false,
        label: 'Finances',
        value: 'finances',
      },
      {
        checked: false,
        label: 'Healthy Workplace',
        value: 'healthyworkplace',
      },
    ],
  },
]

const filterSort = [
  {
    current: '[Circular]',
    href: '#',
    name: 'Daily',
  },
  {
    current: '[Circular]',
    href: '#',
    name: 'Weekly',
  },
  {
    current: '[Circular]',
    href: '#',
    name: 'Monthly',
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
            header="Card Grid Layouts"
            size="lg"
          />
          <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
          <Column cols="4">
            {NewsData.slice(0, 8).map(({ id, link, title, image, alt, date }) => (
              <Card key={id}>
                <Card.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <SinglePara />
        <SinglePara />

        <PageHeader header="Card Grid Layouts" size="md" />
        <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
        <Column cols="3">
          {NewsData.slice(0, 6).map(({ id, link, title, date }) => (
            <Card key={id}>
              <Card.Header title={title} date={date} />
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Card.Footer>
            </Card>
          ))}
        </Column>

        <SinglePara />
        <SinglePara />

        <Section maxWidth="7xl" isGrey>
          <PageHeader header="Card Grid Layouts" size="md" />
          <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
          <Column cols="4">
            {NewsData.slice(0, 8).map(({ id, link, title, date }) => (
              <Card key={id}>
                <Card.Header title={title} date={date} />
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
