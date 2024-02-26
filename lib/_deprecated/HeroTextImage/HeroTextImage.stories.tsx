import type { Meta, StoryObj } from '@storybook/react'
import { HeroTextImage } from './HeroTextImage'
import { Button } from '../../components/Button/Button'

const meta: Meta<typeof HeroTextImage> = {
  title: 'Deprecated/Hero Text Image',
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
    <HeroTextImage hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" />
    </HeroTextImage>
  ),
}

export const ImageLeft: Story = {
  render: () => (
    <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" />
    </HeroTextImage>
  ),
}

export const ImageAngle: Story = {
  render: () => (
    <HeroTextImage hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
    </HeroTextImage>
  ),
}

export const ImageLeftAngle: Story = {
  render: () => (
    <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
    </HeroTextImage>
  ),
}

export const ImageDualAngle: Story = {
  render: () => (
    <HeroTextImage hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
    </HeroTextImage>
  ),
}

export const ImageLeftDualAngle: Story = {
  render: () => (
    <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content
        title="Website and Application Development"
        paragraph={SinglePara}
        headerType="h1"
        hasMediaCol
      >
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
    </HeroTextImage>
  ),
}

export const NoImage: Story = {
  render: () => (
    <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const NoParagraph: Story = {
  render: () => (
    <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" headerType="h1">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const UsingHeaderTwo: Story = {
  render: () => (
    <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" headerType="h2">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
  ),
}

export const PeopleProfile: Story = {
  render: () => (
    <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.People
        designation="Dr."
        title="Employee Profile"
        jobTitle="Financial Analyst, Business Office"
        degrees="Master of Business Administration"
        pronoun="They/Them"
        building="Dunton Tower"
        room="148-A"
        email="employee.email@carleton.ca"
        phone="613-520-2600"
        phoneExt="2497"
      >
        <HeroTextImage.Social resume="#" linkedin="#" twitter="#" facebook="#" />
      </HeroTextImage.People>
      <HeroTextImage.Media>
        <img src="https://picsum.photos/400/400" alt="Demo" />
      </HeroTextImage.Media>
    </HeroTextImage>
  ),
}

export const EventDetails: Story = {
  render: () => (
    <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Event
        title="Capital Hoops Classic"
        eventType="Hybrid"
        virtualType="Teams"
        virtualUrl="https://events.carleton.ca"
        startDate="March 21st, 2023 at 6:00pm"
        location="Raven’s Nest, 1125 Colonel By Drive"
        cost="$20 per adult, $15 for youth/senior"
        contactName="John Doe"
        contactEmail="johndoe@test.com"
        contactPhone="613-520-2600 x1234"
        primaryButtonUrl="https://carleton.ca"
        secondaryButtonUrl="https://carleton.ca/webservices"
        secondaryButtonText="More Information"
      />
      <HeroTextImage.Media image="https://picsum.photos/400/266"></HeroTextImage.Media>
    </HeroTextImage>
  ),
}
