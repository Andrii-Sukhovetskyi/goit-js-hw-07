const listCat = document.querySelector('#categories');

const itemCat = listCat.querySelectorAll(`.item`);

console.log(`Number of categories: ${itemCat.length}`);

itemCat.forEach(item => {

    const categoryTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryTitle}`);
    
    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Elements: ${elementsCount}`);
});
