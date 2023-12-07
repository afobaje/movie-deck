// let fetchRoute='http://localhost:3002/?page=1&limit=10'
export async function getMovies(page = 1) {
    // const response = await fetch(`http://localhost:3002/?page=${page}&limit=16`, { cache: 'no-store' });
    const response = await fetch(`https://movie-box-production.up.railway.app/?page=${page}&limit=16`)
    const result = await response.json()
    return result;
}


export async function getAllMovies(arg: any) {
    const response = await fetch(arg, { cache: 'no-store' });
    const result = await response.json()
    return result;
}



