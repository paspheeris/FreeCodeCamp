class TwitchApi {
  constructor(apiKey, ls) {
    this.cachedData = {};
    this.apiKey = apiKey;
    this.baseEndPoint = `https://api.twitch.tv/kraken/`;
    // this.update = this.update.bind(this);
  }
  hydrate() {

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
        // console.log(this);
        const obj = parsedData.users[0];
        this.cachedData[userName] = obj;
        ls.saveStreamers(JSON.stringify(this.cachedData));
        return parsedData
      })
  }

  update() {
    console.log('cachedData in twitch.update', this.cachedData);
    const entries = Object.entries(this.cachedData);
    const baseEndpoint = this.baseEndPoint;
    return Promise.all(entries.map(entry => {
      const endpoint = `${baseEndpoint}streams/${entry[1]._id}`;
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
          // console.log('parsedData', parsedData);
          this.cachedData[entry[1].name].stream = parsedData.stream;
          // console.log('this.cachedData at end of twitch.update()', this.cachedData);
          return parsedData;
        })
        .catch(error => {
          console.log(error);
        })
    }));
  }
}

class LocalStore {
  saveStreamers(cachedData) {
    localStorage.setItem('streamers', cachedData);
  }
  getStreamers() {
    return localStorage.getItem('streamers');
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