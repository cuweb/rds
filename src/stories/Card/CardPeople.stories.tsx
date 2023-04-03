import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../layouts/Column/Column'
import { Card } from '../../components/Card/Card'
import { PeopleData as data } from '../../data/PeopleData'

const meta: Meta<typeof Card> = {
  title: 'Cards & Lists/Card/People',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: () => (
    <Column cols="2">
      {data.slice(0, 1).map((item) => (
        <Card key={item?.id} isCenter>
          <a href={item?.link}>
            <Card.Figure isRound>
              <img src={item?.image} alt={item?.alt} width={280} height={280} />
            </Card.Figure>
            <Card.Content>
              <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
              <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
            </Card.Content>
            <Card.Badges tags={item?.tags} />
          </a>
        </Card>
      ))}
    </Column>
  ),
}

export const TwoColumn: Story = {
  render: () => (
    <Column cols="2">
      {data.slice(0, 2).map((item) => (
        <Card key={item?.id} isCenter>
          <a href={item?.link}>
            <Card.Figure isRound>
              <img src={item?.image} alt={item?.alt} width={280} height={280} />
            </Card.Figure>
            <Card.Content>
              <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
              <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
            </Card.Content>
            <Card.Badges tags={item?.tags} />
          </a>
        </Card>
      ))}
    </Column>
  ),
}

export const ThreeColumn: Story = {
  render: () => (
    <Column cols="3">
      {data.slice(0, 3).map((item) => (
        <Card key={item?.id} isCenter>
          <a href={item?.link}>
            <Card.Figure isRound>
              <img src={item?.image} alt={item?.alt} width={280} height={280} />
            </Card.Figure>
            <Card.Content>
              <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
              <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
            </Card.Content>
            <Card.Badges tags={item?.tags} />
          </a>
        </Card>
      ))}
    </Column>
  ),
}

export const SixCardGrid: Story = {
  render: () => (
    <Column cols="3">
      {data.slice(0, 6).map((item) => (
        <Card key={item?.id} isCenter>
          <a href={item?.link}>
            <Card.Figure isRound>
              <img src={item?.image} alt={item?.alt} width={280} height={280} />
            </Card.Figure>
            <Card.Content>
              <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
              <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
            </Card.Content>
            <Card.Badges tags={item?.tags} />
          </a>
        </Card>
      ))}
    </Column>
  ),
}
