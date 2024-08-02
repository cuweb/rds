import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Article, ArticleProps } from './Article'
import { Main } from '../Main/Main'
import { Section } from '../Section/Section'
import { ArticleData as data } from '../../data/ArticleData'

const meta: Meta<typeof Article> = {
  title: 'Layouts/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Article>

export const Primary: Story = {}

Primary.args = {
  children: 'Article HTML5 tag as component',
  content: '',
}

export const WithMainAndSection: Story = {
  args: {} as ArticleProps,
  render: (args) => (
    <Main>
      <Section>
        <Article {...args}>
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
        </Article>
      </Section>
    </Main>
  ),
}

export const ContentProp: Story = {
  name: 'Content as a Prop',
  args: {
    content: data,
  },
  render: (args) => (
    <Main>
      <Section>
        <Article {...args} />
      </Section>
    </Main>
  ),
}
