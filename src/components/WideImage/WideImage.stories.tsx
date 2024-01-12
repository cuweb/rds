import type { Meta, StoryObj } from '@storybook/react'
import { WideImage } from './WideImage'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta<typeof WideImage> = {
  title: 'Components/Wide Image',
  component: WideImage,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof WideImage>

export const Default: Story = {}

Default.args = {
  title: 'Wide image block with buttons and background image',
}

export const HeaderOne: Story = {
  args: {
    ...Default.args,
    headerType: 'h1',
  },
}

export const WithButtons: Story = {
  args: {
    ...Default.args,
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    ),
  },
}

export const BgImage: Story = {
  args: {
    ...Default.args,
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
    ),
  },
}

export const HeaderOneButtons: Story = {
  args: {
    ...Default.args,
    isType: 'light',
    headerType: 'h1',
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    ),
  },
}

export const BgImageHeaderOne: Story = {
  args: {
    ...Default.args,
    headerType: 'h1',
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
    ),
  },
}

export const Width5xl: Story = {
  args: {
    ...Default.args,
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    maxWidth: '5xl',
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
    ),
  },
}

export const BgDark: Story = {
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    image: '',
    isType: 'dark',
    maxWidth: '5xl',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.SignupForm buttonText="Subscribe" />
      </>
    ),
  },
}
