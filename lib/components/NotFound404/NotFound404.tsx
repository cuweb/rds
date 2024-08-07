import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { PageHeader } from '../PageHeader/PageHeader'

export interface NotFound404Props {
  isCenter?: boolean
}

export const NotFound404 = ({ isCenter = true }: NotFound404Props) => {
  const LinkComponent = useLinkContext()

  return (
    <>
      <PageHeader
        as="h1"
        header="404 - Page Not Found"
        content="Apologies, but the page you requested could not be found."
        size="lg"
        isCenter={isCenter ? true : false}
      />
      <p className={isCenter ? 'text-center' : 'text-left'}>
        Please use the site navigation located at the top of this page or search the site using the search field icon in
        the far right side of the navigation.
      </p>
      <ButtonGroup align={isCenter ? 'center' : 'start'}>
        <LinkComponent href="/" className="cu-button cu-button--red">
          Site Homepage
        </LinkComponent>
        <LinkComponent href="https://carleton.ca" className="cu-button cu-button--grey">
          Carleton Homepage
        </LinkComponent>
      </ButtonGroup>
    </>
  )
}
