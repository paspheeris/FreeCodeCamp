class TwitchApi {
  constructor(apiKey, ls) {
    this.cachedData = {};
    this.apiKey = apiKey;
    this.baseEndPoint = `https://api.twitch.tv/kraken/`;
  }
  getUserName(userName) {
    const endpoint = `${this.baseEndPoint}users?login=${userName}`;
    return fetch(endpoint, {
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.apiKey
      }
    })
      .then(data => {
        return data.json();
      })
      .then(parsedData => {
        const obj = parsedData.users[0];
        this.cachedData[userName] = obj;
        ls.saveStreamers(JSON.stringify(this.cachedData));
        return parsedData
      })
  }

  getId(id) {
    const endpoint = `${this.baseEndPoint}streams/${id}`;
    // let parsedData;
    return fetch(endpoint, {
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.apiKey
      }
    })
      .then(data => {
        // console.log(data);
        return data.json();
      })
      .then(parsedData => {
        //  console.log('ID:', parsedData);
        return parsedData;
      });
  }
}

class LocalStore {
  saveStreamers(cachedData) {
    localStorage.setItem('streamers', cachedData);
  }
}


//Given a username, performs an api call and then, if the username isnt already in the streamersObject, it adds in an object with data for that user
// function addStreamerToObject(userName) {
//   twitch.getUserName(userName)


//       // }).then(res => {
//       //   console.log('in then');
//       //     localStorage.setItem('streamersObject', JSON.stringify(streamersObject));
//       //     updateStreamersObject();
//       //      console.log('streamersObject:', streamersObject);
//     })
//     //Create a modal with a popup 'invalid username'
//     .catch(reject => console.log('reject'));
// }