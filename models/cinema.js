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

Cinema.prototype.filmByYearTrueFalse = function(year, films) {
  const result = films.some((film) => {
    return film.year === year;
  })
  return result;
}


Cinema.prototype.allFilmsByLength = function(length, films) {
  const result = films.every((film) => {
    return film.length > length;
  })
  return result;
}

Cinema.prototype.totalRunningTime = function(films) {
  const result = films.reduce((accumulator, film) => {
    return accumulator + film.length;
  }, 0);
  return result;
}

Cinema.prototype.filmsByProperty = function(property, value, films) {
  const result = films.filter((film) => {
    return film[property] === value;
  });
  return result;
}

module.exports = Cinema;