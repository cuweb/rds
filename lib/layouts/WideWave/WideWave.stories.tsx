import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideWave } from './WideWave'
import { Main } from '../../layouts/Main/Main'
import { TextMedia } from '../../components/TextMedia/TextMedia'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'

const meta: Meta<typeof WideWave> = {
  title: 'Layouts/Wide Wave',
  component: WideWave,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof WideWave>

export const Primary: Story = {}

Primary.args = {
  children: '',
  as: 'section',
  wave: 'red',
  hasRaven: false,
}

export const WithChildren: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <Main>
      <WideWave {...args}>
        <TextMedia maxWidth="7xl">
          <TextMedia.Content title="Red Wave with Text & Media" width={60} hasUnderline isWhite>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non placerat massa. Morbi ornare maximus
              ultricies. Nunc tempus nisl non ullamcorper sagittis. Suspendisse imperdiet vulputate tortor a dignissim.
              Praesent quam felis, laoreet id odio vitae, fringilla auctor lacus. Cras est libero, faucibus sit amet
              tristique vitae, auctor a justo. Fusce molestie, justo fermentum vehicula efficitur, leo ligula eleifend
              ante, in commodo diam turpis in ante.
            </p>
            <ButtonGroup>
              <a href="#" className="cu-button cu-button--white">
                Read more
              </a>
            </ButtonGroup>
          </TextMedia.Content>
          <TextMedia.Aside align="center" border="lg" borderColor="white">
            <img src="https://picsum.photos/id/431/600/460" alt="Presentation only" width="600" height="460" />
          </TextMedia.Aside>
        </TextMedia>
      </WideWave>
    </Main>
  ),
}

export const BlackWave: Story = {
  args: {
    ...Primary.args,
    wave: 'black',
    hasRaven: true,
  },
  render: (args) => (
    <Main>
      <WideWave {...args}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non placerat massa. Morbi ornare maximus
          ultricies. Nunc tempus nisl non ullamcorper sagittis. Suspendisse imperdiet vulputate tortor a dignissim.
          Praesent quam felis, laoreet id odio vitae, fringilla auctor lacus. Cras est libero, faucibus sit amet
          tristique vitae, auctor a justo. Fusce molestie, justo fermentum vehicula efficitur, leo ligula eleifend ante,
          in commodo diam turpis in ante.
        </p>
        <TextMedia maxWidth="7xl" reverse>
          <TextMedia.Content title="Red Wave with Text & Media" width={60} hasUnderline isWhite>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non placerat massa. Morbi ornare maximus
              ultricies. Nunc tempus nisl non ullamcorper sagittis. Suspendisse imperdiet vulputate tortor a dignissim.
              Praesent quam felis, laoreet id odio vitae, fringilla auctor lacus. Cras est libero, faucibus sit amet
              tristique vitae, auctor a justo. Fusce molestie, justo fermentum vehicula efficitur, leo ligula eleifend
              ante, in commodo diam turpis in ante.
            </p>
            <ButtonGroup>
              <a href="#" className="cu-button cu-button--white">
                Read more
              </a>
            </ButtonGroup>
          </TextMedia.Content>
          <TextMedia.Aside align="center" border="lg" borderColor="white">
            <img src="https://picsum.photos/id/431/600/460" alt="Presentation only" width="600" height="460" />
          </TextMedia.Aside>
        </TextMedia>
      </WideWave>
    </Main>
  ),
}
