const apiKey = 'c1f84317188811403e71da72d6846bc6';
const apiBase = 'https://api.themoviedb.org/3';

const fetchMovieApi = async (query) => {
  const getApi = await fetch(`${apiBase}${query}`);
  const resolveJson = await getApi.json();
  return resolveJson;
}

export const getHomeList = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais Da Netflix',
      items: await fetchMovieApi(`/discover/tv?with_network=123&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await fetchMovieApi(`/discover/tv?with_network=123&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await fetchMovieApi(`/trending/all/week?123&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await fetchMovieApi(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await fetchMovieApi(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await fetchMovieApi(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await fetchMovieApi(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await fetchMovieApi(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`),
    },
  ]
}
