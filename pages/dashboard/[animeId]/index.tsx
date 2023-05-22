'use client'

import AnimeInformation from '@/components/AnimeInformation'
import Navbar from '@/components/NavBar'
import PrivateRoute from '@/components/PrivateRoute'
import { AnimeContext } from '@/context/animeContext'
import { dateFormatted } from '@/utils.ts/formatDate'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const AnimeDescription = () => {
  const { animes } = useContext(AnimeContext)
  const router = useRouter()
  const { animeId } = router.query

  return (
    <PrivateRoute>
      <Head>
        <title>OtakuFlix | Description</title>
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
      <Navbar />
      <div className="h-auto w-full flex flex-col justify-center items-center">
        {animes?.map((anime) => {
          if (anime.id === animeId) {
            return (
              <div
                key={anime.id}
                className="max-w-[800px] min-w-[320px] flex flex-col mx-auto relative"
              >
                <div className="mb-12">
                  <h1 className="text-3xl text-white mb-3">
                    {anime?.attributes?.titles?.en?.toUpperCase()}
                  </h1>
                  <img
                    src={anime?.attributes?.posterImage?.original}
                    alt={anime?.attributes?.description}
                    className="rounded-3xl w-full relative"
                  />
                  <p className="text-xl text-white">
                    {`From ${dateFormatted(
                      anime?.attributes?.startDate
                    )} to ${dateFormatted(anime?.attributes?.endDate)}`}
                  </p>
                  <p className="text-xl text-white mt-3">
                    {anime?.attributes?.description}
                  </p>
                  <div>
                    <iframe
                      width="1280"
                      height="720"
                      className="w-full h-96"
                      src={`https://www.youtube.com/embed/${anime?.attributes?.youtubeVideoId}`}
                      title={`${anime?.attributes?.titles?.en} Trailer`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    <AnimeInformation
                      type="Episodes"
                      value={anime?.attributes?.episodeCount}
                    />
                    <AnimeInformation
                      type="Average"
                      value={`${anime?.attributes?.averageRating} %`}
                    />
                    <AnimeInformation
                      type="Popularity"
                      value={anime?.attributes?.popularityRank}
                    />
                    <AnimeInformation
                      type="Status"
                      value={anime?.attributes?.status}
                    />
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </PrivateRoute>
  )
}

export default AnimeDescription
