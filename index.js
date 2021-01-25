const Deck = document.querySelector(".deck");
const Faces = document.querySelector(".FacesInput");
const Suits = document.querySelector(".SuitsInput");
const Gen = document.querySelector(".GenerateDeck");




Gen.addEventListener('click', function CreateDeck(){
    var face = Faces.value.split(",");
    var suit = Suits.value.split(",");

    suit.forEach(element1 => {
        const newSuit = document.createElement("Div");
        newSuit.classList.add('suit');
        face.forEach(element2 => {
            const newCard = document.createElement("p");
            newCard.classList.add("card");
            newCard.innerText = "The " + element2 +" of " + element1;
            newSuit.appendChild(newCard);
        })
        Deck.appendChild(newSuit);
    });
});
