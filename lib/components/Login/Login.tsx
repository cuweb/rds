import { Alert } from '../Alert/Alert'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface LoginProps {
  maxWidth?: maxWidthKeys
  useSocial?: boolean
  errorTitle?: string
  errorDesc?: string
  onClickHandler?: { default: () => void; google: () => void; linkedIn: () => void; twitter: () => void }
}

export const Login = ({
  maxWidth = '2xl',
  useSocial = false,
  errorTitle = '',
  errorDesc = '',
  onClickHandler,
}: LoginProps) => {
  return (
    <div
      className={`cu-login not-prose p-6 pt-0 border border-cu-black-100 cu-component not-contained ${maxWidthClasses[maxWidth]} shadow-md rounded-md bg-white`}
    >
      <img
        className="w-auto h-20 mx-auto -mt-8 bg-white border-x-[16px] border-y-[12px] border-white rounded-md"
        src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
        alt="Logo of Carleton University"
      />
      {(errorTitle || errorDesc) && (
        <div className="pt-6">
          <Alert key="login-error" title={errorTitle} content={errorDesc} type="error" />
        </div>
      )}
      <ButtonGroup>
        <Button title="Login with your Carleton account" onClick={onClickHandler?.default} isFull />
      </ButtonGroup>

      {useSocial && (
        <div className="p-6 bg-cu-black-50 rounded-md">
          <p className="font-semibold text-center">Or login with one of the following:</p>
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
