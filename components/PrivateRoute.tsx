import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/router'
import { ReactNode, useContext, useEffect } from 'react'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { signed } = useContext(AuthContext)

  useEffect(() => {
    const signedLocal = localStorage.getItem('@user')
    if (!signed && !signedLocal) {
      router.replace('/')
    }
  }, [signed, router])

  return <>{signed && children}</>
}
