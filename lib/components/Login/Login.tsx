import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export interface LoginProps {
  isCenter?: boolean
  useSocial?: boolean
}

export const Login = ({ isCenter = false, useSocial = false }: LoginProps) => {
  const centerBox = isCenter ? 'mx-auto' : ''
  return (
    <div className={`border border-cu-black-100 max-w-md shadow-md rounded-md ${centerBox}`}>
      <img
        className="w-auto h-12 mx-auto -mt-4 bg-white border-l-[12px] border-r-[12px] border-white"
        src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
        alt="Logo of Carleton University"
      />
      <div className="p-6">
        <ButtonGroup>
          <Button title="Login with your Carleton account" onClick={() => {}} isFull />
        </ButtonGroup>
      </div>
      {useSocial && (
        <div className="bg-cu-black-50 p-6 rounded-b-md">
          <p className="mb-6 text-center font-semibold">Or login with one of the following:</p>
          <ButtonGroup>
            <Button title="Social Network A" color="white" onClick={() => {}} isFull />
            <Button title="Social Network B" color="white" onClick={() => {}} isFull />
            <Button title="Social Network C" color="white" onClick={() => {}} isFull />
          </ButtonGroup>
        </div>
      )}
    </div>
  )
}
