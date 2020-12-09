$(() => {

  const $openBtn = $("#openModal");

    const $modal = $("#modal");

    const $closeBtn = $("#close")

    const openModal = () => {
      $modal.css("display", "block");
    }
      $openBtn.on("click", openModal);

    const closeModal = () => {
      $modal.css("display", "none");
    }

$("form").on("submit" , (event) => {
    event.preventDefault();
    openModal;

    const userInput = $('input[type = "text"]').val();

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${userInput.toLowerCase()}`,

    }).then(
        (data) => {
          // console.log(data);
          $('#modal-textbox').empty();

          const $pokeBall = $('<div>').addClass('pokeBall');
          $pokeBall.appendTo('#modal-textbox');

          const $pokeName = $('<h3>').text(data.name);
          $pokeName.appendTo($pokeBall)

          const $index = $('<p>').text(data.id);
          $index.appendTo($pokeBall);

          const $image = $('<img>').attr('src' , `https://pokeres.bastionbot.org/images/pokemon/${userInput.toLowerCase()}.png`)
          $image.appendTo($pokeBall)

          $('#modal-textbox').append($closeBtn);

          $closeBtn.on("click", closeModal);

        });

    })
});
// ==============================
// Graveyard code
// ==============================
// $("#name").text(data.name);
// $("#id").text(data.id);
// $("#abilities").text(data.abilities[0].ability.name)
// $("#description").text(data.types[0].type.name)
// const $types = $('<ul>').addClass('types')
//   $types.appendTo($pokeBall).text(types[0].type)

//   for (let profile of data.results) {
//     // console.log(data);
// //store each pokemon URL in a var so we can make a network req to each
//   let pokeURL = profile.url;
// //make a call to each URL
//   $.ajax({
//   //set the url equal to the variable (iterating pkmn urls)
//     url: pokeURL,
//   //in the promise we'll declare the data we fetch as pokemon
//   }).then(
//     (pokemon) => {
//   console.log(data);
//   //create a "card" for each pokemon that holds an image
//   //the image source will be pokeres url with the id of the pkmn obj bc that is how the url is structured
//
//     $(`<div class ="pokeBall">
//       <h3 id="pokeName">${pokemon.name}</h3>
//     <img id="pokePics" src=https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png alt=${pokemon.name}>
//     <p id = "index">Index #:${pokemon.id}</p>
//     </div>`).addClass(pokemon.name).appendTo(".container"); //append it to our container var
