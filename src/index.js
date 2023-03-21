// import './style.css';
// import './logo.png';

const movieContainer = document.querySelector('.movie-container');
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
  const allData = await movie.getMovies();
  let html = '';
  for (let i = 0; i < allData.length; i += 1) {
    const singleData = allData[i];
    html += `<div class="card">
        <div class="card-image-container">
            <img class="card-image" src="${singleData.image.medium}" alt="">
            <img src="./play.png" alt="" id="play">
        </div>
        
        <div class="card-content">
            <p class="movie-title">${singleData.name}</p>
            <img src="./like.png" alt="like" id="like">
            <p class="like-stat">2 likes</p>
        </div>
        <button class="card-button">Comments</button>
    </div>`;
  }
  movieContainer.innerHTML = html;
};
update();