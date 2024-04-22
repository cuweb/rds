import { Alert } from './Alert'
import { mount } from 'cypress/react'

describe('<Alert />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Alert title={'Sucess alert'} type="success" />)
  })
})
