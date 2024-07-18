import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideImage } from './WideImage'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

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
  title: 'Wide image default',
}

const handleScroll = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: 'smooth',
  })
}

export const WithButtons: Story = {
  render: (args) => (
    <WideImage {...args}>
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    </WideImage>
  ),
}
WithButtons.args = { ...Default.args, title: 'Wide image with buttons' }

export const BgDark: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="grey" />
      </ButtonGroup>
      <ChevronDownIcon
        onClick={handleScroll}
        className="w-8 h-8 mt-5 transition-transform rotate-0 accordion__icon flex items-center justify-center cursor-pointer"
        stroke={'white'}
        strokeWidth={2}
      />
    </WideImage>
  ),
}
BgDark.args = { ...Default.args, title: 'Wide image with dark bg', isType: 'dark' }

export const BgImage: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="grey" />
      </ButtonGroup>
    </WideImage>
  ),
}
BgImage.args = {
  ...Default.args,
  title: 'Wide image with bg image',
  isType: 'image',
  image: 'https://picsum.photos/1600/700',
}

export const ScrollTo: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
    </WideImage>
  ),
}
ScrollTo.args = {
  ...Default.args,
  title: 'Wide image with bg image',
  isType: 'image',
  image: 'https://picsum.photos/1600/700',
}

export const SignupLight: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
      <WideImage.Signup />
    </WideImage>
  ),
}
SignupLight.args = {
  ...Default.args,
  title: 'Subscribe to Our Newsletter',
}

export const SignupDark: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
      <WideImage.Signup />
    </WideImage>
  ),
}
SignupDark.args = {
  ...Default.args,
  title: 'Subscribe to Our Newsletter',
  isType: 'dark',
}

export const SignupImage: Story = {
  render: (args) => (
    <WideImage {...args}>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
      <WideImage.Signup />
    </WideImage>
  ),
}
SignupImage.args = {
  ...Default.args,
  title: 'Subscribe to Our Newsletter',
  isType: 'image',
  image: 'https://picsum.photos/1600/700',
}
