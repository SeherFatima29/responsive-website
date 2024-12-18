// Filter roses in the gallery based on search input
const searchInput = document.getElementById('searchInput');
const galleryContainer = document.getElementById('galleryContainer');
const galleryItems = galleryContainer.getElementsByClassName('gallery-item');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    for (const item of galleryItems) {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
});
