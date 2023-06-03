import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './Banner'
import { Button } from '../../components/Button/Button'
import { Main } from '../../layouts/Main/Main'
import { Column } from '../../layouts/Column/Column'
import { StarIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Banner> = {
  title: 'Deprecated/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Banner>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  children: 'Header Banner',
  title: 'Basic Banner',
}

export const WithButtonsTemplate: Story = {
  render: () => (
    <Banner title="Header Banner">
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithImageTemplate: Story = {
  render: () => (
    <Banner
      title="Image Banner"
      isType="image"
      image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
    >
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithGreyGradientTemplate: Story = {
  render: () => (
    <Banner title="CU Light Fade Banner" isType="light-fade">
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithDarkWaveTemplate: Story = {
  render: () => (
    <Banner title="CU Wave Banner" isType="dark-wave">
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithRedWaveTemplate: Story = {
  render: () => (
    <Banner title="CU Wave Banner" isType="red-wave">
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithAnimationTemplate: Story = {
  render: () => (
    <Banner title="CU Animated Banner" isType="animated">
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithParagraphTemplate: Story = {
  render: () => (
    <Banner
      title="Banner with Paragraph"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis."
    >
      <Banner.ButtonGroup>
        <Button onClick={() => undefined} title="Primary Button" hasShadow />
        <Button color="white" onClick={() => undefined} title="Secondary Button" hasShadow />
        <Button
          hasShadow
          icon={StarIcon}
          color="dark-grey"
          onClick={() => {
            alert('Add to favs clicked')
          }}
          title="Add to Favs"
        />
      </Banner.ButtonGroup>
    </Banner>
  ),
}

export const WithOverlapTemplate: Story = {
  render: () => (
    <>
      <Banner title="Banner with Content Overlap" isType="dark-wave" hasOverlap />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="rounded-lg bg-white px-8 pb-24 pt-6">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
  ),
}

export const WithOverlapImageTemplate: Story = {
  render: () => (
    <>
      <Banner
        title="Banner Image with Content Overlap"
        isType="image"
        image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
        hasOverlap
      />
      <Main hasOverlap>
        <Column maxWidth="5xl">
          <div className="rounded-lg bg-white px-8 pb-24 pt-6">
            This is an example of the main wrapped overlapping the banner
          </div>
        </Column>
      </Main>
    </>
  ),
}
