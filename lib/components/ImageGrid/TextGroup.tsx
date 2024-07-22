import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
export const TextGroup = () => {
  return (
    <div>
      <p className="text-4xl font-bold inline border-b-2 border-red-500">A View of the Nations Capital</p>
      <p className="py-6 text-balance text-zinc-600">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don't look even slightly believable.{' '}
      </p>
      <ButtonGroup>
        <Button
          onClick={() => {
            alert('You clicked the button')
          }}
          title="Learn More"
        />
        <Button
          onClick={() => {
            alert('You clicked the button')
          }}
          title="Learn More"
          color="grey"
        />
      </ButtonGroup>
    </div>
  )
}
