const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.childElementCount);

const itemEl = listEl.children;
for (let i = 0; i < itemEl.length; i += 1) {
    console.log('Category: ', itemEl[i].firstElementChild.textContent);
    console.log('Elements: ', itemEl[i].lastElementChild.children.length);
}


