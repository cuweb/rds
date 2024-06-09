import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextImage } from './TextImage'
import { Button } from '../Button/Button'

const meta: Meta<typeof TextImage> = {
  title: 'Components/Text Image',
  component: TextImage,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof TextImage>

export const DefaultTemplate: Story = {
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content title="Website and Application Development" imageUrl="https://picsum.photos/400/266">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
  ),
}

export const HeaderOne: Story = {
  render: (args) => (
    <TextImage maxWidth="7xl" {...args}>
      <TextImage.Content
        title="Website and Application Development"
        headerType="h1"
        imageUrl="https://picsum.photos/400/266"
      >
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
  ),
}

export const ImageLeft: Story = {
  render: (args) => (
    <TextImage flipX {...args}>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/400/266"
        hasMobileImage
      >
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
  ),
}

export const NoContent: Story = {
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content title="Website and Application Development" />
    </TextImage>
  ),
}

export const NoImage: Story = {
  render: (args) => (
    <TextImage {...args}>
      <TextImage.Content title="Website and Application Development">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 buttons md:gap-6 md:mt-10">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </TextImage.Content>
    </TextImage>
  ),
}
