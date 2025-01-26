import { ButtonGroup } from '../../ButtonGroup/ButtonGroup'
import { PageHeader } from '../../PageHeader/PageHeader'
import { useLinkContext } from '../../../components/LinkProvider/useLinkContext'

export interface Forbidden403Props {
  isCenter?: boolean
}

export const Forbidden403 = ({ isCenter = false }: Forbidden403Props) => {
  const LinkComponent = useLinkContext()

  return (
    <>
      <PageHeader
        as="h1"
        header="403 &ndash; Forbidden"
        content="Apologies, but you do not have permission to access this page"
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
