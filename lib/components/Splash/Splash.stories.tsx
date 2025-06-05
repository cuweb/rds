import type { Meta, StoryObj } from '@storybook/react'
import { Splash } from './Splash'
import { Card } from '../Card/Card'
import { Column } from '../../layouts/Column/Column'

const meta: Meta<typeof Splash> = {
  title: 'Components/Splash',
  component: Splash,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Splash>

const SplashButtons = [
  {
    title: 'Visit Go Ravens',
    href: '#',
  },
  {
    title: 'View Programs',
    href: '#',
  },
  {
    title: 'Campus Facilities',
    href: '#',
  },
]

export const Primary: Story = {
  args: {
    type: 'image',
    src: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    eyebrow: 'Welcome to',
    header: 'Carleton Athletics',
    buttons: SplashButtons,
  },
  render: (args) => {
    return <Splash {...args} />
  },
}

export const ImageWithCards: Story = {
  args: {
    type: 'image',
    src: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    eyebrow: 'Welcome to',
    header: 'Carleton Athletics',
    buttons: SplashButtons,
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <Column cols="3">
          <Card isCenter isDark>
            <Card.Header title="Varsity" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Visit Go Ravens
              </a>
            </Card.Footer>
          </Card>
          <Card isCenter isDark>
            <Card.Header title="Community" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                View Programs
              </a>
            </Card.Footer>
          </Card>
          <Card isCenter isDark>
            <Card.Header title="Students" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Campus Facilities
              </a>
            </Card.Footer>
          </Card>
        </Column>
      </Splash>
    )
  },
}

export const WithVideo: Story = {
  args: {
    type: 'video',
    videoName: 'discover',
    eyebrow: 'Welcome to',
    header: 'Carleton Athletics',
    buttons: SplashButtons,
  },
  render: (args) => {
    return <Splash {...args} />
  },
}

export const WithVideoAndCards: Story = {
  args: {
    type: 'video',
    videoName: 'discover',
    eyebrow: 'Welcome to',
    header: 'Carleton Athletics',
    buttons: SplashButtons,
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <Column cols="3">
          <Card isCenter isDark>
            <Card.Header title="Varsity" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Visit Go Ravens
              </a>
            </Card.Footer>
          </Card>
          <Card isCenter isDark>
            <Card.Header title="Community" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                View Programs
              </a>
            </Card.Footer>
          </Card>
          <Card isCenter isDark>
            <Card.Header title="Students" />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor." />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Campus Facilities
              </a>
            </Card.Footer>
          </Card>
        </Column>
      </Splash>
    )
  },
}
