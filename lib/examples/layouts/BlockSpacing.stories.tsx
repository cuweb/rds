import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { TextImage } from '../../components/TextImage/TextImage'
import { WideImage } from '../../components/WideImage/WideImage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { NavDataSingle, NavAsideData } from '../../data/NavData'
import { NewsData } from '../../data/NewsData'

const meta: Meta = {
  title: 'Prototypes/Layouts',
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

export const BlockSpacing: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <TextImage>
            <TextImage.Content headerType="h1" title="Block Spacing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <h2>Header Two</h2>

        <SinglePara />
        <SinglePara />

        <Section as="div">
          <PageHeader header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section as="div">
          <PageHeader header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <WideImage title="Wide image block with buttons and background image">
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="white" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <Section as="div" isGrey>
          <PageHeader header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <Section as="div" isGrey>
          <PageHeader header="Featured Cards" as="h2" size="md" />
          <Column cols="3">
            {NewsData.slice(0, 3).map(({ id, link, title, image, alt }) => (
              <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Column>
        </Section>

        <WideImage image="https://picsum.photos/1600/700" title="Wide image block with buttons and background image">
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="white" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>

        <WideImage image="https://picsum.photos/1600/700" title="Wide image block with buttons and background image">
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="white" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <Column cols="2">
          <Column.Content>
            <SinglePara />
          </Column.Content>
          <Column.Content>
            <SinglePara />
          </Column.Content>
        </Column>

        <WideImage image="https://picsum.photos/1600/700" title="Wide image block with buttons and background image">
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="white" title="Request Information" />
          </ButtonGroup>
        </WideImage>

        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
