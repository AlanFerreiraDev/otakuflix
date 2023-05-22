import { AuthProvider } from '@/context/authContext'
import { AnimeProvider } from '@/context/animeContext'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AnimeProvider>
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </AnimeProvider>
    </AuthProvider>
  )
}
