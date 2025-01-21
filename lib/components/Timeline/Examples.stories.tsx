import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { PageHeader } from '../PageHeader/PageHeader'
import { Timeline } from './Timeline'
import { TimelineData } from '../../data/TimelineData'

const meta: Meta = {
  title: 'Components/Timeline/Examples',
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

const sampleEvents = TimelineData

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Buttons menu={NavButtonsData} />
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Timeline Examples"
            size="lg"
          />
          <Timeline>
            {sampleEvents.map((event, index) => (
              <Timeline.Item key={index} aside={event.aside} title={event.title}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                  blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                  turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                  posuere.
                </p>
                <ul>
                  <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                  <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                  <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
                </ul>
              </Timeline.Item>
            ))}
          </Timeline>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Timeline>
          {sampleEvents.map((event, index) => (
            <Timeline.Item key={index} aside={event.aside} title={event.title}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                posuere.
              </p>
              <ul>
                <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>

        <Timeline>
          {sampleEvents.map((event, index) => (
            <Timeline.Item key={index} aside={event.aside} title={event.title}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                posuere.
              </p>
              <ul>
                <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Timeline>
          {sampleEvents.map((event, index) => (
            <Timeline.Item key={index} aside={event.aside} title={event.title}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                posuere.
              </p>
              <ul>
                <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>

        <Section maxWidth="7xl" isGrey>
          <Timeline>
            {sampleEvents.map((event, index) => (
              <Timeline.Item key={index} aside={event.aside} title={event.title}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                  blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                  turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                  posuere.
                </p>
                <ul>
                  <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                  <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                  <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
                </ul>
              </Timeline.Item>
            ))}
          </Timeline>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Timeline>
          {sampleEvents.map((event, index) => (
            <Timeline.Item key={index} aside={event.aside} title={event.title}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                posuere.
              </p>
              <ul>
                <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>

        <Section maxWidth="7xl">
          <Timeline>
            {sampleEvents.map((event, index) => (
              <Timeline.Item key={index} aside={event.aside} title={event.title}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                  blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                  turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                  posuere.
                </p>
                <ul>
                  <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                  <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                  <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
                </ul>
              </Timeline.Item>
            ))}
          </Timeline>
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
          <Timeline>
            {sampleEvents.map((event, index) => (
              <Timeline.Item key={index} aside={event.aside} title={event.title}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
                  blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
                  turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
                  posuere.
                </p>
                <ul>
                  <li>Phasellus at dapibus arcu, non eleifend purus.</li>
                  <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
                  <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
                </ul>
              </Timeline.Item>
            ))}
          </Timeline>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
