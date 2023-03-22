const involvementId = 'VdUaJZjJhUjlpm3843JM';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;

// API for post Comment

const postComment = async (index, username, comment) => {
  await fetch(commentUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
      username,
      comment,
    }),
    headers: { 'content-Type': 'application/json; charset=UTF-8' },
  });
};

// API for get comment

const getComment = async (index) => {
  const response = await fetch(`${commentUrl}?item_id=${index}`);
  const user = await response.json();
  return user;
};

export {
  postComment, getComment,
};