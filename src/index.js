import './style.css';
import displayPopUp from './modules/comment.js';
import './logo.png';
import './play.png';
import './like.png';
import Movies from './modules/api.js';

const movie = new Movies();

const update = async () => {
  const movieContainer = document.querySelector('.movie-container');
  const allData = await movie.getMovies();
  const items = allData.slice(0, 9);
  let html = '';
  items.forEach((element, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index);
    html = `
                <div class="card-image-container">
                    <img class="card-image" src="${element.image.medium}" alt="">
                    <img src="./play.png" alt="" id="play">
                </div>
                <div class="card-content">
                    <p class="movie-title">${element.name}</p>
                    <img src="./like.png" alt="like" id="like">
                    <p class="like-stat">2 likes</p>
                </div>
                <button class="card-button" id="${element.id}" type="submit">Comments</button>
              `;
    card.innerHTML = html;
    movieContainer.append(card);
    const commentButton = document.querySelector(`.card[data-index="${index}"] .card-button`);
    commentButton.addEventListener('click', async () => {
      displayPopUp(element, index);
    });
  });
};
update();