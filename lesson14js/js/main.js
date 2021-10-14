let form = document.querySelector('#form');
let palitra = document.querySelector('#palitra');

form.addEventListener('submit', event => {
    event.preventDefault();
    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;
    palitra.insertAdjacentHTML('beforeend', `
    <div class="color-item">
        <div class="colorbox" style="background-color: rgb(${red}, ${green}, ${blue});"></div>
        <color-text>RGB(${red}, ${green}, ${blue})</color-text>
    </div>
    `)
})