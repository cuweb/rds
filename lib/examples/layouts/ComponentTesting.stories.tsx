import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Nav } from '../../components/Nav/Nav'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'
import { FooterDept } from '../../components/Footer/FooterDept/FooterDept'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../components/Footer/FooterCookie/FooterCookie'
import { NavAsideData } from '../../data/NavData'
import { BlockTesting } from '../BlockTesting'

const meta: Meta = {
  title: 'Prototypes/Layouts',
}

export default meta
type Story = StoryObj

export const ComponentTesting: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <BlockTesting />
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
