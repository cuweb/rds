import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { TextImage } from '../../components/TextImage/TextImage'
import { WideImage } from '../../components/WideImage/WideImage'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { Heading } from '../../components/Heading/Heading'
import { IconData } from '../../data/IconData'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Layouts',
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
        <Section hasProse>
          <TextImage>
            <TextImage.Content headerType="h1" title="Block Spacing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <h2>Header Two</h2>

          <SinglePara />
          <SinglePara />

          <Container>
            <Heading text="Icon Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <WideImage title="Wide image block with buttons and background image">
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <Container isGrey>
            <Heading
              text="Icon Cards: Shadow on Static & Hover"
              intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."
            />
            <Column cols="3">
              {IconData.slice(0, 6).map(({ id, link, title, icon }) => (
                <Card key={id} hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <WideImage image="https://picsum.photos/1600/700" title="Wide image block with buttons and background image">
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="white" isType="outline" title="Request Information" />
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
              <Button color="white" isType="outline" title="Request Information" />
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
              <Button color="white" isType="outline" title="Request Information" />
            </ButtonGroup>
          </WideImage>

          <SinglePara />
          <SinglePara />
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
