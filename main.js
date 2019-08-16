// TODO: validations !

var state = {
  shows: []
};

// Create 
function createShow(description, showLocation, date) {
  var newShow = { description, showLocation, date, id: getId() };
  state.shows.push(newShow);
}

// Read all shows
function readShows() {
  return state.shows;
}

// Update a show
function updateShow(paramtersToUpdate, id) {  
  var keysToUpdate = Object.keys(paramtersToUpdate);
  for (let index = 0; index < keysToUpdate.length; index++) {
    var key = keysToUpdate[index];
    var value = paramtersToUpdate[key];
    state.shows[getIndex(id)][key] = value;
  }
}

// Delete a show
function deleteShow(id) {
  state.shows.splice(getIndex(id), 1);
}

function getIndex(id) {
  for (let index = 0; index < state.shows.length; index++) {
    var show = state.shows[index];
    if(show.id === id) {
      return index;
    }
  }
}

// Get a uniqe id - just for mock purposes usually the server handles this
function getId() {
  if(state.shows.length === 0) {
    return 1;
  }
  return state.shows[state.shows.length - 1].id + 1;
}
