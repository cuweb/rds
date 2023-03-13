/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { PeopleCard } from '../components/Cards/PeopleCard/PeopleCard'
const meta: Meta<typeof PeopleCard> = {
  title: 'Cards & Lists/Cards/People Card',
  component: PeopleCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PeopleCard>

export const Default: Story = {}

Default.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: ' 613-520-2600 x1234',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
  profileImage: 'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
}

export const NoProfileImage: Story = {}

NoProfileImage.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: ' 613-520-2600 x1234',
  link: 'https://carleton.ca',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
}

export const MultipleCardsWithImage: Story = {
  render: () => (
    <Column cols="4" maxWidth="7xl" gridGap="5">
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
        profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
        profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
        profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
        profileImage="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
      />
    </Column>
  ),
}

export const MultipleCardsWithoutImage: Story = {
  render: () => (
    <Column cols="4" maxWidth="7xl" gridGap="5">
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
      />
      <PeopleCard
        firstName="Carleton"
        lastName="Banks"
        email="george.hadjisophocleous@carleton.ca"
        phoneNumber=" 613-520-2600 x1234"
        link="https://carleton.ca"
        tags={{
          category: [
            {
              id: 1,
              name: 'Breaking News',
              slug: 'breaking-news',
            },
            {
              id: 2,
              name: 'Headline',
              slug: 'headline',
            },
          ],
        }}
      />
    </Column>
  ),
}

export const MinimumPeople: Story = {
  render: () => (
    <PeopleCard
      firstName="Carleton"
      lastName="Banks"
      email="george.hadjisophocleous@carleton.ca"
      link="https://carleton.ca"
    />
  ),
}
