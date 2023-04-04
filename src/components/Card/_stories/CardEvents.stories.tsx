import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { Card } from '../Card'
import { EventData as data } from '../../../data/EventData'

const meta: Meta<typeof Card> = {
  title: 'Cards & Lists/Card/Events',
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
        <Card key={item?.id}>
          <a href={item?.link}>
            <Card.Figure>
              <img src={item?.image} alt={item?.alt} width={400} height={175} />
            </Card.Figure>
            <Card.Content>
              <Card.DateBox startDate={item?.startDate} />
              <Card.Header text={item?.title} />
              <Card.EventMeta
                startDateTime={item?.startDate}
                endDateTime={item?.endDate}
                onCampus={item?.on_campus}
                onCampusBuilding={item?.on_campus_building}
                onCampusRoomNumber={item?.on_campus_room_number}
                eventAddress={item?.event_address}
              />
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
        <Card key={item?.id}>
          <a href={item?.link}>
            <Card.Figure>
              <img src={item?.image} alt={item?.alt} width={400} height={175} />
            </Card.Figure>
            <Card.Content>
              <Card.DateBox startDate={item?.startDate} />
              <Card.Header text={item?.title} />
              <Card.EventMeta
                startDateTime={item?.startDate}
                endDateTime={item?.endDate}
                onCampus={item?.on_campus}
                onCampusBuilding={item?.on_campus_building}
                onCampusRoomNumber={item?.on_campus_room_number}
                eventAddress={item?.event_address}
              />
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
        <Card key={item?.id}>
          <a href={item?.link}>
            <Card.Figure>
              <img src={item?.image} alt={item?.alt} width={400} height={175} />
            </Card.Figure>
            <Card.Content>
              <Card.DateBox startDate={item?.startDate} />
              <Card.Header text={item?.title} />
              <Card.EventMeta
                startDateTime={item?.startDate}
                endDateTime={item?.endDate}
                onCampus={item?.on_campus}
                onCampusBuilding={item?.on_campus_building}
                onCampusRoomNumber={item?.on_campus_room_number}
                eventAddress={item?.event_address}
              />
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
        <Card key={item?.id}>
          <a href={item?.link}>
            <Card.Figure>
              <img src={item?.image} alt={item?.alt} width={400} height={175} />
            </Card.Figure>
            <Card.Content>
              <Card.DateBox startDate={item?.startDate} />
              <Card.Header text={item?.title} />
              <Card.EventMeta
                startDateTime={item?.startDate}
                endDateTime={item?.endDate}
                onCampus={item?.on_campus}
                onCampusBuilding={item?.on_campus_building}
                onCampusRoomNumber={item?.on_campus_room_number}
                eventAddress={item?.event_address}
              />
            </Card.Content>
            <Card.Badges tags={item?.tags} />
          </a>
        </Card>
      ))}
    </Column>
  ),
}
