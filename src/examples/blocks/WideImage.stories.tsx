import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { TopBar } from '../../components/TopBar/TopBar'
import { WideImage } from '../../components/WideImage/WideImage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const WideImages: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <img
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <WideImage
            headerType="h1"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block as banner (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            title="Basic wide image block (adding extra text to test the overall width of the heading)"
          />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            title="Basic wide image block (adding extra text to test the overall width of the heading)"
          />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage title="Basic wide image block (adding extra text to test the overall width of the heading)" />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            title="Basic wide image block (adding extra text to test the overall width of the heading)"
          >
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            title="Basic wide image block (adding extra text to test the overall width of the heading)"
          >
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage title="Basic wide image block (adding extra text to test the overall width of the heading)">
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            isType="image"
            title="Wide image block with buttons (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            isType="image"
            title="Wide image block with buttons (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            isType="image"
            title="Wide image block with buttons (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          />

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage title="Wide image block with image (adding extra text to test the overall width of the heading)">
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            isType="dark"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            isType="dark"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            isType="dark"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="5xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            maxWidth="7xl"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>

          <WideImage
            image="https://picsum.photos/1600/700"
            isType="image"
            title="Wide image block with image (adding extra text to test the overall width of the heading)"
          >
            <WideImage.Signup />
          </WideImage>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Praesentium architecto a distinctio aut reprehenderit
            ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent
            quis ligula quis nulla malesuada tempor.
          </p>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
