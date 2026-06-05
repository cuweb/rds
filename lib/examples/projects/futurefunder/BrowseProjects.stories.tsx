import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Column } from '../../../layouts/Column/Column'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../../components/Nav/Nav'
import { Card } from '../../../components/Card/Card'
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel'
import { WideImage } from '../../../components/WideImage/WideImage'
import { Pagination } from '../../../components/Pagination/Pagination'

import { NavButtonsData, NavFutureFunder } from '../../../data/NavData'
import { FilterPanelData } from '../../../data/FilterData'
import { NewsData } from '../../../data/NewsData'

const meta: Meta = {
  title: 'Projects/FutureFunder',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const BrowseProjects: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="FutureFunder" link="https://futurefunder.carleton.ca" />
          <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
        </Nav.Top>
        <Nav.Bottom>
          <Nav.Menu menu={NavFutureFunder} />
          <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
        </Nav.Bottom>
      </Nav>

      <Main>
        <Section maxWidth="7xl">
          <WideImage
            focalPointX={50}
            focalPointY={50}
            headerType="h1"
            isType="image"
            opacity={60}
            title="Browse the Campaigns"
            image="https://picsum.photos/id/381/1920/840"
          />
        </Section>

        <Section maxWidth="7xl">
          <FilterPanel>
            <FilterPanel.Top sortOptions={FilterPanelData.sortOptions} filterOptions={FilterPanelData.filters} />
            <FilterPanel.Bottom />
          </FilterPanel>
          <Column cols="4">
            {NewsData.slice(0, 8).map(({ id, link, title, image, alt, date }) => (
              <Card key={id}>
                <Card.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
          <Pagination
            totalCount={48}
            siblingCount={1}
            pageSize={5}
            callback={() => undefined}
            callbackPage={() => undefined}
          />
        </Section>

        <Section maxWidth="7xl" isGrey>
          <Column cols="4">
            <Card leftBorder noHover>
              <Card.Stats desc="Student Population" stat="30,500+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Clubs & Societies" stat="170+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Scholarships & Bursaries" stat="85.4 M+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Research Funding" stat="$116 M" />
            </Card>
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
