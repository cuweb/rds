import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextImage } from './TextImage'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof TextImage> = {
  title: 'Components/Text & Image',
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

export const Primary: Story = {
  args: {
    maxWidth: '5xl',
    flexRow: 'lg',
    flipX: false,
    flipYsm: false,
  },
  render: (args) => {
    return (
      <Main>
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
      </Main>
    )
  },
}

export const HeaderOne: Story = {
  args: {
    ...Primary.args,
    maxWidth: '7xl',
  },
  render: (args) => (
    <Main>
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
          <ButtonGroup>
            <Button title="Primary" />
            <Button title="Secondary" color="grey" />
          </ButtonGroup>
        </TextImage.Content>
      </TextImage>
    </Main>
  ),
}

export const ImageLeft: Story = {
  args: {
    ...Primary.args,
    maxWidth: '7xl',
    flipX: true,
  },
  render: (args) => (
    <Main>
      <TextImage {...args}>
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
          <ButtonGroup>
            <Button title="Primary" />
            <Button title="Secondary" color="grey" />
          </ButtonGroup>
        </TextImage.Content>
      </TextImage>
    </Main>
  ),
}

export const NoContent: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <Main>
      <TextImage {...args}>
        <TextImage.Content title="Website and Application Development" />
      </TextImage>
    </Main>
  ),
}

export const NoImage: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <Main>
      <TextImage {...args}>
        <TextImage.Content title="Website and Application Development">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <ButtonGroup>
            <Button title="Primary" />
            <Button title="Secondary" color="grey" />
          </ButtonGroup>
        </TextImage.Content>
      </TextImage>
    </Main>
  ),
}
