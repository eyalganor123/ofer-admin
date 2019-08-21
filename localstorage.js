function setLocal () {
  var testObject = state.shows;
  localStorage.setItem ('testObject', JSON.stringify (testObject));
}

function getLocal () {
  var retrievedObject = localStorage.getItem ('testObject');

  if (retrievedObject) {
    oldState = JSON.parse (retrievedObject);
    state.shows = oldState;
    renderShows (oldState);
  }
}
