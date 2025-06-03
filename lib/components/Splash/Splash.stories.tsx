import type { Meta, StoryObj } from '@storybook/react'
import { Splash } from './Splash'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { Column } from '../../layouts/Column/Column'

const meta: Meta<typeof Splash> = {
  title: 'Components/Splash',
  component: Splash,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Splash>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          type="image"
          src="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
        />
        <Splash.Content eyebrow="Welcome to" header="Carleton Athletics" contentType="button">
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
  args: {},
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background
          type="image"
          src="https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png"
        />
        <Splash.Content eyebrow="Welcome to" header="Carleton Athletics">
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
        </Splash.Content>
      </Splash>
    )
  },
}

export const WithVideo: Story = {
  args: {},
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background type="video" videoName="discover" />
        <Splash.Content eyebrow="Welcome to" header="Carleton Athletics" contentType="button">
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
  args: {},
  render: (args) => {
    return (
      <Splash {...args}>
        <Splash.Background type="video" videoName="discover" />
        <Splash.Content eyebrow="Welcome to" header="Carleton Athletics">
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
        </Splash.Content>
      </Splash>
    )
  },
}
