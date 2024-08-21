import { Column } from '../layouts/Column/Column'
import { StackedList } from '../layouts/StackedList/StackedList'

import { Alert } from '../components/Alert/Alert'
import { BadgeGroup } from '../components/BadgeGroup/BadgeGroup'
import { Badge } from '../components/Badge/Badge'
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup'
import { Button } from '../components/Button/Button'
import { Calendar } from '../components/Calendar/Calendar'
import { CallOut } from '../components/CallOut/CallOut'
import { Card } from '../components/Card/Card'
import { Description } from '../components/Description/Description'
import { Embed } from '../components/Embed/Embed'
import { Forbidden403 } from '../components/Forbidden403/Forbidden403'
import { Figure } from '../components/Figure/Figure'
import { Filter } from '../components/Filter/Filter'
import { FullBanner } from '../components/FullBanner/FullBanner'
import { ImageGrid } from '../components/ImageGrid/ImageGrid'
import { Listing } from '../components/Listing/Listing'
import { Login } from '../components/Login/Login'
import { MultiDayCalendar } from '../components/MultiDayCalendar/MultiDayCalendar'
import { NotFound404 } from '../components/NotFound404/NotFound404'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { Pagination } from '../components/Pagination/Pagination'
import { Placeholder } from '../components/Placeholder/Placeholder'
import { SearchInput } from '../components/SearchInput/SearchInput'
import { Quote } from '../components/Quote/Quote'
import { Table } from '../components/Table/Table'
import { Testimonial } from '../components/Testimonial/Testimonial'
import { TextImage } from '../components/TextImage/TextImage'
import { TextMedia } from '../components/TextMedia/TextMedia'
import { WideImage } from '../components/WideImage/WideImage'

import { NewsData } from '../data/NewsData'

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies,{' '}
        <a href="https://carleton.ca">sed tempus diam dignissim</a>. Suspendisse condimentum magna vel orci vulputate,
        eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in
        vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget
        suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
      <p>
        Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna. Nobis
        voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit
        ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis
        ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget
        suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const BlockTesting = () => {
  return (
    <>
      <TextMedia>
        <TextMedia.Content headerType="h1" title="Block Testing" width={100}>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
        </TextMedia.Content>
      </TextMedia>

      <TextImage>
        <TextImage.Content headerType="h1" title="Text & Image: Old School Version">
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
        </TextImage.Content>
      </TextImage>

      <SinglePara />

      <Alert content="Records have been updated." size="sm" title="Alert title" type="success" />

      <SinglePara />
      <SinglePara />

      <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
        <Badge color="grey" text="Grey Badge" />
        <Badge color="green" text="Green Badge" />
        <Badge color="red" text="Red Badge" />
        <Badge color="yellow" text="Yellow Badge" />
        <Badge color="blue" text="Blue Badge" />
        <Badge color="purple" text="Purple Badge" />
      </BadgeGroup>

      <SinglePara />
      <SinglePara />

      <ButtonGroup align="start" gap="2">
        <Button onClick={() => {}} title="Primary Red" />
        <Button color="dark-grey" onClick={() => {}} title="Dark Grey" />
        <Button color="grey" onClick={() => {}} title="Light Grey" />
      </ButtonGroup>

      <SinglePara />
      <SinglePara />

      <Calendar
        callback={() => {}}
        events={[
          {
            endDatetime: '2022-10-21T14:30',
            id: 1,
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Leslie Alexander',
            startDatetime: '2022-10-21T13:00',
          },
          {
            endDatetime: '2022-10-21T11:30',
            id: 2,
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Foster',
            startDatetime: '2022-10-21T09:00',
          },
          {
            endDatetime: '2022-10-24T18:30',
            id: 3,
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Dries Vincent',
            startDatetime: '2022-10-24T17:00',
          },
          {
            endDatetime: '2022-10-26T14:30',
            id: 4,
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Leslie Alexander',
            startDatetime: '2022-10-26T13:00',
          },
          {
            endDatetime: '2022-10-30T14:30',
            id: 5,
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Foster',
            startDatetime: '2022-10-30T14:00',
          },
        ]}
      />

      <SinglePara />
      <SinglePara />

      <MultiDayCalendar
        callback={() => {}}
        events={[
          {
            endDatetime: '2022-10-21T14:30',
            id: 1,
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Leslie Alexander',
            startDatetime: '2022-10-21T13:00',
          },
          {
            endDatetime: '2022-10-21T11:30',
            id: 2,
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Foster',
            startDatetime: '2022-10-21T09:00',
          },
          {
            endDatetime: '2022-10-24T18:30',
            id: 3,
            imageUrl:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Dries Vincent',
            startDatetime: '2022-10-24T17:00',
          },
          {
            endDatetime: '2022-10-26T14:30',
            id: 4,
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Leslie Alexander',
            startDatetime: '2022-10-26T13:00',
          },
          {
            endDatetime: '2022-10-30T14:30',
            id: 5,
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Foster',
            startDatetime: '2022-10-30T14:00',
          },
        ]}
      />

      <SinglePara />
      <SinglePara />

      <CallOut justify="center" maxWidth="4xl" title="Open House">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis
          feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
        </p>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </CallOut>

      <SinglePara />
      <SinglePara />

      <Column cols="3">
        {NewsData.slice(0, 3).map(({ id, link, title, image, alt, date }) => (
          <Card key={id}>
            <Card.Figure>
              <img src={image} alt={alt} width="400" height="300" />
            </Card.Figure>
            <Card.Header title={title} date={date} />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
            </Card.Body>
            <Card.Footer>
              <a href={link} className="cu-button cu-button--red cu-button--small">
                Read more
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>

      <SinglePara />
      <SinglePara />

      <Description>
        <Description.Meta term="Nobis voluptatem dolorum">
          Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem
          non.
        </Description.Meta>
        <Description.Meta term="Lorem ipsum">
          Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit
          ultricies, sed tempus diam dignissim.
        </Description.Meta>
        <Description.Meta term="Molestiae quas dolores accusamus">
          Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci
          vulputate, eget vulputate neque porttitor.
        </Description.Meta>
      </Description>

      <SinglePara />
      <SinglePara />

      <Embed>
        <Embed.Vimeo title="test" url="https://vimeo.com/106595658" />
      </Embed>

      <SinglePara />
      <SinglePara />

      <Forbidden403 />

      <SinglePara />
      <SinglePara />

      <NotFound404 />

      <SinglePara />
      <SinglePara />

      <Figure align="none" caption="" size="full">
        <img alt="Sample for figure stories file" height="266" src="https://picsum.photos/id/15/1600/900" width="400" />
      </Figure>

      <SinglePara />
      <SinglePara />

      <Filter
        callback={() => {}}
        filters={[
          {
            id: 'audience',
            name: 'Audience',
            options: [
              {
                checked: false,
                label: 'Staff',
                value: 'staff',
              },
              {
                checked: false,
                label: 'Student',
                value: 'student',
              },
            ],
          },
          {
            id: 'tags',
            name: 'Tags',
            options: [
              {
                checked: false,
                label: 'General',
                value: 'general',
              },
              {
                checked: false,
                label: 'Online/Virtual',
                value: 'online/virtual',
              },
              {
                checked: false,
                label: 'Finances',
                value: 'finances',
              },
              {
                checked: false,
                label: 'Healthy Workplace',
                value: 'healthyworkplace',
              },
            ],
          },
        ]}
      />

      <SinglePara />
      <SinglePara />

      <FullBanner
        as="section"
        focalPointX="50"
        focalPointY="50"
        image="https://picsum.photos/id/20/1600/700"
        justify="start"
        opacity={70}
        title="The nostalgia is real. The launch of the iPod revolutionized how the world consumes music on the move!"
      >
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </FullBanner>

      <SinglePara />
      <SinglePara />

      <ImageGrid cols="4" gridGap="2" maxWidth="5xl">
        <ImageGrid.Image
          colSpan="2"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
          link="https://github.com/cuweb/rds"
          rowSpan="2"
          title="Overlay Image Title"
        >
          <img alt="test" src="https://picsum.photos/id/337/600/400" />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <img alt="Image requirement" src="https://picsum.photos/id/531/600/400" />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <img alt="Image requirement" src="https://picsum.photos/id/626/600/400" />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <img alt="Image requirement" src="https://picsum.photos/id/381/600/400" />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <img alt="Image requirement" src="https://picsum.photos/id/691/600/400" />
        </ImageGrid.Image>
      </ImageGrid>

      <SinglePara />
      <SinglePara />

      <StackedList cols="2">
        {NewsData.slice(1, 5).map(({ id, link, title, image, alt, date }) => (
          <Listing key={id}>
            <Listing.Figure>
              <img src={image} alt={alt} width="400" height="300" />
            </Listing.Figure>
            <Listing.Body>
              <Listing.Header title={title} date={date} />
              <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
              <Listing.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Listing.Footer>
            </Listing.Body>
          </Listing>
        ))}
      </StackedList>

      <SinglePara />
      <SinglePara />

      <Login
        onClickHandler={{
          default: () => {},
          google: () => {},
          linkedIn: () => {},
          twitter: () => {},
        }}
        useSocial
      />

      <SinglePara />
      <SinglePara />

      <PageHeader
        as="h2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
        header="Page Header"
        size="lg"
      />

      <SinglePara />
      <SinglePara />

      <PageHeader
        as="h2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
        header="Page Header"
        size="md"
      />

      <SinglePara />
      <SinglePara />

      <PageHeader header="Upcoming Single Day Event">
        <Figure align="right" noMobile size="sm">
          <img alt="Images need alt text" height="133" src="https://picsum.photos/id/84/600/400" width="200" />
        </Figure>
        <PageHeader.Event
          contactEmail="johndoe@test.com"
          contactName="John Doe"
          contactPhone="613-520-2600 x1234"
          cost="$20 per adult, $15 for youth/senior"
          endDate="2023-03-31 13:30:00"
          eventType="Hybrid"
          location="Raven's Nest, 1125 Colonel By Drive"
          startDate="2023-03-31 10:00:00"
          virtualType="Teams"
          virtualUrl="https://events.carleton.ca"
        >
          <ButtonGroup>
            <a className="cu-button cu-button--red" href="https://carleton.ca">
              Register Now
            </a>
            <a className="cu-button cu-button--grey" href="https://carleton.ca/webservices">
              Add to My Events
            </a>
          </ButtonGroup>
        </PageHeader.Event>
      </PageHeader>

      <SinglePara />
      <SinglePara />

      <PageHeader header="People Profile" pronoun="He/Him">
        <Figure align="right" size="sm">
          <img
            alt="Required alt text"
            height="133"
            src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
            width="200"
          />
        </Figure>
        <PageHeader.People
          building="Onraed"
          degrees="Certificate, Padawan Academy of Jedi Arts"
          email="greely@thejediyouseek.com"
          facebook="#"
          jobTitle="Jedi Master & Jedi Council Member"
          linkedin="#"
          phone="613-520-2600"
          phoneExt="1234"
          resume="#"
          room="Sector A29"
          twitter="#"
          website="#"
        />
      </PageHeader>

      <SinglePara />
      <SinglePara />

      <Pagination callback={() => {}} callbackPage={() => {}} pageSize={5} siblingCount={1} totalCount={48} />

      <SinglePara />
      <SinglePara />

      <Placeholder maxWidth="5xl" name="Placeholder name" />

      <SinglePara />
      <SinglePara />

      <SearchInput callback={() => {}} placeholder="Enter a search string" />

      <SinglePara />
      <SinglePara />

      <Table
        columns={[
          {
            default: true,
            header: 'ID',
            key: 'id',
            order: 'descending',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Title',
            key: 'title',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Description',
            key: 'description',
            sort: {
              sortable: false,
            },
          },
          {
            header: 'Edit',
            key: 'link',
            sort: {
              sortable: false,
            },
          },
        ]}
        data={[
          {
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.',
            id: 1,
            link: (
              <a className="font-semibold text-cu-red" href="http://thing/1">
                Edit
              </a>
            ),
            title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
          },
          {
            description: 'Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.',
            id: 2,
            link: (
              <a className="font-semibold text-cu-red" href="http://thing/2">
                Edit
              </a>
            ),
            title:
              'Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps',
          },
          {
            description:
              'Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.',
            id: 3,
            link: (
              <a className="font-semibold text-cu-red" href="http://thing/3">
                Edit
              </a>
            ),
            title: 'Captivating Captions: Why We Use Captions on Videos',
          },
          {
            description:
              'Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.',
            id: 4,
            link: (
              <a className="font-semibold text-cu-red" href="http://thing/4">
                Edit
              </a>
            ),
            title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
          },
          {
            description: 'Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.',
            id: 5,
            link: (
              <a className="font-semibold text-cu-red" href="http://thing/5">
                Edit
              </a>
            ),
            title: 'How to Write for the Web',
          },
        ]}
        range={[1, -1]}
      />

      <SinglePara />
      <SinglePara />

      <Testimonial
        focalPointX="50"
        focalPointY="50"
        imageUrl="https://picsum.photos/id/342/600/400"
        imageZoom={0}
        name="Jane Doe"
        quoteType="quote"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis
          feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
        </p>
      </Testimonial>

      <SinglePara />
      <SinglePara />

      <TextMedia gridGap="10" maxWidth="5xl">
        <TextMedia.Content hasUnderline title="Website and Application Development" width={50}>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <ButtonGroup>
            <a
              className="cu-button cu-button--red"
              href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
            >
              Read more
            </a>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.BgImage imageUrl="https://picsum.photos/id/431/600/460" />
      </TextMedia>

      <SinglePara />
      <SinglePara />

      <TextMedia gridGap="10" maxWidth="5xl">
        <TextMedia.Content hasUnderline title="Website and Application Development" width={50}>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <ButtonGroup>
            <a
              className="cu-button cu-button--red"
              href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
            >
              Read more
            </a>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.Aside align="center" border="lg" borderColor="white">
          <img src="https://picsum.photos/id/431/600/460" alt="Presentation only" width="600" height="460" />
        </TextMedia.Aside>
      </TextMedia>

      <SinglePara />
      <SinglePara />

      <WideImage
        as="div"
        focalPointX="50"
        focalPointY="50"
        headerType="h1"
        image="https://picsum.photos/id/381/600/400"
        isType="light"
        maxWidth="7xl"
        opacity={60}
        title="Wide Image"
      >
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="dark-grey" title="Request Information" />
        </ButtonGroup>
      </WideImage>

      <SinglePara />
      <SinglePara />

      <WideImage
        as="div"
        focalPointX="50"
        focalPointY="50"
        headerType="h1"
        image="https://picsum.photos/id/381/600/400"
        isType="dark"
        maxWidth="7xl"
        opacity={60}
        title="Wide Image"
      >
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="dark-grey" title="Request Information" />
        </ButtonGroup>
      </WideImage>

      <SinglePara />
      <SinglePara />

      <WideImage
        as="div"
        focalPointX="50"
        focalPointY="50"
        headerType="h1"
        image="https://picsum.photos/id/381/600/400"
        isType="image"
        maxWidth="7xl"
        opacity={60}
        title="Wide Image"
      >
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="dark-grey" title="Request Information" />
        </ButtonGroup>
      </WideImage>

      <SinglePara />
      <SinglePara />

      <h2>Heading Two</h2>
      <SinglePara />
      <SinglePara />

      <h3>Heading Three</h3>
      <SinglePara />

      <h4>Heading Four</h4>
      <DoublePara />

      <Column maxWidth="5xl" cols="2" gridGap="10">
        <Column.Content>
          <SinglePara />
          <h2>Header Two</h2>
          <SinglePara />
          <h3>Header Three</h3>
          <SinglePara />
          <h4>Header Four</h4>
          <SinglePara />
        </Column.Content>
        <Column.Content>
          <SinglePara />
          <h2>Header Two</h2>
          <SinglePara />
          <h3>Header Three</h3>
          <SinglePara />
          <h4>Header Four</h4>
          <SinglePara />
        </Column.Content>
      </Column>

      <DoublePara />

      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
          vitae, sagittis justo.
        </li>
        <li>
          Suspendisse <a href="https://cuweb.github.io/rds/">velit eget suscipit tincidunt</a> vel orci vulputate, eget
          vulputate neque porttitor.
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

      <DoublePara />

      <ol>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
          vitae, sagittis justo.
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

      <DoublePara />

      <Quote cite="John Doe">
        <p>
          Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
      </Quote>

      <DoublePara />

      <Quote cite="John Doe" graphic="quote">
        <p>
          Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
      </Quote>

      <DoublePara />

      <Quote cite="John Doe" isCenter>
        <p>
          Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
      </Quote>

      <DoublePara />

      <Quote cite="John Doe" graphic="quote" isCenter>
        <p>
          Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
      </Quote>

      <DoublePara />
    </>
  )
}
