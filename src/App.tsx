import { useForm } from 'react-hook-form'

const elemText = {
  eng: {
    signUp: 'Sign up',
    email: 'Email',
    name: 'Name',
    password: 'Password',
    passwordConf: 'Confirm Password',
    havAccount: 'Already have an account?',
    requiredMsg: 'This is required',
  },
  ir: {
    signUp: 'ثبت نام',
    email: 'پست الکترونیک',
    name: 'نام',
    password: 'کلمه عبور',
    passwordConf: 'تایید کلمه عبور',
    haveAccount: 'قبلا ثبت نام کردم؟',
    requiredMsg: 'این فیلد لازم است',
  },
}

function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <div
      dir="rtl"
      className="bg-background-800 max-w-lg border-2 mx-auto w-3/4"
    >
      <div className="flex flex-col items-center text-center mt-16 p-2">
        <h1 className="text-xl font-bold text-main-50">
          {elemText['ir'].signUp}{' '}
        </h1>
        <form
          className="w-full flex flex-col space-y-2 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder={elemText['ir'].name}
            {...register('firstName', {
              required: elemText['ir'].requiredMsg,
            })}
          />
          <input placeholder={elemText['ir'].email} />
          <input type='password' placeholder={elemText['ir'].password} />
          <input type='password' placeholder={elemText['ir'].passwordConf} />
          <button
            className="bg-primary-500 rounded-3xl p-2 text-main-50 font-bold"
            type="submit"
          >
            {elemText['ir'].signUp}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
