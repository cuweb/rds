import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { Calendar } from './Calendar'

const meta: Meta = {
  title: 'Components/Calendar/Examples',
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

const eventData = [
  {
    endDatetime: '2022-10-21T14:30',
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leslie Alexander',
    startDatetime: '2022-10-21T13:00',
  },
  {
    endDatetime: '2022-10-21T11:30',
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Foster',
    startDatetime: '2022-10-21T09:00',
  },
  {
    endDatetime: '2022-10-24T18:30',
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Dries Vincent',
    startDatetime: '2022-10-24T17:00',
  },
  {
    endDatetime: '2022-10-26T14:30',
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Leslie Alexander',
    startDatetime: '2022-10-26T13:00',
  },
  {
    endDatetime: '2022-10-30T14:30',
    id: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Foster',
    startDatetime: '2022-10-30T14:00',
  },
]

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />
        <Calendar callback={() => {}} events={eventData} />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="7xl" isGrey>
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="3xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />
      </Main>

      <FooterStandard />
    </>
  ),
}
