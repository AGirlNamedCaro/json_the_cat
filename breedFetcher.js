const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,response,body) => {
    
    if (error) {
      //console.log("Error, please verify your details and try again");
      callback("Error, please verify your details and try again", null);
    } else {
      const catObject = JSON.parse(body);

      if (catObject.length === 0) {
        //console.log("Breed Not Found");
        callback("Breed Not Found", null);
      } else {
        //console.log(catObject[0]['description']);
        callback(null,catObject[0]['description']);
      }

    }
  });
};

module.exports = {fetchBreedDescription};