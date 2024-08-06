import { Section } from '../../layouts/Section/Section'
import { PageHeaders } from '../PageHeaders/PageHeaders'

export interface Forbidden403Props {
  children?: React.ReactNode
  content?: string
}

export const Forbidden403 = ({
  children,
  content = 'You do not have permission to access this',
}: Forbidden403Props) => {
  return (
    <>
      <Section maxWidth="7xl">
        <PageHeaders as="h1" header="403 - Forbidden" content={content} size="md" isCenter />
        {children}
      </Section>
    </>
  )
}
