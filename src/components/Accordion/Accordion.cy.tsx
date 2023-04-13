import { Accordion } from './Accordion'
import data from './AccordionData.json'

describe('<Accordion />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Accordion data={data} />)
    cy.get('span').contains('Item 1')
  })
})
