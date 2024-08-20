import { Alert } from '../Alert/Alert'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export interface LoginProps {
  isCenter?: boolean
  useSocial?: boolean
  errorTitle?: string
  errorDesc?: string
  onClickHandler?: { default: () => void; google: () => void; linkedIn: () => void; twitter: () => void }
}

export const Login = ({
  isCenter = false,
  useSocial = false,
  errorTitle = '',
  errorDesc = '',
  onClickHandler,
}: LoginProps) => {
  const centerBox = isCenter ? 'mx-auto' : ''
  return (
    <div className={`not-contained p-6 pt-0 border border-cu-black-100 max-w-md shadow-md rounded-md ${centerBox}`}>
      <img
        className="w-auto h-12 mx-auto -mt-4 bg-white border-l-[12px] border-r-[12px] border-white"
        src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
        alt="Logo of Carleton University"
      />
      {(errorTitle || errorDesc) && (
        <div className="pt-6">
          <Alert key="login-error" title={errorTitle} content={errorDesc} type="error" />
        </div>
      )}
      <div className="pt-6">
        <ButtonGroup>
          <Button title="Login with your Carleton account" onClick={onClickHandler?.default} isFull />
        </ButtonGroup>
      </div>
      {useSocial && (
        <div className="p-6 bg-cu-black-50 rounded-b-md">
          <p className="mb-6 font-semibold text-center">Or login with one of the following:</p>
          <ButtonGroup>
            <Button title="Login with Google" color="white" onClick={onClickHandler?.google} isFull />
            <Button title="Login with LinkedIn" color="white" onClick={onClickHandler?.linkedIn} isFull />
            <Button title="Login with Twitter" color="white" onClick={onClickHandler?.twitter} isFull />
          </ButtonGroup>
        </div>
      )}
    </div>
  )
}
