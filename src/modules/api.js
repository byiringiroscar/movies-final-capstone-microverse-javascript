const involvementId = 'VdUaJZjJhUjlpm3843JM';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;

// API for post Comment

class Movies {
  postLike = async (likeId) => {
    const data = {
      item_id: parseInt(likeId, 10),
    };
    const response = await fetch(
      likeUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  };

  getMovies = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  getLike = async () => {
    try {
      const response = await fetch(likeUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  postComment = async (index, username, comment) => {
    await fetch(commentUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
        username,
        comment,
      }),
      headers: { 'content-Type': 'application/json; charset=UTF-8' },
    });
  }

  getComment = async (index) => {
    const response = await fetch(`${commentUrl}?item_id=${index}`);
    const user = await response.json();
    return user;
  };
}

export default Movies;
