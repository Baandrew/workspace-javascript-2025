var messageEl = document.getElementById("message");

const showKey = (event) => {
    document.getElementById("lastkey").textContent = 'you hit' +event.key;
};
const showposition = (event) => {
    document.getElementById("charactersLeft".textContent = 'position  ( event.pageX +   + event.pageY)');
}
messageEl.addEventListener('keydown', showKey, false);
document.addEventListener('mousemove', showposition);