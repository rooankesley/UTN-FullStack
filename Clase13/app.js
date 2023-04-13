$( document ).ready(function() {
    const text = document.querySelector("#quote");
    const characterauthor = document.querySelector("#author");

    const button = document.querySelector('#refresh');

    const showQuote = async () => {

    try {
        const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
        const response = await fetch(url);
        const data = await response.json();
        showHtml(data[0]);
    } catch (error) {
        console.log(error);
    }

}

const showHtml = ({ quote, character, image, characterDirection}) => {

    text.textContent = quote;
    characterauthor.textContent = character;
    $('#home').removeClass( "d-flex" ).addClass( "d-none" );
    $('#quotion').removeClass( "d-none" ).addClass( "d-flex" );
    if (characterDirection == "Left") {
        $('#img__character_left').css({"background":"url(" + image + ") center center no-repeat", "background-size":"contain"});
        $('#img__left').removeClass( "d-none" ).addClass( "d-flex" );
        $('#img__right').removeClass( "d-flex" ).addClass( "d-none" );
    } else {
        $('#img__character_right').css({"background":"url(" + image + ") center center no-repeat", "background-size":"contain"});
        $('#img__right').removeClass( "d-none" ).addClass( "d-flex" );
        $('#img__left').removeClass( "d-flex" ).addClass( "d-none" );
    }
}

button.addEventListener('click', showQuote);
});