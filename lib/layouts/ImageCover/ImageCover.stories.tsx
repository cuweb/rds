import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageCover } from './ImageCover'
import { Section } from '../../layouts/Section/Section'
import { Column } from '../../layouts/Column/Column'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Card } from '../../components/Card/Card'
import { Embed } from '../../components/Embed/Embed'
import { PromoData } from '../../data/PromoData'

const meta: Meta<typeof ImageCover> = {
  title: 'Layouts/Image Cover',
  component: ImageCover,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageCover>

export const Primary: Story = {}

Primary.args = {
  children: '',
  maxWidth: '7xl',
  imageUrl: 'https://picsum.photos/id/516/1600/1200',
  imageZoom: 0,
  focalPointX: '50',
  focalPointY: '50',
}

export const WithChildren: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <ImageCover {...args}>
      <Section as="div" maxWidth="7xl">
        <PageHeader as="h2" header="Attend Carleton" size="md" />
        <Column cols="4" maxWidth="7xl">
          {PromoData.slice(0, 4).map(({ id, link, title, image, alt }) => (
            <Card key={id} noHover>
              <Card.Figure>
                <img src={image} alt={alt} width="200" height="133" />
              </Card.Figure>
              <Card.Header title={title} />
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  More info
                </a>
              </Card.Footer>
            </Card>
          ))}
        </Column>
      </Section>
      <Section as="div" maxWidth="7xl">
        <Embed maxWidth="7xl">
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=ZISHr6sPNCE" />
        </Embed>
      </Section>
    </ImageCover>
  ),
}
