const poscardcontainer = document.getElementById('postcard-container');
const body = document.querySelector('body');
const greencard = document.getElementById('greencard');

poscardcontainer.addEventListener('click',()=>{
    poscardcontainer.classList.add('start');
    boookcontainer.classList.add('card');
    greencard.style.display = "none";
});

const boookcontainer = document.getElementById('book-container');
const card = document.getElementById('card');
const close = document.getElementById('close');

card.addEventListener('click',()=>{
    boookcontainer.classList.toggle('active');


});

close.addEventListener('click',()=>{
    poscardcontainer.classList.remove('start');
    boookcontainer.classList.remove('card');
    greencard.style.display = "block";
})

// -----------for get start----------
const troll = document.getElementById('troll');

const gscontainer = document.getElementById('getstart-container');

const btn = document.getElementById('getstart');

const  audio = document.getElementById('audio');

btn.addEventListener('click',all);

function all(){
    audio.play();
    gscontainer.style.display = "none";
    troll.style.display = "flex";
    body.classList.add('start');
}

setTimeout(()=>{
    troll.style.display = "none";
},3000)






