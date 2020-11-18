const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(films) {
const result = [];
films.forEach((film) => {
  result.push(film.title);
});
return result;
}

Cinema.prototype.filmByTitle = function(title, films) {
  const result = films.filter((film) => {
    return film.title === title;
})
return result;
}

Cinema.prototype.filmByGenre = function(genre, films) {
  const result = films.filter((film) => {
    return film.genre === genre;
  })
  return result;
}

module.exports = Cinema;
