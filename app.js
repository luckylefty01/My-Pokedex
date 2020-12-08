$(() => {
  $("#button").on("click", (event) => {
      event.preventDefault();

      // const userInput = $('input[type = "text"]').val();

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon?limit=251`,
    }).then(
        (data) => {
          // console.log(data);
          for(let profile of data.results){
            let pokeURL = profile.url;

            $.ajax({
              url:pokeURL,
            }).then((pokemon) => {
              // console.log(pokemon);

              let $pokeBall = $(`<div class="pokeBall">
                <h3 id = "pokeName">Name:${profile.name}</h3>
                <img id = "pokePics" src=https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png alt=${pokemon.name}>
                <p id = "idex">Index:${pokemon.id}</p>`
              ).appendTo(".pokedex-container");
            });
          }
        },

        (error) => {
          console.log(error);
        }
    );

      //==================Carousel==================

    let $pokeCarousel=[];
    // console.log(pokeCarousel);
    let currentImgIndex =0;
    let $numOfImages = $(".pokeBall").length-1;

    $(".next").on("click",() => {
      $(".pokeBall").eq(currentImgIndex).css("display", "none");

      if(currentImgIndex<numOfImages){
        currentImgIndex++;
      } else {
        currentImgIndex = 0;
      }
      $(".pokeBall").eq(currentImgIndex).css("display", "block");
    });


      $(".previous").on("click", () => {

        $(".pokeBall").eq(currentImgIndex).css("display", "none")

        if(currentImgIndex>0) {
          currentImgIndex --
        } else {
          currentImgIndex = numOfImages
        }

        $(".pokeBall").eq(currentImgIndex).css("display", "block");
      });
  });
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

//   console.log(data);
// const $pokeBall = $('<div>').addClass('pokeBall');
// $pokeBall.appendTo('.container');
//
// const $pokeName = $('<h3>').text(data.name);
// $pokeName.appendTo($pokeBall)
//
// const $index = $('<p>').text(data.id);
// $index.appendTo($pokeBall);
//
// const $image = $('<img>').attr('src' , `https://pokeres.bastionbot.org/images/pokemon/${userInput.toLowerCase()}.png`)
// $image.appendTo($pokeBall)
