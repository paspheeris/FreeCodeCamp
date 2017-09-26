class TwitchApi {
  constructor(apiKey, ls) {
    this.cachedData = {};
    this.apiKey = apiKey;
    this.baseEndPoint = `https://api.twitch.tv/kraken/`;
    // this.update = this.update.bind(this);
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
    // console.log(this.cachedData);
    // if (this.cachedData.vanguardstv === 'undefined') return;
    // console.log('past if');
    // // console.log(this);
    // const id = this.cachedData.vanguardstv._id;
    // const endpoint = `${this.baseEndPoint}streams/${id}`;
    // let parsedData;
    console.log('cachedData in twitch.update', this.cachedData);
    // console.log(Object.values(this.cachedData)[1]._id);
    // const id = Object.values(this.cachedData)[1]._id;
    const ids = Object.values(this.cachedData).map(streamer => {
      return streamer._id;
    });
    console.log('ids:', ids);
    const baseEndpoint = this.baseEndPoint;
    Promise.all(ids.map(id => {
      const endpoint = `${baseEndpoint}streams/${id}`;
      console.log('endpoint:', endpoint);
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
          console.log('parsedData', parsedData);
          return parsedData;
        });
    }))
      .then(promiseResults => {
        console.log(promiseResults);
      })
      .catch(error => {
        console.log(error);
      })
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