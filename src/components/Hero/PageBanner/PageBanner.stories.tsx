import type { Meta, StoryObj } from '@storybook/react'
import { PageBanner } from './PageBanner'
import { Button } from '../../Button/Button'

const meta: Meta<typeof PageBanner> = {
  title: 'Components/Hero/Page Banner',
  component: PageBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof PageBanner>

const SinglePara =
  'Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.'

export const DefaultTemplate: Story = {
  render: () => (
    <PageBanner>
      <PageBanner.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </PageBanner.Content>
    </PageBanner>
  ),
}

export const NoImage: Story = {
  render: () => (
    <PageBanner>
      <PageBanner.Content title="Website and Application Development" image="https://picsum.photos/400/266">
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </PageBanner.Content>
    </PageBanner>
  ),
}

export const WithImageAngle: Story = {
  render: () => (
    <PageBanner>
      <PageBanner.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        image="https://picsum.photos/400/266"
        imageAngle
      >
        <div className="buttons flex flex-wrap gap-6 md:flex-1">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </PageBanner.Content>
    </PageBanner>
  ),
}

export const WithSmallerHeader: Story = {
  render: () => (
    <PageBanner>
      <PageBanner.Content
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
      </PageBanner.Content>
    </PageBanner>
  ),
}
