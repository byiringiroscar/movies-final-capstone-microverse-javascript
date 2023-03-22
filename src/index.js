import './style.css';
import displayPopUp from './modules/comment.js';
import './logo.png';
import './play.png';
import './like.png';

class Movies {
    getMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    }
}

const movie = new Movies();

const update = async () => {
  const movieContainer = document.querySelector('.movie-container');
  const allData = await movie.getMovies();
  const items = allData.slice(0, 8);
  let html = '';
  items.forEach((element, index) => {
    html += `   <div class="card" data-index="${index}">
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
                </div>
              `;
    movieContainer.innerHTML = html;
    const commentCardButton = document.querySelectorAll('.card-button');
    commentCardButton.forEach((button) => {
      button.addEventListener('click', async (e) => {
        const btnId = parseInt(e.target.id, 10);
        const index = button.parentNode.getAttribute('data-index');
        const element = items.find((obj) => obj.id === btnId);
        await displayPopUp(element, index);
      });
    });
  });
};
update();