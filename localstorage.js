function setLocal() {
         var testObject = state.shows;
        localStorage.setItem('testObject', JSON.stringify(testObject));
}

function getLocal() {
         var retrievedObject = localStorage.getItem('testObject');

    if ((JSON.parse(retrievedObject)) == []) {
        console.log("you have no shows, press + to add a new show");
        $(".empty-state").html = "you have no shows, press + to add a new show";

    } else {
        oldState = (JSON.parse(retrievedObject));
        state.shows = oldState;
        console.log(oldState);
        renderShows(oldState);
    }
}