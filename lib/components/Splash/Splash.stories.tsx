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
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          backgroundType="image"
          backgroundImage="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
          opacity={80}
        />
        <Splash.Content
          logo="athletics"
          preHeader="Welcome to"
          header="Carleton Athletics"
          contentType="buttons"
          backgroundType="image"
        >
          <ButtonGroup align="center">
            <Button type="button" title="Visit Go Ravens" />
            <Button type="button" title="View Programs" />
            <Button type="button" title="Campus Facilities" />
          </ButtonGroup>
        </Splash.Content>
      </Splash>
    )
  },
}

export const ImageWithCards: Story = {
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          backgroundType="image"
          backgroundImage="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
        />
        <Splash.Content
          logo="athletics"
          preHeader="Welcome to"
          header="Carleton Athletics"
          contentType="cards"
          backgroundType="image"
        >
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
        </Splash.Content>
      </Splash>
    )
  },
}

export const WithVideo: Story = {
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          backgroundType="video"
          backgroundVideoName="campus-2025"
          mobileBackgroundImage="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
        />
        <Splash.Content
          logo="athletics"
          preHeader="Welcome to"
          header="Carleton Athletics"
          contentType="buttons"
          backgroundType="video"
        >
          <ButtonGroup align="center">
            <Button type="button" title="Visit Go Ravens" />
            <Button type="button" title="View Programs" />
            <Button type="button" title="Campus Facilities" />
          </ButtonGroup>
        </Splash.Content>
      </Splash>
    )
  },
}

export const WithVideoAndCards: Story = {
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          backgroundType="video"
          backgroundVideoName="campus-2025"
          mobileBackgroundImage="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
        />
        <Splash.Content
          logo="athletics"
          preHeader="Welcome to"
          header="Carleton Athletics"
          contentType="cards"
          backgroundType="video"
        >
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
        </Splash.Content>
      </Splash>
    )
  },
}
