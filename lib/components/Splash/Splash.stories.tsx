import type { Meta, StoryObj } from '@storybook/react'
import { Splash } from './Splash'
import { Card } from '../Card/Card'
import { Column } from '../../layouts/Column/Column'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

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

export const Primary: Story = {
  args: {
    backgroundType: 'image',
    backgroundImage: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    logo: 'athletics',
    preHeader: 'Welcome to',
    header: 'Carleton Athletics',
    contentType: 'button',
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <ButtonGroup align="center">
          <Button type="button" title="Visit Go Ravens" />
          <Button type="button" title="View Programs" />
          <Button type="button" title="Campus Facilities" />
        </ButtonGroup>
      </Splash>
    )
  },
}

export const ImageWithCards: Story = {
  args: {
    backgroundType: 'image',
    backgroundImage: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    logo: 'athletics',
    preHeader: 'Welcome to',
    header: 'Carleton Athletics',
    contentType: 'cards',
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <Column cols="3">
          <Card isCenterDesktop isDark>
            <Card.Header title="Varsity" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Visit Go Ravens
              </a>
            </Card.Footer>
          </Card>
          <Card isCenterDesktop isDark>
            <Card.Header title="Community" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                View Programs
              </a>
            </Card.Footer>
          </Card>
          <Card isCenterDesktop isDark>
            <Card.Header title="Students" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
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
    backgroundType: 'video',
    backgroundVideoName: 'discover',
    mobileBackgroundImage: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    preHeader: 'Welcome to',
    header: 'Carleton Athletics',
    contentType: 'button',
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <ButtonGroup align="center">
          <Button type="button" title="Visit Go Ravens" />
          <Button type="button" title="View Programs" />
          <Button type="button" title="Campus Facilities" />
        </ButtonGroup>
      </Splash>
    )
  },
}

export const WithVideoAndCards: Story = {
  args: {
    backgroundType: 'video',
    backgroundVideoName: 'discover',
    mobileBackgroundImage: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    preHeader: 'Welcome to',
    header: 'Carleton Athletics',
    contentType: 'cards',
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <Column cols="3">
          <Card isCenterDesktop isDark>
            <Card.Header title="Varsity" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                Visit Go Ravens
              </a>
            </Card.Footer>
          </Card>
          <Card isCenterDesktop isDark>
            <Card.Header title="Community" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
            </Card.Body>
            <Card.Footer>
              <a href="#" className="cu-button cu-button--red cu-button--small">
                View Programs
              </a>
            </Card.Footer>
          </Card>
          <Card isCenterDesktop isDark>
            <Card.Header title="Students" />
            <Card.Body>
              <Card.Excerpt
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum dolor."
                truncateOnMobile
              />
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
