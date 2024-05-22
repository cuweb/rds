import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../_deprecated/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../components/Nav/Nav'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { TextImage } from '../../components/TextImage/TextImage'
import { Alert } from '../../components/Alert/Alert'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { Column } from '../../layouts/Column/Column'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { Listing } from '../../components/Listing/Listing'
import { Card } from '../../components/Card/Card'

import { NavDataSingle, NavAsideData } from '../../data/NavData'
import { NewsData } from '../../data/NewsData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies,{' '}
        <a href="https://carleton.ca">sed tempus diam dignissim</a>. Suspendisse condimentum magna vel orci vulputate,
        eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in
        vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget
        suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
    </>
  )
}

export const ComponentSpacing: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section hasProse>
          <TextImage>
            <TextImage.Content headerType="h1" title="Component Spacing"></TextImage.Content>
          </TextImage>

          <SinglePara />

          <Alert content="Content goes here" title="Title" type="success" />
          <Alert content="Content goes here" title="Title" type="error" />

          <ButtonGroup>
            <Button onClick={() => {}} title="Primary Red" />
            <Button color="dark-grey" onClick={() => {}} title="Dark Grey" />
            <Button color="grey" onClick={() => {}} title="Light Grey" />
          </ButtonGroup>

          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>

          <StackedList>
            {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="266" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red">
                      Read more
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>
        </Section>
      </Main>

      <FooterDept
        buildingName="Pigiarvik (ᐱᒋᐊᕐᕕᒃ)"
        deptName="Information Technology Services"
        email="noreply@carleton.ca"
        footerButtons={[
          {
            id: 1,
            title: 'Contact support',
            url: '#',
          },
          {
            id: 2,
            title: 'Recent alerts',
            url: '#',
          },
        ]}
        officeNumber="400"
        phone="613-520-2600"
      />

      <FooterStandard />
      <FooterCookie />
    </>
  ),
}
