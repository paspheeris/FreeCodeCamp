sectionTitles.forEach(section => {
  section.addEventListener('click', toggleSubsections)
});
function toggleSubsections() {
  (this.nextElementSibling.style.display === "none") ?
    (this.nextElementSibling.style.display = "flex") :
    (this.nextElementSibling.style.display = "none")
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formValue = inputField.value;

  if (streamerInCachedData(formValue)) {
    displayMessage(formMessage, `${formValue} has already been added`);
    inputField.value = '';
    return;
  } else {
    twitch.getUserName(formValue)
      .then(data => {
        console.log(data);
        return twitch.update();
      })
      .then(updatedStreamers => {
        console.log('updatedStreamers', updatedStreamers);
        displayMessage(formMessage, '');
        createAndAppend(updatedStreamers);
      })
      .catch(error => {
        console.log(error);
        displayMessage(formMessage, `User "${formValue}" could not be found.`);
      })
  }

});
function displayMessage(div, message) {
  div.textContent = message;
}
function streamerInCachedData(name) {
  nameLowerCased = name.toLowerCase();
  const names = Object.keys(twitch.cachedData).map(name => name.toLowerCase());
  return names.includes(nameLowerCased);
  // console.log(name, names, displayNames);
}