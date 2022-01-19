import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FC } from 'react'

const elemText = {
  eng: {
    signUp: 'Sign up',
    email: 'Email',
    name: 'Name',
    password: 'Password',
    passwordConf: 'Confirm Password',
    havAccount: 'Already have an account?',
    requiredMsg: 'This is required',
    emailMsg: 'Invalid email address',
    passwordMaxMessage: 'Must be 20 characters or less',
    passwordConfMsg: 'Password must match',
  },
  ir: {
    signUp: 'ثبت نام',
    email: 'پست الکترونیک',
    name: 'نام',
    password: 'کلمه عبور',
    passwordConf: 'تایید کلمه عبور',
    haveAccount: 'قبلا ثبت نام کردم؟',
    requiredMsg: 'این فیلد لازم است',
    emailMsg: 'آدرس ایمیل صحیح نیست',
    passwordMaxMessage: 'کلمه عبور باید ۲۰ کاراکتر و یا کمتر باشد',
    passwordConfMsg: 'کلمه عبور متفاوت است',
  },
}

const lang = 'ir'
const validationSchema = yup.object({
  name: yup.string().required(elemText[lang].requiredMsg),
  email: yup
    .string()
    .email(elemText[lang].emailMsg)
    .required(elemText[lang].requiredMsg),
  password: yup
    .string()
    .max(20, elemText[lang].passwordMaxMessage)
    .required(elemText[lang].requiredMsg),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], elemText[lang].passwordConfMsg),
})

const ErrorMessage: FC = ({ children }) => {
  return (
    <div className="h-6">
      <p className="text-sm text-rose-400">{children}</p>
    </div>
  )
}
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="bg-background-800 h-screen">
      <div dir="rtl" className="bg-background-900 max-w-lg mx-auto w-3/4">
        <div className="flex flex-col items-center text-center p-8">
          <h1 className="text-xl font-bold text-main-50">
            {elemText[lang].signUp}{' '}
          </h1>
          <form
            className="w-full flex flex-col space-y-1 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register('name')}
              placeholder={elemText[lang].name}
              className={errors.name && 'border-red-600'}
            />
            <ErrorMessage>{errors.name?.message} </ErrorMessage>
            <input
              {...register('email')}
              placeholder={elemText[lang].email}
              dir="ltr"
              className={errors.email && 'border-red-600'}
            />
            <ErrorMessage>{errors.email?.message} </ErrorMessage>
            <input
              {...register('password')}
              type="password"
              placeholder={elemText[lang].password}
              dir="ltr"
              className={errors.email && 'border-red-600'}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder={elemText[lang].passwordConf}
              dir="ltr"
              className={errors.email && 'border-red-600'}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
            <button
              className="bg-primary-500 rounded-3xl p-2 text-main-50 font-bold"
              type="submit"
            >
              {elemText[lang].signUp}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
