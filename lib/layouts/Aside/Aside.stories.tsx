import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main/Main'
import { Section } from '../Section/Section'
import { Column } from '../Column/Column'
import { Aside } from './Aside'

const meta: Meta<typeof Aside> = {
  title: 'Layouts/Aside',
  component: Aside,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Aside>

export const Primary: Story = {}

Primary.args = {
  children: 'Aside HTML5 tag as component',
  isSticky: false,
  topSpace: 0,
}

export const AsRightSidebar: Story = {
  args: {},
  render: (args) => {
    return (
      <Main>
        <Section>
          <Column cols="2/3">
            <Column.Content>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
            <Aside {...args}>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla.
              </p>
              <ul>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
              </ul>
            </Aside>
          </Column>
        </Section>
      </Main>
    )
  },
}

export const LeftSidebarWithSticky: Story = {
  args: {
    isSticky: true,
    topSpace: 16,
  },
  render: (args) => {
    return (
      <Main>
        <Section>
          <Column cols="1/3">
            <Aside {...args}>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla.
              </p>
              <ul>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
              </ul>
            </Aside>
            <Column.Content>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
          </Column>
        </Section>
      </Main>
    )
  },
}
