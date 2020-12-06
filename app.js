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
        $index.appendTo($pokeBall);

        const $image = $('<img>').attr('src' , `https://pokeres.bastionbot.org/images/pokemon/${userInput.toLowerCase()}.png`)
        $image.appendTo($pokeBall)



        // const $types = $('<ul>').addClass('types')
        //   $types.appendTo($pokeBall).text(data.types)

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
