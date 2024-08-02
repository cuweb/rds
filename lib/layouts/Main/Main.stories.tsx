import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Article } from '../Article/Article'
import { Section } from '../Section/Section'
import { Main, MainProps } from './Main'

const meta: Meta<typeof Main> = {
  title: 'Layouts/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Main>

export const Primary: Story = {}

Primary.args = {
  children: 'Main HTML5 tag component',
  noProse: false,
}

export const WithSectionAndContent: Story = {
  args: {
    noProse: false,
  } as MainProps,
  render: (args) => (
    <Main noProse={args.noProse}>
      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
          vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
          condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
          volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
          malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
          sapien in urna.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
          in. Praesent quis ligula quis nulla malesuada tempor.
        </p>
      </Section>
    </Main>
  ),
}
