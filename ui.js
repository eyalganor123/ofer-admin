init();

function init() {
    addEventListeners();
}

function addEventListeners() {
  
    var addShowBtn = $(".add-show-button");
    addShowBtn.click (function() {
        openDialog('add show', getAddForm());
    });

    var dialogBg = $('.dialog-background');
    dialogBg.click(function() {
        closeDialog();
    });

}

function renderShows(shows) {
    var listElement = document.querySelector('.shows-list');
    var i = -1;
    shows.forEach(function(show) {
        i++;
        var listElementAttributes = {
             id: i,
             onclick:"openEditDialog(" + i + ")",
             innerHTML: show.description + show.showLocation  + show.date};
        var listItemElement = createNewElement('li',listElementAttributes);
        listElement.appendChild(listItemElement);
    });
}

function openEditDialog(i) {
    openDialog('edit your show', getEditForm(i));
}