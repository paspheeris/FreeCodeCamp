const sectionTitles = document.querySelectorAll('.section-titles');
const all = document.querySelector('.streams-content');
const online = document.querySelector('.online-content');
const offline = document.querySelector('.offline-content');
const removeButton = document.querySelector('.remove-button');
const inputField = document.querySelector('.input-field');
const addButton = document.querySelector('.add-button');

function createOfflineBox(streamer) {
    const div = document.createElement('div');
    div.classList.add('dummy');
    const { name, display_name, logo, bio } = streamer;
    div.innerHTML = `
          <span class="title">${display_name}</span>
          <a href=https://www.twitch.tv/${name} target="_blank" data-link="https://www.twitch.tv/${name}">
            <img class="logo" src="${logo}" data-logo="${logo}" />
          </a>
          <span class="bio">${bio}</span>
      `;
    return div;
}
function createOnlineBox(streamer) {
    const div = document.createElement('div');
    div.classList.add('dummy');
    const { display_name, preview, logo, game } = streamer;
    div.innerHTML = `
          <div class="dummy" data-streamer="${streamer}">
            <span class="title">${display_name}</span>
            <img class="screenshot" src="${preview}" data-logo="${logo}" />
            <span class="bio"> Playing: ${game}</span>
          </div>
        `;
    return div;
}
function appendBoxes(boxes, parent) {
    boxes.forEach(box => {
        parent.appendChild(box);
    })
}
function createAndAppend(streamers) {
    const onlineBoxes = [];
    const offlineBoxes = [];
    Object.values(streamers).forEach(streamer => {
        streamer.stream
            ? onlineBoxes.push(createOnlineBox(streamer))
            : offlineBoxes.push(createOfflineBox(streamer));
    });
    appendBoxes(offlineBoxes, all);
    appendBoxes(onlineBoxes, online);
    appendBoxes(offlineBoxes, offline);
}