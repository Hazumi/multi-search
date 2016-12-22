const $ = require('jquery');

$(document).ready(function() {

  const $form = $('#form');
  const $search = $('#search');
  const $links = $('#links');


  $form.submit(renderData);

  function renderData() {
    let searchInput = $search.val();
    console.log(searchInput);
    let ddgurl = `http://api.duckduckgo.com/?q=${searchInput}&format=json`;

    $.ajax({
      url: ddgurl,
      dataType: 'jsonp',
      type: 'POST',
      success: function (data) {
        console.log(data);
      }
    })
    return false;
  }

});
