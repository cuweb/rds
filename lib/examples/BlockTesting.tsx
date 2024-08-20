import { Column } from '../layouts/Column/Column'

import { Alert } from '../components/Alert/Alert'
import { BadgeGroup } from '../components/BadgeGroup/BadgeGroup'
import { Badge } from '../components/Badge/Badge'
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup'
import { Button } from '../components/Button/Button'
import { Calendar } from '../components/Calendar/Calendar'
import { Quote } from '../components/Quote/Quote'
import { TextImage } from '../components/TextImage/TextImage'

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
      <TextImage>
        <TextImage.Content headerType="h1" title="Block Testing (Prose Dark)">
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

      <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
        <Badge color="grey" text="Grey Badge" />
        <Badge color="green" text="Green Badge" />
        <Badge color="red" text="Red Badge" />
        <Badge color="yellow" text="Yellow Badge" />
        <Badge color="blue" text="Blue Badge" />
        <Badge color="purple" text="Purple Badge" />
      </BadgeGroup>

      <SinglePara />

      <ButtonGroup align="start" gap="2">
        <Button onClick={() => {}} title="Primary Red" />
        <Button color="dark-grey" onClick={() => {}} title="Dark Grey" />
        <Button color="grey" onClick={() => {}} title="Light Grey" />
      </ButtonGroup>

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
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
      <SinglePara />
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
