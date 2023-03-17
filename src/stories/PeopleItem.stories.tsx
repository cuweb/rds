import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { PeopleItem } from '../components/Listings/PeopleItem/PeopleItem'
import { PeopleItemsData as data } from '../components/Listings/PeopleItem/PeopleItemData'
import { StackedList } from '../layouts/StackedList/StackedList'

export default {
  title: 'Cards & Lists/Lists/People Item',
  component: PeopleItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof PeopleItem>

type Story = StoryObj<typeof PeopleItem>

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
  jobTitle: 'Manager',
  link: '#',
  profileImage: 'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
  alt: 'Image alt tag',
}

export const SingleItemList: Story = {
  render: (args) => (
    <Column maxWidth="5xl">
      <StackedList hasBorder>
        <PeopleItem {...args} />
      </StackedList>
    </Column>
  ),
}

SingleItemList.args = {
  firstName: 'Carleton',
  lastName: 'Banks',
  email: 'george.hadjisophocleous@carleton.ca',
  phoneNumber: '613-520-2600 x1234',
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
  jobTitle: 'Manager',
  link: '#',
}

export const MultiItemList: Story = {
  render: () => (
    <Column maxWidth="5xl">
      <StackedList cols="2" hasBorder hasShadow>
        {data.map(({ id, firstName, lastName, email, tags, profileImage, jobTitle, phoneNumber, link, alt }) => (
          <PeopleItem
            key={id}
            as="li"
            firstName={firstName}
            lastName={lastName}
            email={email}
            tags={tags}
            profileImage={profileImage}
            jobTitle={jobTitle}
            phoneNumber={phoneNumber}
            link={link}
            alt={alt}
          />
        ))}
      </StackedList>
    </Column>
  ),
}
