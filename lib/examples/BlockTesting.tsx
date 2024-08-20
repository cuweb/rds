import { Alert } from '../components/Alert/Alert'
import { Column } from '../layouts/Column/Column'
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

      <h2>Alert Block Examples</h2>
      <SinglePara />
      <Alert content="Records have been updated." size="sm" title="Alert title" type="success" />
      <SinglePara />
      <Alert content="Records have been updated." size="lg" title="Alert title" type="warning" />
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
