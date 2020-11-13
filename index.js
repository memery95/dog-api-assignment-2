function getDogImage (num) {
    console.log(num);
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert(error));
}

function displayResults (responseJson) {
    $('.results').append(`<h2>Here's your dogs!</h2>`);
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.results').append(`<img src="${responseJson.message[i]}" class="dogImages">`);
    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      
      const inputNumber = $('#input-number').val();
      if (!inputNumber) {
          getDogImage("3");
      } else {
        getDogImage(inputNumber);
      }
    });
}

$(function() {
    console.log("App loaded! Waiting for submit!");
    watchForm();
});