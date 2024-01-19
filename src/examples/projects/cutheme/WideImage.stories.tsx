import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'

import { Nav } from '../../../components/Nav/Nav'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { Button } from '../../../components/Button/Button'
import { HeroTextImage } from '../../../_deprecated/HeroTextImage/HeroTextImage'
import { WideImage } from '../../../components/WideImage/WideImage'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { NavDataSingle, NavAsideData } from '../../../data/NavData'

const meta: Meta = {
  title: 'Examples/Projects/cutheme',
}

export default meta
type Story = StoryObj

const heroPara = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
condimentum magna vel orci vulputate, eget vulputate neque porttitor.`

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

export const WideImageBanner: Story = {
  render: () => (
    <>
      <Nav navType="secondary">
        <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
        <Nav.Aside menu={NavAsideData} />
        <Nav.Secondary>
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Secondary>
      </Nav>

      <Main>
        <Section hasProse>
          <WideImage
            headerType="h1"
            image="https://picsum.photos/1600/700"
            title="Wide image block with buttons and background image"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <DoublePara />

          <WideImage title="Subscribe to Newsletter" headerType="h1" isType="dark">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec tortor eu quam ultricies
              pellentesque et quis odio. Etiam sit amet ex commodo, scelerisque turpis ullamcorper, sollicitudin lacus.
            </p>
            <WideImage.Signup buttonText="Subscribe" />
          </WideImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="With image right and left angle" paragraph={heroPara} hasMediaCol>
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage reverse>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} hasMediaCol>
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" angle="none" />
          </HeroTextImage>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
