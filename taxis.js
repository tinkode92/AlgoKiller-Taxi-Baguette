let Personnage = {
    name:'John',
    health:10,
 }

 const musics = [
    "Anissa - Wejdene",
    "Burna Boy-  Alone",
    "Drake - Circo Loko",
    "Ziak - Fixette",
    "Ninho - Vrais",
]

let trajet = {
    changements: 0,
    radio: musics[0],
    feuxrestant: 30,
}

function takeTaxi(Personnage,trajet){
    while (trajet.feuxrestant >0) {
        let musicrand = Math.floor(Math.random()*musics.length)
        let musicplay = musics[musicrand]
        if (musicplay == trajet.radio) {
            Personnage.health = Personnage.health -1, 
            trajet.changements ++,
            trajet.feuxrestant = trajet.feuxrestant -1
            console.log('musique à la radio: ' + musicplay + ', il manque ' + trajet.feuxrestant + ' feux rouges pour arrivé à la maison')
        } else {
            trajet.feuxrestant = trajet.feuxrestant -1
            console.log('musique à la radio: ' + musicplay + ', il manque ' + trajet.feuxrestant + ' feux rouges pour arrivé à la maison') 
        }
        if (Personnage.health == 0) {
            console.log('Explosiooon')
            break
              } 
        if (Personnage.health > 0 && trajet.feuxrestant == 0) {
            console.log(Personnage.name + ' est bien arrivé ! Il lui a fallu ' + trajet.changements + ' changement(s) pour arrivé sain et sauf')

        }

    } 
}
takeTaxi(Personnage, trajet)