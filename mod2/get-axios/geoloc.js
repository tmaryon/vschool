// PURPOSE, WHAT/HOW INVOKED, WHAT RETURNED

const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://developers.zomato.com/api/v2.1/geocode?lat=40.74524&lon=74.00432',
  headers: { 
    'user-key': '12b8bdca8741ef032dcc5ffabc0e1f0e'
  }
};

axios(config)




.then((response) => {
    // turn the results into a string
    const json = JSON.stringify(response.data.nearby_restaurants)
    // turn JSON string into a JavaScript object
    const data = JSON.parse(json)
    // view the array of restaurant objects
    console.log(data)
    // use .map on data to return restaurant names (for example)
    data.map((arr) => { 
      // Create a new restaurant entry for each restaurant object 
      // using the constructor function
      let restEntry = new Restaurant(arr.restaurant.name, arr.restaurant.currency,
        arr.restaurant.photos_url, arr.restaurant.user_rating.aggregate_rating);
      console.log(restEntry)
    })
})
.catch(function (error) {
    console.log(error);
});

// constructor function
function Restaurant(name, currency, photoURL, rating) {
        this.name     = name;
        this.currency = currency;
        this.photoURL = photoURL;
        this.rating   = rating;
}