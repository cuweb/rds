import { Section } from '../../layouts/Section/Section'
import { PageHeaders } from '../PageHeaders/PageHeaders'

export interface NotFound404Props {
  children?: React.ReactNode
  content?: string
}

export const NotFound404 = ({ children, content = 'Could not find requested resource' }: NotFound404Props) => {
  return (
    <>
      <Section maxWidth="7xl">
        <PageHeaders as="h1" header="404 - Page Not Found" content={content} size="md" isCenter />
        {children}
      </Section>
    </>
  )
}
