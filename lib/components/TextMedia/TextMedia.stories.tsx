import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { TextMedia } from './TextMedia'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta<typeof TextMedia> = {
  title: 'Components/Text & Media',
  component: TextMedia,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof TextMedia>

export const Primary: Story = {
  args: {
    maxWidth: '5xl',
    gridGap: '10',
    reverse: false,
  },
  render: (args) => {
    return (
      <Section>
        <TextMedia {...args}>
          <TextMedia.Content title="Website and Application Development" width={50} hasUnderline>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <ButtonGroup>
              <a
                href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                className="cu-button cu-button--red"
              >
                Read more
              </a>
            </ButtonGroup>
          </TextMedia.Content>
          <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
        </TextMedia>
      </Section>
    )
  },
}

export const BgImage: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    return (
      <Section>
        <TextMedia {...args}>
          <TextMedia.Content title="Website and Application Development" width={50} hasUnderline>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <ButtonGroup>
              <a
                href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                className="cu-button cu-button--red"
              >
                Read more
              </a>
            </ButtonGroup>
          </TextMedia.Content>
          <TextMedia.Aside align="center" border="lg" borderColor="white">
            <img src="https://picsum.photos/id/431/600/460" alt="Presentation only" width="600" height="460" />
          </TextMedia.Aside>
        </TextMedia>
      </Section>
    )
  },
}

export const HeaderOne: Story = {
  args: {
    ...Primary.args,
    maxWidth: '7xl',
  },
  render: (args) => {
    return (
      <Section>
        <TextMedia {...args}>
          <TextMedia.Content title="Website and Application Development" headerType="h1" width={50} hasUnderline>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
              accusamus in. Praesent quis ligula quis nulla malesuada tempor.
            </p>
            <ButtonGroup>
              <a
                href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
                className="cu-button cu-button--red"
              >
                Read more
              </a>
            </ButtonGroup>
          </TextMedia.Content>
          <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
        </TextMedia>
      </Section>
    )
  },
}
