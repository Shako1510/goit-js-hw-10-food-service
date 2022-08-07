import menu from './menu.json'

// console.log(menu)

const containerRef = document.querySelector('.js-menu')
const checkBoxRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body')

checkBoxRef.addEventListener('change', onChengeTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

if (localStorage.getItem('Thema') === 'dark-theme') {
    console.log('темна');
    checkBoxRef.checked = true
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
} else {
    console.log('світла');
    checkBoxRef.checked = false
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)

}




function createMarkup() {

    // const [image, name, description, price, ingredients] = menu



    return menu.map(item => {

        const ingredientsList = item.ingredients.map(ingredient =>
            `<li class="tag-list__item">${ingredient}</li>`).join('')

        return (`
    <li class="menu__item">
      <article class="card">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="card__image"
        />
        <div class="card__content">
          <h2 class="card__name">${item.name}</h2>
          <p class="card__price">
            <i class="material-icons"> monetization_on </i>
            ${item.price}
          </p>
    
          <p class="card__descr">
            ${item.description}
          </p>
    
          <ul class="tag-list">
            ${ingredientsList}
          </ul>
        </div>
    
        <button class="card__button button">
          <i class="material-icons button__icon"> shopping_cart </i>
          В корзину
        </button>
      </article>
    </li>
    `
        )

    }).join('')


}

containerRef.insertAdjacentHTML("afterbegin", createMarkup())




function onChengeTheme(evt) {
    // console.log(evt.target.checked)



    if (evt.target.checked) {
        localStorage.setItem('Thema', 'dark-theme')
        bodyRef.classList.remove(Theme.LIGHT)
        bodyRef.classList.add(Theme.DARK)
    } else {
        localStorage.setItem('Thema', 'light-theme')
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
    }

}