const ls = new LocalStore();
const twitch = new TwitchApi('dll0wzapy7w7ich3dmaqpc0w1yopkc', ls);


/////////////////////////////////////////
//function

//event listeners

//Remove mode
removeButton.addEventListener('click', function () {
  console.dir(this);
  const imgs = streamsContent.querySelectorAll('img');
  if (this.innerHTML === "Remove a stream") {
    this.innerHTML = "Done";
    imgs.forEach(img => {
      // console.dir(this);
      img.src = './can.png';
      img.parentNode.href = "javascript:function() { return false; }";
      img.addEventListener('click', removeDivFun)
    })
  } else if (this.innerHTML === "Done") {
    // console.log('in else if');
    this.innerHTML = "Remove a stream";
    imgs.forEach(img => {
      console.dir(img);
      img.src = img.dataset.logo;
      img.parentNode.href = img.parentNode.dataset.link;
      img.removeEventListener('click', removeDivFun);
    });
    console.dir(streamersObject);
    updateStreamersObject();
  }
  function removeDivFun() {
    let streamer = this.parentNode.parentNode.streamer;
    console.log('remove streamer div');
    console.dir(streamersObject[this.parentNode.parentNode.dataset.streamer]);
    delete streamersObject[this.parentNode.parentNode.dataset.streamer];
    console.log('this.parentNode.parentNode: ', this.parentNode.parentNode.parentNode.parentNode);
    this.parentNode.parentNode.parentNode.remove();

  }
});
function deleteContentDivs() {
  const contentNodeList = document.querySelectorAll('.content');
  contentNodeList.forEach(section => {
    let subNodes = section.querySelectorAll('.dummy');
    subNodes.forEach(streamerDiv => {
      streamerDiv.remove();
    });
  });

}
// inputField.addEventListener('keydown', function (e) {
//   console.dir(e);
//   console.dir(this);
//   if (e.code === "Enter" && this.value !== "") {

//   }
// })
// inputField.addEventListener('keydown', function (e) {
//   // console.dir(e);
//   // console.dir(this);
//   if (this.value in streamersObject) {
//     //Create modal saying that stream has already been added
//     // console.log('already in streamers list');
//   }
//   else if (e.key === "Enter" && this.value !== "") {
//   // console.log('in if');
//   addStreamerToObject(this.value)
// }
// })
// addButton.addEventListener('click', function (e) {
//   if (this.value in streamersObject) {
//     //Create modal saying that stream has already been added
//     // console.log('already in streamers list');
//   }
//   else if (this.value !== "") {
//     // console.log('in');
//     addStreamerToObject(this.value);
//   }
// })

twitch.hydrate()
  .then(streamers => {
    // console.log('sometiing', something);
    createAndAppend(streamers);
  })
