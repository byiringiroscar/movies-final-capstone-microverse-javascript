import Movies from './api.js';

require('jest-localstorage-mock');

describe('Check all Movies count', () => {
  it('Movies count be 15', async () => {
    const newMovies = new Movies();
    const allMovies = await newMovies.getMovies();
    const slicedMovie = allMovies.slice(0, 15);
    expect(slicedMovie.length).toBe(15);
  });

  it('Movies count should be 0 when there are no movies available', async () => {
    const newMovies = new Movies();
    // Simulate scenario where there are no movies available
    jest.spyOn(newMovies, 'getMovies').mockResolvedValue([]);
    const allMovies = await newMovies.getMovies();
    expect(allMovies.length).toBe(0);
  });
});