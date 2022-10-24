const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
// Consigli del giorno:
// > Ragioniamo come sempre a step.
// > Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
// > console.log() è nostro amico.
// > Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


// inzio
// stampiano i post nel nostro feed
const container= document.getElementById("container")
function stampa(){
    for(let i=0;i<posts.length;i++){
        const post = document.createElement("div")
        post.classList.add("post")
        const post__header = document.createElement("div")
        post__header.classList.add("post__header")
        const post_meta = document.createElement("div")
        post_meta.classList.add("post-meta")
        const post_meta__icon=document.createElement("div")
        post_meta__icon.classList.add("post-meta__icon")
        const post_meta__data = document.createElement("div")
        post_meta__data.classList.add("post-meta__data")
        const post_meta__author=document.createElement("div")
        post_meta__author.classList.add("post-meta__author")
        const post_meta__time=document.createElement("div")
        post_meta__time.classList.add("post-meta__time")
        const post__text=document.createElement("div")
        post__text.classList.add("post__text")
        const post__image=document.createElement("div")
        post__image.classList.add("post__image")
        const post__footer=document.createElement("div")
        post__footer.classList.add("post__footer")
        container.append(post)
        post.append(post__header)
        post__header.append(post_meta)
        post_meta__icon.innerHTML=`<img class="profile-pic" src=${posts[i].author.image} alt=${posts[i].author.name}> `
        console.log(post_meta__icon)
        post_meta.append(post_meta__icon)
        post_meta__author.innerHTML=posts[i].author.name
        post_meta__time.innerHTML=posts[i].created
        post_meta.append(post_meta__data)
        post_meta__data.append(post_meta__author)
        post_meta__data.append(post_meta__time)
        post__text.innerHTML=posts[i].content
        post.append(post__text)
        post__image.innerHTML=`<img src=${posts[i].media} alt=""> `
        post.append(post__image)
        post__footer.innerHTML=`<div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
        </div>
    </div>  `
        post.append(post__footer)
    }
}
stampa()