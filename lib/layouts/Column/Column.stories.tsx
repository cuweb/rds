import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main/Main'
import { Column } from './Column'

const meta: Meta<typeof Column> = {
  title: 'Layouts/Column',
  component: Column,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Column>

export const Columns: Story = {
  args: {
    cols: '2',
  },
  render: (args) => {
    const { cols } = args

    return (
      <Main>
        <Column {...args}>
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
          {(cols === '3' || cols === '4') && (
            <Column.Content>
              <p>
                Extra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
          )}
          {cols === '4' && (
            <Column.Content>
              <p>
                Extra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
              <p>
                Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis
                laoreet, lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero
                gravida tempus. Phasellus in egestas sapien ac libero.
              </p>
            </Column.Content>
          )}
        </Column>
      </Main>
    )
  },
}
