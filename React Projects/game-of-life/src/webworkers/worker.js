let initialStateReceived = false;
let state;

self.onmessage = (msg) => {
  if(!initialStateReceived) {
    console.log('initial message received in worker');
    state = msg.data;
    initialStateReceived = true;
  }
  randomize(state);
  self.postMessage(state);
}

function randomize() {
      state = state.map(subArr => {
      return subArr.map(cell => {
        return (Math.random() < 0.5 ? false : true);
      });
    });
}
