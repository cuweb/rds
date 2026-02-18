import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageCover } from './ImageCover'
import { Main } from '../../layouts/Main/Main'
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

export const Primary: Story = {
  render: (args) => (
    <Main>
      <ImageCover {...args}>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris arcu, vehicula sed leo ut, finibus
          gravida massa. Nunc euismod risus porta tellus dignissim posuere. Proin quis commodo nisl. In commodo laoreet
          urna, eget lobortis nulla cursus ut. Cras sagittis velit in ligula volutpat, id tempus felis dignissim. Nullam
          a massa vehicula, placerat nulla nec, gravida sem. Mauris ex ligula, hendrerit et tristique non, sodales in
          turpis. Proin tincidunt ante vehicula lorem auctor ullamcorper. Vestibulum vulputate lectus ante, et cursus
          risus auctor sed. Quisque justo lacus, dapibus eu eros quis, suscipit elementum nisl. Praesent nunc augue,
          lacinia eget interdum at, commodo eleifend velit. Morbi pretium consectetur libero quis aliquet. Aliquam vitae
          nulla ac quam auctor efficitur sit amet eget massa. Donec porta nunc et sapien sodales, et viverra orci
          tincidunt. Duis nisl ex, imperdiet eu leo eget, tempus vestibulum leo. Sed viverra, eros non aliquet ultrices,
          mauris arcu gravida augue, sit amet placerat est leo et augue.{' '}
        </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris arcu, vehicula sed leo ut, finibus
          gravida massa. Nunc euismod risus porta tellus dignissim posuere. Proin quis commodo nisl. In commodo laoreet
          urna, eget lobortis nulla cursus ut. Cras sagittis velit in ligula volutpat, id tempus felis dignissim. Nullam
          a massa vehicula, placerat nulla nec, gravida sem. Mauris ex ligula, hendrerit et tristique non, sodales in
          turpis. Proin tincidunt ante vehicula lorem auctor ullamcorper. Vestibulum vulputate lectus ante, et cursus
          risus auctor sed. Quisque justo lacus, dapibus eu eros quis, suscipit elementum nisl. Praesent nunc augue,
          lacinia eget interdum at, commodo eleifend velit. Morbi pretium consectetur libero quis aliquet. Aliquam vitae
          nulla ac quam auctor efficitur sit amet eget massa. Donec porta nunc et sapien sodales, et viverra orci
          tincidunt. Duis nisl ex, imperdiet eu leo eget, tempus vestibulum leo. Sed viverra, eros non aliquet ultrices,
          mauris arcu gravida augue, sit amet placerat est leo et augue.{' '}
        </p>
      </ImageCover>
    </Main>
  ),
}

Primary.args = {
  children: '',
  as: 'section',
  maxWidth: '5xl',
  image: 'tory',
  imageZoom: 0,
  opacity: 85,
  focalPointX: '50',
  focalPointY: '50',
}

export const WithChildren: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <Main>
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
    </Main>
  ),
}
