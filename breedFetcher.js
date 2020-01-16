const request = require('request');

const breedFetcher = () => {
  const argument = process.argv.slice(2).join('');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${argument}`, (error,response,body) => {
    
    if (error) {
      console.log("Error, please verify your details and try again");
      return "Error, please verify your details and try again";
    } else {
      const catObject = JSON.parse(body);

      if (catObject.length === 0) {
        console.log("Breed Not Found");
        return "Breed Not Found";
      } else {
        console.log(catObject[0]['description']);
        return catObject[0]['description'];
      }

    }
  });
};
breedFetcher();