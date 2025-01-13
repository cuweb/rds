import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { WideImage } from '../../components/WideImage/WideImage'
import { Nav } from '../../components/Nav/Nav'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Column } from '../../layouts/Column/Column'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Aside } from '../../layouts/Aside/Aside'
import { Card } from '../../components/Card/Card'
import { Listing } from '../../components/Listing/Listing'
import { Filter } from '../../components/Filter/Filter'
import { Pagination } from '../../components/Pagination/Pagination'
import { MultiDayCalendar } from '../../components/MultiDayCalendar/MultiDayCalendar'

import { FilterData } from '../../data/FilterData'
import { NavAsideData } from '../../data/NavData'
import { EventData } from '../../data/EventData'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Details } from '../../components/Details/Details'
import { Figure } from '../../components/Figure/Figure'

const meta: Meta = {
  title: 'Prototypes/Projects',
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies. Suspendisse condimentum magna vel orci
        vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula
        nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus,
        velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
    </>
  )
}

export const EventsSingle: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Events Calendar" link="https://events.carleton.ca" />
          <Nav.Aside menu={NavAsideData}>
            <button aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>

      <Main>
        <PageHeader
          as="h1"
          header="Single Event Example Page"
          content="Friday, March 31, 2023 from 10:00 am to 1:30 pm"
          size="lg"
        >
          <Figure align="right" rounded="lg" size="md">
            <img
              alt="Sample for figure stories file"
              height="266"
              src="https://picsum.photos/id/15/600/400"
              width="400"
            />
          </Figure>
        </PageHeader>

        <Details>
          <Details.Item isBold>Hybrid Event</Details.Item>
          <Details.Item>Raven's Nest, 1125 Colonel By Drive</Details.Item>
          <Details.Item>
            <a href="/">Teams meeting link</a>
          </Details.Item>
          <Details.Item>
            <strong>Cost:</strong> $20 per adult, $15 for youth/senior
          </Details.Item>
        </Details>

        <Details>
          <Details.Item isBold>Contact</Details.Item>
          <Details.Item>
            John Doe, <a href="/">Email John</a>, 613-520-2600 x1234
          </Details.Item>
        </Details>

        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
