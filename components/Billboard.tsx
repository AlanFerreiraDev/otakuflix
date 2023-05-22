import { AnimeContext } from '@/context/animeContext'
import { dateFormatted } from '@/utils.ts/formatDate'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const Billboard = () => {
  const { animes } = useContext(AnimeContext)
  const { push } = useRouter()

  return (
    <div className="w-full">
      {animes?.map((anime) => {
        const isTitleExists = anime?.attributes?.titles?.en?.length > 0

        return (
          <div
            className="max-w-[500px] min-w-[270px] flex flex-col mx-auto relative"
            key={anime.id}
          >
            {isTitleExists && (
              <div className="mb-12">
                <h1 className="text-3xl text-white mb-3">
                  {anime?.attributes?.titles?.en?.toUpperCase()}
                </h1>
                <p className="text-xl text-white">
                  {`From ${dateFormatted(
                    anime?.attributes?.startDate
                  )} to ${dateFormatted(anime?.attributes?.endDate)}`}
                </p>
                <button
                  onClick={() => push(`/dashboard/${anime?.id}`)}
                  className="absolute z-10 bg-zinc-800 text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex-row items-center      hover:bg-opacity-20 transition"
                >
                  More Info
                </button>
                <img
                  src={anime?.attributes?.posterImage?.original}
                  alt={anime?.attributes?.description}
                  className="rounded-3xl w-full relative"
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Billboard
