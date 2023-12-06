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
  render: () => (
    <TextImage hasBorder>
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
  render: () => (
    <TextImage hasBorder maxWidth="7xl">
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
  render: () => (
    <TextImage hasBorder flipX>
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

export const ImageAngle: Story = {
  render: () => (
    <TextImage maxWidth="7xl" hasBorder>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/400/266"
        imageZoom={50}
        angle="left"
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

export const ImageAngleReverse: Story = {
  render: () => (
    <TextImage maxWidth="7xl" hasBorder flipX>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/400/266"
        angle="left"
        flipX
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

export const ImageDualAngle: Story = {
  render: () => (
    <TextImage maxWidth="7xl" hasBorder>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/400/266"
        angle="dual"
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

export const ImageDualAngleReverse: Story = {
  render: () => (
    <TextImage maxWidth="7xl" hasBorder flipX>
      <TextImage.Content
        title="Website and Application Development"
        imageUrl="https://picsum.photos/400/266"
        angle="dual"
        flipX
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

export const NoImage: Story = {
  render: () => (
    <TextImage>
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

export const PeopleProfile: Story = {
  render: () => (
    <TextImage flexRow="md" flipYsm>
      <TextImage.People
        designation="Mr. "
        pronoun="he/him"
        name="Greely Wrinkle"
        jobTitle="Jedi Master & Jedi Council Member"
        degrees="Certificate, Padawan Academy of Jedi Arts"
        building="Onraed"
        room="Sector A29"
        email="greely@thejediyouseek.com"
        phone="613-520-2600"
        phoneExt="1234"
        resume="#"
        linkedin="#"
        twitter="#"
        facebook="#"
      >
        <img
          src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
          alt="People profile graphic"
          width="350"
          height="350"
        />
      </TextImage.People>
    </TextImage>
  ),
}

export const EventDetails: Story = {
  render: () => (
    <TextImage>
      <TextImage.Event
        title="Capital Hoops Classic"
        eventType="Hybrid"
        virtualType="Teams"
        virtualUrl="https://events.carleton.ca"
        startDate="March 21st, 2023 at 6:00pm"
        location="Raven's Nest, 1125 Colonel By Drive"
        cost="$20 per adult, $15 for youth/senior"
        contactName="John Doe"
        contactEmail="johndoe@test.com"
        contactPhone="613-520-2600 x1234"
        primaryButtonUrl="https://carleton.ca"
        secondaryButtonUrl="https://carleton.ca/webservices"
        secondaryButtonText="More Information"
      >
        <img
          src="https://cu-production.s3.amazonaws.com/rds/sample-imgs/event-img.jpg"
          alt="Event supporting graphic"
          width="350"
          height="153"
        />
      </TextImage.Event>
    </TextImage>
  ),
}
