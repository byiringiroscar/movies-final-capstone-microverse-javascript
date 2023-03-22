import './style.css';
import displayPopUp from './modules/comment.js';
// import './logo.png';
class Movies {
    getMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows?page=1');
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
  const items = allData.slice(0, 6);
  console.log(items);
  let html = '';
  // for (let i = 0; i < 1; i += 1) {
  //   const singleData = allData[i];
  //   console.log(singleData);
  //   html += `<div class="card" data-index="${i}">
  //       <div class="card-image-container">
  //           <img class="card-image" src="${singleData.image.medium}" alt="">
  //           <img src="./play.png" alt="" id="play">
  //       </div>
        
  //       <div class="card-content">
  //           <p class="movie-title">${singleData.name}</p>
  //           <img src="./like.png" alt="like" id="like">
  //           <p class="like-stat">2 likes</p>
  //       </div>
  //       <button class="card-button" id="commentBtn">Comments</button>
  //   </div>`;
  // }
  items.forEach((element, index) => {
    html += `<div class="card" data-index="${index}">
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
    </div>`;
    movieContainer.innerHTML = html;
    const commentButton = document.querySelector(`.card[data-index="${index}"] .card-button`);
    commentButton.addEventListener('click', async () => {
      displayPopUp(element, index);
    });
  });
};
update();