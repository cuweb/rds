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
  title: 'Wide image with defaults',
}

export const WithButtons: Story = {
  args: {
    ...Default.args,
    title: 'Wide image with buttons, praesentium architecto a distinctio aut reprehenderit ducimus',
    children: (
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    ),
  },
}

export const BgDark: Story = {
  args: {
    ...Default.args,
    title: 'Wide image with dark background',
    image: '',
    isType: 'dark',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        {/* <WideImage.Signup /> */}
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </>
    ),
  },
}

export const BgImage: Story = {
  args: {
    ...Default.args,
    title: 'Wide image with image background',
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

export const HeaderOne: Story = {
  args: {
    ...Default.args,
    title: 'Wide image as banner with h1',
    headerType: 'h1',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </>
    ),
  },
}

export const SignupLight: Story = {
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
    ),
  },
}

export const SignupDark: Story = {
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    isType: 'dark',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
    ),
  },
}

export const SignupImage: Story = {
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    children: (
      <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
    ),
  },
}
