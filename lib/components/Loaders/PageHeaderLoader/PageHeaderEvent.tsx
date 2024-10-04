import { BlockLoader, ButtonLoader, Column, FormLoader } from '../../../main'

export const PageHeaderEvent = () => {
  return (
    <Column maxWidth="7xl" cols="2" gridGap="10">
      <FormLoader>
        <FormLoader.RowLoader cols={1} fields={1} />
        <FormLoader.RowLoader cols={2} fields={1} />
        <FormLoader.RowLoader cols={3} fields={1} />
        <ButtonLoader number={2} isSmall={false} />
      </FormLoader>

      <BlockLoader height={300} cols={'1/3'} />
    </Column>
  )
}
