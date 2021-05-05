class Fetch {
    async getCurrent(input) {
      const myKey = "166a433c57516f51dfab1f7edaed8413";
  
      //make request to url

  //the fetch method fetches what the user inputs
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      //stores what the fetch method retrieves in the response
      //grabs the data from the json method and returns the data, in order to use it later in the app.
      //the data gets fed into the ui methods
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }