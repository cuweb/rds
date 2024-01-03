import type { Meta, StoryObj } from '@storybook/react'
import { Listing } from './Listing'
import { content } from '../../data/ListingData'

const meta: Meta<typeof Listing> = {
  title: 'Components/Listing',
  component: Listing,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Listing>

export const Primary: Story = {}

Primary.args = {
  children: (
    <a href={content.link}>
      <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
    </a>
  ),
}

export const SmallHeader: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content isSmall>
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithoutLink: Story = {
  args: {
    noHover: true,
    children: (
      <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
    ),
  },
}

export const WithDate: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithBadges: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithExcerpt: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithImage: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Figure>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text={content.excerpt} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithDatebox: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} endDate={content.endDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
    ),
  },
}
