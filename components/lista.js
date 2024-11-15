const toggleButton = document.getElementById('toggle-button');
const expandableList = document.getElementById('expandable-list');

console.log(toggleButton)
toggleButton.addEventListener('click', () => {
    console.log('test')
    if (expandableList.style.display === 'none' || expandableList.style.display === '') {
        expandableList.style.display = 'block';
    } else {
        expandableList.style.display = 'none';
    }
});