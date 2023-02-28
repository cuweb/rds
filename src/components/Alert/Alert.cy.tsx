import { Alert } from './Alert'

describe('<Alert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Alert.Alerter>
        <Alert key="222" type="success">
          <Alert.Title>Success</Alert.Title>
          <Alert.Content>Successfully created</Alert.Content>
        </Alert>
      </Alert.Alerter>,
    )
    cy.get('h3').contains('Success')
  })
})
