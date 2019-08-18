function getAddForm() {
    var form = document.createElement('div');

    var inputDescription = document.createElement('input');
    inputDescription.id = "inputDesription";
    inputDescription.placeholder = "Description";

    var inputLocation = document.createElement('input');
    inputLocation.id = "inputLocation";
    inputLocation.placeholder = "Location";

    var inputDate = document.createElement('input');
    inputDate.type = "date";
    inputDate.id = "inputDate";
    inputDate.required = true;

    var addButton = document.createElement('button');
    addButton.setAttribute("class", "add-submit-button");
    addButton.innerHTML = "submit";
    addButton.addEventListener('click', function() {
        validate(inputDescription.value, inputLocation.value, inputDate.value);

    });

    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(addButton);

    return form;
}


function validate(desc, loc, date) {

    if (desc == "" || loc == "" || date == "") {
        alert("you must enter all fields");
        return;
    } else {
        clearList();
        document.getElementById('empty-state').innerHTML = "";
        createShow(desc, loc, date);
        renderShows(state.shows);
        var testObject = state.shows;
        localStorage.setItem('testObject', JSON.stringify(testObject));
        closeDialog();
    }
}

function clearList() {
    var ul = $("ol li");
    ul.remove();
    return true;
}

function getEditForm(i) {
    var form = document.createElement('div');

    var inputDescription = document.createElement('input');
    inputDescription.id = "inputDescription";
    var showInfo = state.shows[i].description;
    inputDescription.value = showInfo;

    var inputLocation = document.createElement('input');
    inputLocation.id = "inputLocation";
    var showLocation = state.shows[i].showLocation;
    inputLocation.value = showLocation;

    var inputDate = document.createElement('input');
    var showDate = state.shows[i].date;
    console.log(showDate);
    inputDate.value = showDate;
    inputDate.type = "date";
    inputDate.name = "date";
    inputDate.id = "inputDate";

    var addButton = document.createElement('button');
    addButton.setAttribute("class", "add-submit-button");
    addButton.innerHTML = "submit";

    var deleteButton = document.createElement('button');
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener('click', function() {

        deleteShow(i);
        clearList();
        if (state.shows == "") {
            document.getElementById("empty-state").innerHTML = "you have no shows, press + to add a new show";
        }
        renderShows(state.shows);
        var testObject = state.shows;
        localStorage.setItem('testObject', JSON.stringify(testObject));
        closeDialog();

    });


    addButton.addEventListener('click', function() {

        var newDescription = document.getElementById("inputDescription").value;
        var newLocation = document.getElementById("inputLocation").value;
        var newDate = document.getElementById("inputDate").value;
        var newData = { description: newDescription, showLocation: newLocation, date: newDate }
        updateShow(newData, i);
        clearList();
        renderShows(state.shows);
        closeDialog();

    });



    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(addButton);
    form.appendChild(deleteButton);

    return form;
}

var retrievedObject = localStorage.getItem('testObject');

if ((JSON.parse(retrievedObject)) == "") {
    console.log("you have no shows, press + to add a new show");
    document.getElementById("empty-state").innerHTML = "you have no shows, press + to add a new show";
    // $(".empty-state").innerText = "you have no shows, press + to add a new show";


} else {
    oldState = (JSON.parse(retrievedObject));
    state.shows = oldState;
    console.log(oldState);
    renderShows(oldState);
}