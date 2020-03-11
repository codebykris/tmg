const axios = require('axios')
const endpoint = 'https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments'


// format retrieved comment data within appropriate markup
const createCommentMarkup = async (comments) => {
  const noDataMsg = 'There are currently no comments on this post.'
  let markup = ''

  for (let comment of comments.data) {
    markup += 
      `<li class="comment__item">
        <div class="comment__data">
          <div class="comment__data-left">
            <span class="comment__name">${comment.name}</span>
            <span class="comment__date">${comment.date /* TO-DO: write date format util or use 'moment' lib */}</span>
          </div>
          <div class="comment__data-right">
            <span class="comment__likes">${comment.likes} Likes</span>
          </div>
        </div>
        <div class="comment__body">
          ${comment.body}
        </div>
      </li>`
  }
  return comments ? markup : `<h3>${noDataMsg}</h3>`
}

// get comment data json response, from api endpoint 
const getComments = async () => {
  try {
    // TO-DO: tests must be written against response obj to ensure security / data quality
    return await axios.get(endpoint)
  } catch (error) {
    console.error(error)
  }
}

// render comment data in the DOM, as children of parent component
const renderComments = async () => {
  const comments = await getComments()
  const commentHtml = await createCommentMarkup(comments)

  if (comments && comments.data && comments.data.length) {
    document.querySelector('.comments__count').innerHTML = comments.data.length
    document.querySelector('.comments__list').innerHTML = commentHtml
  }
}

// creates initial comments block (parent component), renders in DOM
const initComments = () => {
  const commentTpl = 
    `<div class="comments__header">
      <h2 class="comments__heading"><span class="comments__count"></span> Comments</h2>
      <div class="comments__filters">
        <span id="comments__filter-label">Sort</span>
        <a aria-labelledby="comments__filter-label">Likes</a>
        <a aria-labelledby="comments__filter-label">Newest</a>
      </div>
    </div>
    <div class="comments__body">
      <ul class="comments__list"></ul>
    </div>`
  document.querySelector('.comments').innerHTML = commentTpl
}

initComments()
renderComments()
