$(() => {
  $("form").on("submit", (event) => {

      event.preventDefault();

      const userInput = $('input[type = "text"]').val();

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`
    }).then(
        (data) => {
          console.log(data);
        const $pokeBall = $('<div>').addClass('pokeBall');
        $pokeBall.appendTo('.container');
        const $pokeName = $('<h3>').text(data.name);
        $pokeName.appendTo($pokeBall)
        const $index = $('<p>').text(data.id);
        $index.appendTo($pokeName);
        const $types = $('<p>').text(data.types)
        $types.appendTo($pokeName)
        },
        (error) => {
          console.log(error);
        }
    );
  });
});


// ==============================
// Graveyard code
// ==============================
// $("#name").text(data.name);
// $("#id").text(data.id);
// $("#abilities").text(data.abilities[0].ability.name)
// $("#description").text(data.types[0].type.name)
