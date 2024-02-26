import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterStandard } from '../../components/Footer/FooterStandard/FooterStandard'
import { Column } from '../../layouts/Column/Column'
import { Nav } from '../../components/Nav/Nav'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { PeopleData } from '../../data/PeopleData'
import { TextImage } from '../../components/TextImage/TextImage'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const PeopleCards: Story = {
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
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="People Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="white">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="white">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isGrey isCenter>
                  <Card.Figure isRound>
                    <img src={image} alt={alt} width={280} height={280} />
                  </Card.Figure>
                  <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                  <Card.Body>
                    <Card.PeopleMeta jobTitle={jobTitle} phone={phone}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Card.PeopleMeta>
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
  ),
}
