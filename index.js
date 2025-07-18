let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
    itemActive++;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

prev.onclick = function () {
    itemActive--;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');

    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    if (thumbnails[itemActive]) thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
