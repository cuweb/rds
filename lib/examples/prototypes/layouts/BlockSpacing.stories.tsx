import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from '../../../layouts/Section/Section'
import { Main } from '../../../layouts/Main/Main'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../../layouts/Column/Column'
import { Nav } from '../../../components/Nav/Nav'
import { NavButtonsData } from '../../../data/NavData'

const meta: Meta = {
  title: 'Prototypes/Layout Tests',
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

export const BlockSpacing: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section isGrey>
          <h2>Grey Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <Section isGrey>
          <h2>Grey Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Column cols="2" gridGap="10" maxWidth="5xl">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
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

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Column cols="3" gridGap="10" maxWidth="7xl">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Middle. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
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

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Column cols="2" gridGap="10" maxWidth="5xl">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
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

        <Column cols="2" gridGap="10" maxWidth="5xl">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
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
      </Main>

      <FooterStandard />
    </>
  ),
}
