import type { Meta, StoryObj } from '@storybook/react'
import { HeroBanner } from './HeroBanner'
import { Button } from '../../Button/Button'

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/Hero/Hero Banner',
  component: HeroBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof HeroBanner>

const SinglePara =
  'Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.'

export const DefaultTemplate: Story = {
  render: () => (
    <HeroBanner>
      <HeroBanner.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroBanner.Content>
    </HeroBanner>
  ),
}

export const NoImage: Story = {
  render: () => (
    <HeroBanner>
      <HeroBanner.Content title="Website and Application Development" image="https://picsum.photos/400/266">
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroBanner.Content>
    </HeroBanner>
  ),
}

export const WithImageAngle: Story = {
  render: () => (
    <HeroBanner>
      <HeroBanner.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
        imageAngle
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroBanner.Content>
    </HeroBanner>
  ),
}

export const WithoutContent: Story = {
  render: () => (
    <HeroBanner>
      <HeroBanner.Content title="Website and Application Development" image="https://picsum.photos/400/266" imageAngle>
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroBanner.Content>
    </HeroBanner>
  ),
}

export const WithSmallerHeader: Story = {
  render: () => (
    <HeroBanner>
      <HeroBanner.Content
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
      </HeroBanner.Content>
    </HeroBanner>
  ),
}
