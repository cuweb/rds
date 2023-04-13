import { Accordian } from './Accordion'
import data from './AccordianData.json'

describe('<Accordian />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Accordian data={data} />)
    cy.get('span').contains('Item 1')
  })
})
