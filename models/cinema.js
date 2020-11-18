const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(films) {
//   const result = films.filter((film) => {
//     return film;
//   });
//   return result;
// }
const result = [];
films.forEach((film) => {
  result.push(film.title);
});
return result;
}

module.exports = Cinema;
