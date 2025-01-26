import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from './Testimonial'
import { Main } from '../../layouts/Main/Main'
import { Quote } from '../Quote/Quote'

const meta: Meta<typeof Testimonial> = {
  title: 'Components/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Testimonial>

export const Primary: Story = {
  args: {
    imageUrl: 'https://picsum.photos/id/342/600/400',
    imageZoom: 0,
    focalPointX: 50,
    focalPointY: 50,
  },
  render: (args) => {
    return (
      <Main>
        <Testimonial {...args}>
          <Quote cite="Jane Doe" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>
      </Main>
    )
  },
}
