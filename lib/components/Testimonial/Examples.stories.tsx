import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../Footer/FooterStandard/FooterStandard'
import { Nav } from '../Nav/Nav'
import { NavButtonsData } from '../../data/NavData'
import { Testimonial } from './Testimonial'
import { Quote } from '../Quote/Quote'
import { PageHeader } from '../PageHeader/PageHeader'

const meta: Meta = {
  title: 'Components/Testimonial/Examples',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const LayoutExamples: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader
            as="h1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Trestimonial Examples"
            size="lg"
          />
          <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
            <Quote cite="Jane Doe" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
              </p>
            </Quote>
          </Testimonial>
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Testimonial
          focalPointX={50}
          focalPointY={50}
          imageUrl="https://picsum.photos/id/342/600/400"
          imageZoom={0}
          reverse={true}
        >
          <Quote cite="John Smith" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor. Image positioned on
              the right side.
            </p>
          </Quote>
        </Testimonial>

        <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
          <Quote cite="Jane Doe" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
          <Quote cite="Jane Doe" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>

        <Section maxWidth="7xl" isGrey>
          <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
            <Quote cite="Jane Doe" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
              </p>
            </Quote>
          </Testimonial>

          <Testimonial
            focalPointX={50}
            focalPointY={50}
            imageUrl="https://picsum.photos/id/167/600/400"
            imageZoom={0}
            reverse={true}
          >
            <Quote cite="Alice Johnson" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Right-aligned image in grey section.
              </p>
            </Quote>
          </Testimonial>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
          <Quote cite="Jane Doe" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>

        <Section maxWidth="7xl">
          <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
            <Quote cite="Jane Doe" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
              </p>
            </Quote>
          </Testimonial>
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <Testimonial focalPointX={50} focalPointY={50} imageUrl="https://picsum.photos/id/342/600/400" imageZoom={0}>
            <Quote cite="Jane Doe" graphic="quote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
                mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
              </p>
            </Quote>
          </Testimonial>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
