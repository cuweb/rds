import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main/Main'
import { Section } from './Section'
import { Column } from '../Column/Column'
import { Aside } from '../Aside/Aside'

const meta: Meta<typeof Section> = {
  title: 'Layouts/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const Primary: Story = {}

Primary.args = {
  children: 'Section HTML5 tag as container component',
  as: 'section',
  isGrey: false,
  maxWidth: '5xl',
  noProse: false,
}

export const GreyBackground: Story = {
  args: {
    children: 'Section component with grey background',
    isGrey: true,
  },
}

export const WithColumns: Story = {
  args: {
    maxWidth: '7xl',
  },
  render: (args) => (
    <Main>
      <Section {...args}>
        <Column cols="2">
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
              viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
              malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
          </Column.Content>
        </Column>
      </Section>
    </Main>
  ),
}

export const WithAside: Story = {
  args: {
    maxWidth: '7xl',
  },
  render: (args) => (
    <Main>
      <Section {...args}>
        <Column cols="1/3">
          <Aside {...args}>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla.
            </p>
            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
          </Aside>
          <Column.Content>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
            <p>
              Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra
              in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada
              metus, et tristique dolor. Suspendisse vestibulum hendrerit.
            </p>
            <p>
              Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
              lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida
              tempus. Phasellus in egestas sapien ac libero.
            </p>
          </Column.Content>
        </Column>
      </Section>
    </Main>
  ),
}
