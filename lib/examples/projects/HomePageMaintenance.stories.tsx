import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { Nav } from '../../components/Nav/Nav'
import { PageHeader } from '../../components/PageHeader/PageHeader'

const meta: Meta = {
  title: 'Prototypes/Projects',
}

export default meta
type Story = StoryObj

export const HomePageMaintenance: Story = {
  render: () => (
    <>
      <Nav navType="primary">
        <Nav.Logo />
      </Nav>

      <Main>
        <Section maxWidth="7xl">
          <PageHeader
            header="Maintenance"
            as="h1"
            content="This service is currently unavailable. We are working on the issue."
          />
          <p>For detailed ITS outage and contact information:</p>
          <ul>
            <li>
              Status: <a href="https://carleton.ca/its/service-status/">Computing Services Status Page</a>
            </li>
            <li>
              Phone: <a href="tel:+16135203700">613-520-3700</a>
            </li>
            <li>
              Email: <a href="mailto:its.service.desk@carleton.ca">its.service.desk@carleton.ca</a>
            </li>
          </ul>
        </Section>
      </Main>
    </>
  ),
}
