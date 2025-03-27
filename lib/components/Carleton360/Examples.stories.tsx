import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../Nav/Nav'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { NavButtonsData } from '../../data/NavData'
import { Carleton360 } from './Carleton360'
import { TextImage } from '../TextImage/TextImage'

const meta: Meta = {
  title: 'Components/Carleton360/Examples',
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
  args: {
    maxWidth: '5xl',
    flexRow: 'lg',
    flipX: false,
    flipYsm: false,
  },
  render: (args) => {
    return (
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
          <Section>
            <TextImage {...args}>
              <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266">
                <p>
                  Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                  reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                  accusamus in. Praesent quis ligula quis nulla malesuada tempor.
                </p>
                <ButtonGroup>
                  <Button title="Primary" />
                  <Button title="Secondary" color="grey" />
                </ButtonGroup>
              </TextImage.Content>
            </TextImage>
          </Section>
          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Carleton360 />
          <Carleton360 />

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Carleton360>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </Carleton360>

          <Section>
            <h2>White Background</h2>
            <SinglePara />
            <SinglePara />
          </Section>

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Section>
            <h2>White Background</h2>
            <SinglePara />
            <SinglePara />
          </Section>

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Column cols="2">
            <Column.Content>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
            </Column.Content>
            <Column.Content>
              <p>
                Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
            </Column.Content>
          </Column>

          <Section maxWidth="max">
            <Carleton360>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="dark-grey" title="Request Information" />
              </ButtonGroup>
            </Carleton360>
          </Section>
        </Main>

        <FooterStandard />
      </>
    )
  },
}
