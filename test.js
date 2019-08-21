test ();
function test () {
  // create new shows
  createShow ('israel gig', [31.771959, 35.217018], new Date ());
  createShow ('new york fun', [40.7128, 74.0060], new Date ());
  createShow ('san fran fun', [37.7749, 122.4194], new Date ());

  // delete a show
  deleteShow (2);

  // update a show
  var paramters = {date: 'new dateeeee', description: 'updated description'};
  updateShow (paramters, 1);

  // render shows in a list
  renderShows (state.shows);

  console.table (state.shows);

  // openDialog('mock title', 'mock content');
  // closeDialog();
}
