import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from 'react'

import { AuthContext } from '@/context/authContext'
import Image from 'next/image'
import Input from '@/components/Input'
import Head from 'next/head'

const Auth = () => {
  const { signIn, signUp } = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [variant, setVariant] = useState<'login' | 'register'>('login')

  const haveAccount = variant === 'register'
  const dontHaveAccount = variant === 'login'

  const registerOrLogin = haveAccount ? 'Create an account' : 'Login'
  const isFirstTime = dontHaveAccount
    ? 'First time using Otakuflix ?'
    : 'Already have account ?'

  const isFirstTimeLink = dontHaveAccount ? 'Create an account 😎' : 'Login 💖'

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    )
  }, [])

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email && password) {
      await signIn(email, password)
    }
  }

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email && password) {
      await signUp(name, email, password)

      setVariant('login')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    haveAccount ? handleSignUp(event) : handleSignIn(event)
  }

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Head>
        <title>OtakuFlix | Home</title>
        <meta
          name="description"
          content="Otakuflix is ​​an anime catalog project, with it you can see a lot of information about your favorite anime and its trailer."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
            priority={true}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-[36rem] rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {registerOrLogin}
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {haveAccount && (
                <Input
                  id="name"
                  type="text"
                  label="User"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setName(e.target.value)
                  }
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setPassword(e.target.value)
                }
              />

              <button
                onClick={() => registerOrLogin}
                type="submit"
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              >
                {registerOrLogin}
              </button>
              <p className="text-neutral-500 mt-12">
                {isFirstTime}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {isFirstTimeLink}
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
