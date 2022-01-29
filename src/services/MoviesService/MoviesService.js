export default class MoviesService {
  constructor() {
    this.apiBase = 'https://api.themoviedb.org/3/';
    this.apiKey = 'bb5d20afb8f85bf38c498305edf45a23';
  }

  async getResponse(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return error.message;
    }
  }

  async getPoster(path) {
    const url = `https://image.tmdb.org/t/p/w500/${path}`;
    const poster = this.getResponse(url);
    return poster;
  }

  async searchMovies(searchQuery = 'return', pageNumber = 1) {
    const url = `${this.apiBase}search/movie?api_key=${this.apiKey}&include_adult=false&query=${searchQuery}&page=${pageNumber}`;
    const data = await this.getResponse(url);
    return data;
  }
}
