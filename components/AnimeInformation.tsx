type AnimeInformationProps = {
  type: string
  value: string | number
}

const AnimeInformation = ({ type, value }: AnimeInformationProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <p className="text-3xl text-white mb-3 mt-3">{type}</p>
      <p className="text-3xl text-white mb-3 mt-3">{value}</p>
    </div>
  )
}

export default AnimeInformation
