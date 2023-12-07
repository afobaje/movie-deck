import Image from 'next/image'
import { getMovies } from '../../Services'
import { MoviesProps } from '../../Types'
import { HomePage, MovieCatalogue, Render } from '../components'


export default async function Home() {
  const { results }: { results: MoviesProps[] } = await getMovies()
  return (
    <HomePage movies={results} />
  )
}
