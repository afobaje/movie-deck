import { MovieCatalogue, Render } from '@/components'
import React from 'react'
// import { getMovies } from '../../../Services'
// import { MoviesProps } from '../../../Types'


export default async function movies() {
    // const { results }: { results: MoviesProps[] } = await getMovies()
    return (

        <div>
            <MovieCatalogue  />
        </div>
    )
}
