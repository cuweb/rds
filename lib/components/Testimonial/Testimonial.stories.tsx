import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from './Testimonial'
import { Section } from '../../layouts/Section/Section'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

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
    name: 'Jane Doe',
    imageUrl: 'https://picsum.photos/id/342/600/400',
    imageZoom: 0,
    focalPointX: '50',
    focalPointY: '50',
    quoteType: 'quote',
  },
  render: (args) => {
    return (
      <Section>
        <Testimonial {...args}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
        </Testimonial>
      </Section>
    )
  },
}
