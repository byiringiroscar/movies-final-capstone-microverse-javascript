import './style.css';
import displayPopUp from './modules/comment.js';
import './logo.png';
import './play.png';
import './like.png';
import Movies from './modules/api.js';

const movie = new Movies();

const update = async () => {
  const movieContainer = document.querySelector('.movie-container');
  const allLike = await movie.getLike();
  const allData = await movie.getMovies();
  const items = allData.slice(0, 9);
  const likeFiltered = allLike.filter((like) => items.find((item) => like.item_id === item.id));
  const sortedLike = likeFiltered.sort((a, b) => a.item_id - b.item_id);
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
                    <button class="heart-btn" id="${element.id}">
                      <i class="fas fa-heart"></i>
                    </button>

                  
                    <p class="like-stat">${sortedLike[index].likes} likes</p>
                </div>
                <button class="card-button" id="${element.id}" type="submit">Comments</button>
              `;
    card.innerHTML = html;
    movieContainer.append(card);
    const commentButton = document.querySelector(`.card[data-index="${index}"] .card-button`);
    commentButton.addEventListener('click', async () => {
      displayPopUp(element, index);
    });

    const likeBtn = document.querySelector(`.card[data-index="${index}"] .heart-btn`);
    likeBtn.addEventListener('click', async () => {
      const btnId = likeBtn.getAttribute('id');
      const likeId = parseInt(btnId, 10);
      await movie.postLike(likeId);
      const currentLike = await movie.getLike();
      const likeChange = currentLike.find((like) => like.item_id === likeId);
      const likeContent = document.querySelector(`.card[data-index="${index}"] .like-stat`);
      likeContent.textContent = `${likeChange.likes} likes`;
    });
  });
};
window.onload = update();