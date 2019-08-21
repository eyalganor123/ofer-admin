var state = {
    shows: []
};

function createShow(description, showLocation, date) {
    if(!state.shows) return;
    var newShow = { description, showLocation, date, id: getId() };
    state.shows.push(newShow);
}

function readShows() {
    return state.shows;
}

function updateShow(paramtersToUpdate, i) {
    var keysToUpdate = Object.keys(paramtersToUpdate);
    for (let index = 0; index < keysToUpdate.length; index++) {
        var key = keysToUpdate[index];
        var value = paramtersToUpdate[key];
        state.shows[i][key] = value;
    }
}

function deleteShow(id) {
    state.shows.splice(id, 1);
}

function getIndex(id) {
    for (let index = 0; index < state.shows.length; index++) {
        var show = state.shows[index];
        if (show.id === id) {
            return index;
        }
    }
}

function getId() {
    if(!state.shows) return;
    if (state.shows.length === 0) {
        return 1;
    }
    return state.shows[state.shows.length - 1].id + 1;
}