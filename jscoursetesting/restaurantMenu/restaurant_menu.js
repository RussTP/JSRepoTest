const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$15.00', 'Oatmeal -$5', 'Frittata -$10'];
const mainCourseMenu = ['Steak -$20', 'Pasta -$12', 'Burger -$15', 'Salmon -$14'];
const dessertMenu = ['Cake -$10', 'ice Cream -$5', 'Pudding -$5', 'Fruit Salad -$8'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
//Array defining method (iteration)
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

    //For Loop iteration
    let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;