import { Toast } from './Toast'

describe('<Toast />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Toast.Toaster>
        <Toast key={111} type="success">
          <Toast.Title>Success</Toast.Title>
          <Toast.Content>Information</Toast.Content>
        </Toast>
      </Toast.Toaster>,
    )
    cy.get('p').contains('Success')
  })
})
