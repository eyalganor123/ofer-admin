var dialogState = {
  isRender: false,
  title: null,
  content: null,
};

function openDialog(title, content) {
  dialogState.isRender = true;
  dialogState.title = title;
  dialogState.content = content;
  _render(title, content);
}

function closeDialog() {
  dialogState.isRender = false;
  dialogState.title = null;
  dialogState.content = null;
  _render();
}

function _render(title, content) {

  var dialog = document.querySelector('.dialog');
  var dialogBg = document.querySelector('.dialog-background');
  
  if(dialogState.isRender) {
    dialog.setAttribute('style', 'display: block');
    dialogBg.setAttribute('style', 'display: block');
  } else {
    dialog.setAttribute('style', 'display: none');
    dialogBg.setAttribute('style', 'display: none');
  }

  var titleElement = document.querySelector('.dialog .title');
  titleElement.innerHTML = title;

  var contentElement = document.querySelector('.dialog .content');
  $('.dialog .content').html(content);
}
