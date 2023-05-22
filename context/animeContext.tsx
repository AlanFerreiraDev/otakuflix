import { createContext, useState, ReactNode, useEffect } from 'react'
import { api } from '@/services/api'

interface AnimeProps {
  id: string
  attributes: {
    canonicalTitle: string
    synopsis: string
    posterImage: {
      original: string
      large: string
      medium: string
      small: string
    }
    youtubeVideoId: string
    popularityRank: number
    showType: string
    endDate: string
    startDate: string
    status: string
    createdAt: string
    description: string
    slug: string
    ageRatingGuide: string
    averageRating: string
    episodeCount: number
    episodeLength: number
    titles: {
      en: string
    }
  }
}

type AnimeContextProps = {
  animes: AnimeProps[]
}

const AnimeContext = createContext<AnimeContextProps>({} as AnimeContextProps)

const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [animeData, setAnimeData] = useState<AnimeProps[]>([])

  useEffect(() => {
    api
      .get('/anime')
      .then((response) => response.data)
      .then((animeGroup) => animeGroup.data)
      .then((data) => {
        setAnimeData(data)
      })
  }, [])

  return (
    <AnimeContext.Provider
      value={{
        animes: animeData,
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}

export { AnimeContext, AnimeProvider }
