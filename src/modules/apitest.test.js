import Movies from './api.js';
import 'jest-environment-jsdom';

require('jest-localstorage-mock');

describe('Check all Movies count', () => {
  it('Movies count be 15', async () => {
    const newMovies = new Movies();
    const allMovies = await newMovies.getMovies();
    const slicedMovie = allMovies.slice(0, 15);
    expect(slicedMovie.length).toBe(15);
  });
});