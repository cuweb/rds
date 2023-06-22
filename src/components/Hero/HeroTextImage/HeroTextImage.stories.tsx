import type { Meta, StoryObj } from '@storybook/react'
import { HeroTextImage } from './HeroTextImage'
import { Button } from '../../Button/Button'

const meta: Meta<typeof HeroTextImage> = {
  title: 'Components/Hero/Hero Text Image',
  component: HeroTextImage,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof HeroTextImage>

const SinglePara =
  'Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.'

export const DefaultTemplate: Story = {
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/800/266"
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const TitleAsH1: Story = {
  name: 'Title as an H1',
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/800/266"
        headerType="h1"
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const NoImage: Story = {
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content title="Website and Application Development" image="https://picsum.photos/400/266">
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const WithImageAngle: Story = {
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
        imageAngle
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const WithoutContent: Story = {
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content
        title="Website and Application Development"
        image="https://picsum.photos/400/266"
        imageAngle
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const WithSmallerHeader: Story = {
  render: () => (
    <HeroTextImage>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
        imageAngle
        headerSmall
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}
