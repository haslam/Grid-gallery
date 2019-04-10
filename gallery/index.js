const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="https://source.unsplash.com/300x300/?${randomWord()},${randomWord()}">
      <div class="item__overlay">
        <button>View &#x1F408; &#x1F339; </button>
      </div>
    </div>
  `;
}
//https://source.unsplash.com/1600x900/?nature,water

function randomWord() {
  const keywords = ['black cat', 'ocean', 'lady', 'white cat', 'guiter', 'angel', 'Ottawa', 'love', 'beautiful', 'grace'];
  // generate random number from 0 - array Max
  const randIndex = Math.floor(Math.random() * Math.floor(keywords.length - 1));
  return keywords[randIndex];
}

function randomNumber(limit) {
  // genarate random numbers
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
  console.log(src);
}

const close = () => {
 overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

const html = digits.map(generateHTML).join('');

gallery.innerHTML = html;

const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);