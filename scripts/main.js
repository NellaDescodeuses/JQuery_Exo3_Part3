$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let essai = 0;
    $("button").click(function () {
        essai ++
        console.log(essai);
        let guess = $("input").val();
        if(isNaN(guess) == false){
            //
            if (parseInt(guess, 10) === randomNumber) {
                alert("BINGO MOFO !");
                alert("T'AS TROUVE EN " + essai + " ESSAI(S) !");
                //le return met fin a l'exécution de la fonction lorsque la fonction est true. ( lorsque le chiffre est trouvé)
                return;
            }else if (essai === 5){
                alert("T'AS PERDU LOOSER ! C'ETAIT : " + randomNumber);
            } else if (parseInt(guess, 10) < randomNumber) {
                alert("TROP PETIT CABRON !");
            } else {
                alert("TROP GRAND NARVALO !");
            }
    
        }else{
            alert("DES CHIFFRES !!!!!")
        }
    
    });
    console.log(randomNumber);
});
