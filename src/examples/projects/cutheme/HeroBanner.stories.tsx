import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'

import { TopNav } from '../../../components/TopNav/TopNav'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'

import { Button } from '../../../components/Button/Button'
import { HeroBanner } from '../../../components/Hero/HeroBanner/HeroBanner'

const meta: Meta = {
  title: 'Examples/Projects/cutheme/Blocks',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
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
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const Banners: Story = {
  render: () => (
    <>
      <TopNav title="Carleton University" />

      <Main>
        <Section hasProse>
          <HeroBanner hasBorder>
            <HeroBanner.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner maxWidth="5xl" hasBorder>
            <HeroBanner.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner maxWidth="5xl">
            <HeroBanner.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner>
            <HeroBanner.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
