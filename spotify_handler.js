var hash = window.location.hash.substr(1);

if (hash == "") {
  window.location = "https://accounts.spotify.com/authorize?redirect_uri=https://danielkyh.github.io/testspotauth/index.html&client_id=33c8e9e18c914c99a33a2ef7ff6d1a60&response_type=token"
}

var hashParams = hash.split('&').reduce(function (result, item) {
  var parts = item.split('=');
  result[parts[0]] = parts[1];
  return result;
}, {});

console.log(hashParams);

$(document).ready(function() {
  $('#search-button').on("click", function() {
    let albumName = $('#search').val()
    let queryURL = "https://api.spotify.com/v1/search?type=album&market=US&limit=5&q=" + albumName
    $.ajax({
      type: "GET",
      url: queryURL,
      headers: {
        "Authorization": "Bearer " + hashParams.access_token
      },
      dataType: 'json'
    }).done(function(response) {
      console.log(response)
    })
  })
})




