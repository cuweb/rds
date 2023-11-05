import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'

const meta: Meta = {
  title: 'Examples/Templates',
}

export default meta
type Story = StoryObj

export const ProseExamples: Story = {
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
          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Basic Markup" headerType="h1" />
          </HeroTextImage>

          <h2>Heading Two</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a>,
            sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <h3>Heading Three</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
            sapien in urna.
          </p>

          <h4>Heading Four</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
            sapien in urna.
          </p>

          <h2>Basic Content Styles</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere
              tellus vitae, sagittis justo.
            </li>
            <li>
              Suspendisse <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> vel orci vulputate,
              eget vulputate neque porttitor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ul>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>
                  Aenean sit amet tortor <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> vitae,
                  sagittis justo.
                  <ul>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                  </ul>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
              </ul>
            </li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>

          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere
              tellus vitae, sagittis justo.
            </li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ol>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>
                  Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.
                  <ol>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                    <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
                    <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                  </ol>
                </li>
                <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
                <li>Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo.</li>
              </ol>
            </li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
            <li>Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.</li>
            <li>Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim.</li>
          </ol>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>

          <blockquote>
            <p>
              Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
              reprehenderit ducimus.
            </p>
            <cite>John Doe</cite>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>

          <blockquote>
            <p>
              Obis voluptatem dolorum et <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
            </p>
            <cite>John Doe</cite>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor.
          </p>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
