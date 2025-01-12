import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavAsideData } from '../../data/NavData'
import { PageHeader } from './PageHeader'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Figure } from '../Figure/Figure'

const meta: Meta = {
  title: 'Components/Page Header/Examples',
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
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header Examples"
            size="lg"
          >
            <ButtonGroup align="start" gap="5">
              <a href="#" className="cu-button cu-button--red">
                Button One
              </a>
              <a href="#" className="cu-button cu-button--dark-grey">
                Button Two
              </a>
            </ButtonGroup>
          </PageHeader>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader
          as="h1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
          header="Page Header"
          size="lg"
        >
          <ButtonGroup align="start" gap="5">
            <a href="#" className="cu-button cu-button--red">
              Button One
            </a>
            <a href="#" className="cu-button cu-button--dark-grey">
              Button Two
            </a>
          </ButtonGroup>
        </PageHeader>

        <Section maxWidth="7xl" isGrey>
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Page Header"
            size="lg"
          >
            <ButtonGroup align="start" gap="5">
              <a href="#" className="cu-button cu-button--red">
                Button One
              </a>
              <a href="#" className="cu-button cu-button--dark-grey">
                Button Two
              </a>
            </ButtonGroup>
          </PageHeader>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <PageHeader header="Upcoming Single Day Event">
          <Figure align="right" noMobile rounded="lg" size="sm">
            <img alt="Images need alt text" height="133" src="https://picsum.photos/id/84/600/400" width="200" />
          </Figure>
          <PageHeader.Event
            contactEmail="johndoe@test.com"
            contactName="John Doe"
            contactPhone="613-520-2600 x1234"
            cost="$20 per adult, $15 for youth/senior"
            endDate="2023-03-31 13:30:00"
            eventType="Hybrid"
            location="Raven's Nest, 1125 Colonel By Drive"
            startDate="2023-03-31 10:00:00"
            virtualType="Teams"
            virtualUrl="https://events.carleton.ca"
          >
            <ButtonGroup>
              <a className="cu-button cu-button--red" href="https://carleton.ca">
                Register Now
              </a>
              <a className="cu-button cu-button--grey" href="https://carleton.ca/webservices">
                Add to My Events
              </a>
            </ButtonGroup>
          </PageHeader.Event>
        </PageHeader>

        <Section maxWidth="7xl">
          <PageHeader header="Upcoming Single Day Event">
            <Figure align="right" noMobile rounded="lg" size="sm">
              <img alt="Images need alt text" height="133" src="https://picsum.photos/id/84/600/400" width="200" />
            </Figure>
            <PageHeader.Event
              contactEmail="johndoe@test.com"
              contactName="John Doe"
              contactPhone="613-520-2600 x1234"
              cost="$20 per adult, $15 for youth/senior"
              endDate="2023-03-31 13:30:00"
              eventType="Hybrid"
              location="Raven's Nest, 1125 Colonel By Drive"
              startDate="2023-03-31 10:00:00"
              virtualType="Teams"
              virtualUrl="https://events.carleton.ca"
            >
              <ButtonGroup>
                <a className="cu-button cu-button--red" href="https://carleton.ca">
                  Register Now
                </a>
                <a className="cu-button cu-button--grey" href="https://carleton.ca/webservices">
                  Add to My Events
                </a>
              </ButtonGroup>
            </PageHeader.Event>
          </PageHeader>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Figure align="right" size="sm">
          <img
            alt="Required alt text"
            height="133"
            src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
            width="200"
          />
        </Figure>
        <PageHeader header="People Profile" pronoun="He/Him">
          <PageHeader.People
            building="Onraed"
            degrees="Certificate, Padawan Academy of Jedi Arts"
            email="greely@thejediyouseek.com"
            facebook="#facebook"
            instagram="#instagram"
            jobTitle="Jedi Master & Jedi Council Member"
            linkedin="#linkedin"
            orcidID="1234"
            phone="613-520-2600"
            phoneExt="1234"
            resume="#"
            room="Sector A29"
            twitter="#twitter"
            website="#website"
          />
        </PageHeader>

        <Section maxWidth="7xl" isGrey>
          <Figure align="right" size="sm">
            <img
              alt="Required alt text"
              height="133"
              src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
              width="200"
            />
          </Figure>
          <PageHeader header="People Profile" pronoun="He/Him">
            <PageHeader.People
              building="Onraed"
              degrees="Certificate, Padawan Academy of Jedi Arts"
              email="greely@thejediyouseek.com"
              facebook="#facebook"
              instagram="#instagram"
              jobTitle="Jedi Master & Jedi Council Member"
              linkedin="#linkedin"
              orcidID="1234"
              phone="613-520-2600"
              phoneExt="1234"
              resume="#"
              room="Sector A29"
              twitter="#twitter"
              website="#website"
            />
          </PageHeader>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
