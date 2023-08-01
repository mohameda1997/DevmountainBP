console.log("is this thing linked?....");

const message = document.querySelector('#message');

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector('input');
  const movie = document.createElement('li');
  const movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);

  movieTitle.addEventListener('click', crossOffMovie);

  document.querySelector('ul').appendChild(movie);
  inputField.value = '';
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = 'Movie deleted!';
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = 'Movie watched!';
  } else {
    message.textContent = 'Movie added back!';
  }
  revealMessage();
}

document.querySelector('form').addEventListener('submit', addMovie);

function revealMessage() {
  message.classList.remove("hide");
  setTimeout(function() {
    message.classList.add("hide");
  }, 1000);
}

deleteMovie();
crossOffMovie();
deleteMovie();

