// const googleDatabase = [
//     'cats.com',
//     'souprecipes.com',
//     'flowers.com',
//     'animals.com',
//     'catpictures.com',
//     'myfavouritecats.com'
// ];

// const googleSearch = (searchInput, db) => {
//     const matches = db.filter(website => {
//         return website.includes(searchInput);
//     });
//     return matches.length > 3 ? matches.slice(0, 3) : matches;
// }

// // console.log(googleSearch('soup', googleDatabase));
// console.log(this.window);


// module.exports = googleSearch;
require([
    "esri/Map",
    "esri/views/MapView"
  ], (Map) => {
    const map = new Map({
      basemap: "gray-vector"
    });
    console.log(map)
})


  