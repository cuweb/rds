import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { FloatBox } from '../../../layouts/FloatBox/FloatBox'
import { FooterDept } from '../../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { Carleton360 } from '../../../components/Carleton360/Carleton360'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'
import { Column } from '../../../layouts/Column/Column'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../../components/Footer/FooterCookie/FooterCookie'
import { Section } from '../../../layouts/Section/Section'
import { WideBanner } from '../../../components/WideBanner/WideBanner'
import { Details } from '../../../components/Details/Details'
import { Card } from '../../../components/Card/Card'
import { NewsData } from '../../../data/NewsData'
import { NavButtonsData, NavDataSingle } from '../../../data/NavData'

const meta: Meta = {
  title: 'Projects/cutheme',
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
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
        malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
        sapien in urna. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien
        in urna. Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctioaut
        reprehenderit ducimus. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum malesuada lectus.
      </p>
    </>
  )
}

export const GraduateProgram: Story = {
  render: () => {
    return (
      <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Graduate Programs" link="https://graduate.carleton.ca" />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Bottom>
        </Nav>

        <Main>
          <Section maxWidth="max">
            <WideBanner
              headerType="h1"
              image="https://picsum.photos/id/270/1920/840"
              opacity={80}
              title="Graduate Program Information"
            >
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="dark-grey" title="Request Information" />
              </ButtonGroup>
            </WideBanner>
          </Section>

          <FloatBox>
            <Details as="ul" isGrey>
              <Details.Item iconName="calendar-lines-pen">
                <strong>Application Deadline:</strong> February 25th, 2025
              </Details.Item>
              <Details.Item iconName="alarm-clock">
                <strong>Length:</strong> 1 - 2 years (MEng), 2 years (MASc)
              </Details.Item>
              <Details.Item iconName="graduation-cap">
                <strong>Degrees:</strong> Master of Applied Science, Master of Engineering
              </Details.Item>
              <Details.Item iconName="compass">
                <strong>Pathways:</strong> Coursework, Research Project, Thesis
              </Details.Item>
              <Details.Item iconName="briefcase">
                <strong>Experiential Learning:</strong> Co-op
              </Details.Item>
            </Details>
          </FloatBox>

          <SinglePara />

          <Section>
            <PageHeader as="h2" header="Program Feature Cards" size="md" />
            <Column cols="3">
              {NewsData.slice(0, 3).map(({ id, title, image, alt }) => (
                <Card key={id} isGrey hasWave>
                  <Card.ImageThumb>
                    <img src={image} alt={alt} width="200" height="133" />
                  </Card.ImageThumb>
                  <Card.Header title={title} />
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Body>
                </Card>
              ))}
            </Column>
          </Section>

          <SinglePara />

          <h2>Heading Three</h2>
          <SinglePara />

          <Carleton360>
            <ButtonGroup>
              <Button title="Sign up for 360" />
              <Button title="Login to 360" color="dark-grey" />
            </ButtonGroup>
          </Carleton360>

          <h2>Heading Three</h2>
          <SinglePara />

          <h2>Heading Three</h2>
          <SinglePara />
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
    )
  },
}
