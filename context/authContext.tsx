import { createContext, useState, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { doc, getDoc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { auth, db } from '@/services/firebase'

type UserProps = {
  uid: string
  name?: string
  email: string
  password?: string
  avatarUrl?: string
}

type AuthContextProps = {
  user: UserProps | null
  signIn: (email: string, password: string) => void
  signUp: (name: string, email: string, password: string) => void
  loadingAuth: boolean
  signed: boolean
  loadSigned: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [user, setUser] = useState<UserProps | null>(null)
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false)
  const [loadSigned, setLoadSigned] = useState<boolean>(true)

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem('@user')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoadSigned(false)
      }

      setLoadSigned(false)
    }
    loadUser()
  }, [])

  async function signIn(email: string, password: string) {
    setLoadingAuth(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        let uid = userCredentials.user.uid

        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        let data = {
          uid: uid,
          name: docSnap.data()?.name,
          email: userCredentials.user.email,
          avatarUrl: docSnap.data()?.avatarUrl,
        }

        setUser(data as UserProps)
        storageUser(data as UserProps)
        setLoadingAuth(false)
        toast.success(`Hello ${data.name} welcome back!`)
        router.push('/dashboard')
      })
      .catch((error) => {
        toast.error('An error occurred while logging in')
        console.error('Error writing document: ', error)
        setLoadingAuth(false)
      })
  }

  async function signUp(name: string, email: string, password: string) {
    setLoadingAuth(true)

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        let uid = userCredential.user.uid

        await setDoc(doc(db, 'users', uid), {
          name: name,
          avatarUrl: null,
        }).then(() => {
          let data = {
            uid: uid,
            name: name,
            email: userCredential.user.email,
            avatarUrl: null as string | null,
          }

          type OmitPassword = Omit<UserProps, 'password'>

          setUser(data as OmitPassword)
          storageUser(data as OmitPassword)
          toast.success('User successfully registered!')
          console.log('Document written with success!')
          setLoadingAuth(false)
        })
      })
      .catch((error) => {
        toast.error('An error occurred in the registration process')
        console.error('Error writing document: ', error)
        setLoadingAuth(false)
      })
  }

  function storageUser(data: UserProps) {
    localStorage.setItem('@user', JSON.stringify(data))
  }

  async function logout() {
    await auth.signOut()

    localStorage.removeItem('@user')
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
        loadSigned,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
