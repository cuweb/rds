import type { Meta, StoryObj } from '@storybook/react'
import { HeroTextImage } from './HeroTextImage'
import { Button } from '../../../components/Button/Button'
import { HeroTextImageContent } from './HeroTextImageContent'

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

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  title: 'Website and Application Development',
}

export const NoImage: Story = {
  render: () => (
    <HeroTextImage title="Website and Application Development">
      <HeroTextImageContent>
        <SinglePara />
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImageContent>
    </HeroTextImage>
  ),
}

export const WithImage: Story = {
  render: () => (
    <HeroTextImage title="Website and Application Development" image="https://picsum.photos/400/266">
      <HeroTextImageContent>
        <SinglePara />
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImageContent>
    </HeroTextImage>
  ),
}

export const WithImageAngle: Story = {
  render: () => (
    <HeroTextImage title="Website and Application Development" image="https://picsum.photos/400/266" imageAngle>
      <HeroTextImageContent>
        <SinglePara />
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImageContent>
    </HeroTextImage>
  ),
}

export const WithSmallerHeader: Story = {
  render: () => (
    <HeroTextImage
      title="Website and Application Development"
      image="https://picsum.photos/400/266"
      imageAngle
      headerSmall
    >
      <HeroTextImageContent>
        <SinglePara />
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImageContent>
    </HeroTextImage>
  ),
}
