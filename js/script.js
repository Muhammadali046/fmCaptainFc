const products = {
  cartier: {
    name: 'Cartier',
    img: 'assets/images/product-1.png',
    price: 1300000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  audemars: {
    name: 'Audemars',
    img: 'assets/images/product-2.png',
    price: 1420000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  tag: {
    name: 'Tag',
    img: 'assets/images/product-3.png',
    price: 1120000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  duchen: {
    name: 'Duchen',
    img: 'assets/images/product-4.png',
    price: 950000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  rolex: {
    name: 'Rolex',
    img: 'assets/images/product-5.png',
    price: 2450000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  spikes: {
    name: 'Spikes',
    img: 'assets/images/product-6.png',
    price: 1450000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  pierrelannier: {
    name: 'Pierrelannier',
    img: 'assets/images/product-7.png',
    price: 1280000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  tiamo: {
    name: 'Tiamo',
    img: 'assets/images/product-8.png',
    price: 1000000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  tag2: {
    name: 'Tag2',
    img: 'assets/images/product-9.png',
    price: 1120000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  montblanc: {
    name: 'Montblanc',
    img: 'assets/images/product-10.png',
    price: 845000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  jaeger: {
    name: 'Jaeger',
    img: 'assets/images/product-11.png',
    price: 2450000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
  hockey: {
    name: 'Hockey',
    img: 'assets/images/product-12.png',
    price: 750000,
    count: 0,
    like: false,
    get totalPrice() {
      return this.price * this.count
    },
  },
}

const cartBtns = document.querySelectorAll('.cart')
const cartBtnIcon = document.querySelectorAll('.cart > img')
const likeBtns = document.querySelectorAll('.favourite')
const headerNavLinks = document.querySelectorAll('.header-nav-link')
const cartModal = document.querySelector('.carts')
const cartBtn = document.querySelector('.cart-open')
const cartClose = document.querySelector('.cart-modal-btn')
const cartBtnCount = document.querySelector('.header-cart-count')
const cartBtnChecklist = document.querySelector('.cart-modal-checklist')
const totalPriceCart = document.querySelector('.cart-modal-prices')
const likesModal = document.querySelector('.likes')
const likesBtn = document.querySelector('.likes-open')
const likesClose = document.querySelector('.likes-modal-btn')
const likesBtnCount = document.querySelector('.header-likes-count')
const likesChecklist = document.querySelector('.likes-modal-checklist')
const headerNavList = document.querySelector('.header-nav-lists')
const menuOpen = document.querySelector('.menu')
const menuClose = document.querySelector('.header-nav-close')
const productBtnCount = document.querySelector('.products-cart-count')

cartBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    PlusOrMinus(this)
  })
})

function PlusOrMinus(btn) {
  let parent = btn.closest('.products-card')
  let parentId = parent.getAttribute('id')
  products[parentId].count++

  carts()
}

function carts() {
  const productsArray = []
  for (const key in products) {
    let totalCount = 0
    const po = products[key]

    const productCard = document.querySelector(`#${po.name.toLowerCase()}`)
    const parentIndecator = productCard.querySelector('.products-card-count')

    if (po.count) {
      productsArray.push(po)
      cartBtnCount.classList.add('active')
      totalCount += po.count
      parentIndecator.classList.add('active')
      parentIndecator.innerHTML = po.count
    } else {
      parentIndecator.classList.remove('active')
      parentIndecator.innerHTML = 0
    }

    cartBtnCount.innerHTML = totalCount

  }

  cartBtnChecklist.innerHTML = ''

  for (let i = 0; i < productsArray.length; i++) {
    cartBtnChecklist.innerHTML += cardItemTot(productsArray[i])
  }

  const allCount = totalCountProduct()
  if (allCount) {
    cartBtnCount.classList.add('active')
  } else {
    cartBtnCount.classList.remove('active')
  }
  cartBtnCount.innerHTML = allCount

  totalPriceCart.innerHTML = totalSummProduct()
}

function totalSummProduct() {
  let total = 0
  for (const key in products) {
    total += products[key].totalPrice
  }
  return total + ' UZS'
}


function totalCountProduct() {
  let total = 0
  for (const key in products) {
    total += products[key].count
  }
  return total
}
function cardItemTot(productData) {
  const {
    name,
    totalPrice: price,
    img,
    count
  } = productData
  return `
        <div class="header__nav-product">
          <div class="header__nav-info">
              <img src="${img}" alt="" class="header__nav-productImage">
              <div class="header__nav-infoSub">
                  <p class="header__nav-infoName">${name}</p>
                  <p class="header__nav-infoPrice">${price}UZS</p>
              </div>
          </div>
          <div class="header__nav-option" id="${name.toLowerCase()}_card">
              <button class="header__nav-symbol fa-plus" data-symbol="+">+</button>
              <button class="header__nav-count">${count}</button>
              <button class="header__nav-symbol fa-minus" data-symbol="-">-</button>
          </div>
    </div>

        `
}

cartBtn.addEventListener('click', function () {
  cartModal.classList.add('active')
})

cartClose.addEventListener('click', function () {
  cartModal.classList.remove('active')
})

window.addEventListener('click', function (e) {
  const btn = e.target
  if (btn.classList.contains('header__nav-symbol')) {
    const attr = btn.getAttribute('data-symbol')
    const parent = btn.closest('.header__nav-option')
    if (parent) {
      const idProduct = parent.getAttribute('id').split('_')[0]
      if (attr == '-') {
        products[idProduct].count--
      } else {
        products[idProduct].count++
      }
      carts()
    }
  }
})

likeBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    PlusOrMinuss(this)
  })
})

function PlusOrMinuss(btn) {
  let parentt = btn.closest('.products-card')
  let parentIdd = parentt.getAttribute('id')
  if (products[parentIdd].like == true) {
    products[parentIdd].like = false
  }else{
    products[parentIdd].like = true
  }

  btn.classList.add('active')

  likes()
}

function likes() {
  const productsArray = []
  let totalCountt = 0
  for (const key in products) {
    const po = products[key]

    const productCard = document.querySelector(`#${po.name.toLowerCase()}`)
    const poLikeBtn = productCard.querySelector('.favourite')

    if (po.like) {
      productsArray.push(po)
      likesBtnCount.classList.add('active')
      totalCountt += po.like
      poLikeBtn.classList.add('active')
    } else {
      poLikeBtn.classList.remove('active')
    } 
    
  }
    if (likeBtns == false) {
    likesBtnCount.remove('active')
   }
  likesBtnCount.innerHTML = totalCountt

  likesChecklist.innerHTML = ''

  for (let i = 0; i < productsArray.length; i++) {
    likesChecklist.innerHTML += cardItemTotLikes(productsArray[i])
  }

  const allCountt = totalCountProductLikes()
  if (allCountt) {
    likesBtnCount.classList.add('active')
  } else {
    likesBtnCount.classList.remove('active')
  }
  likesBtnCount.innerHTML = allCountt

  
  

}

function totalCountProductLikes() {
  let total = 0
  for (const key in products) {
    if (products[key].like == true) {
     total++
    }
  }
  return total
}

function cardItemTotLikes(productDataa) {
  const {
    name,
    price,
    img,
  } = productDataa
  return `
   <div class="header__like-product">
          <div class="header__like-info">
              <img src="${img}" alt="" class="header__like-productImage">
              <div class="header__like-infoSub">
                  <p class="header__like-infoName">${name}</p>
                  <p class="header__nav-infoPrice">${price}UZS</p>
              </div>
                <div class="header__like-option" id="${name.toLowerCase()}_like">
              <button class="header__like-symbol fa-minus" data-symbol="-">-</button>
          </div>
          </div>
    </div>
      
        `
}

likesBtn.addEventListener('click', function () {
  likesModal.classList.add('active')
})

likesClose.addEventListener('click', function () {
  likesModal.classList.remove('active')
})

window.addEventListener('click', function (e) {
  const btn = e.target 
  if (btn.classList.contains('header__like-symbol')) {
    const parentt = btn.closest('.header__like-option')
    if (parentt) {
      const idProductt = parentt.getAttribute('id').split('_')[0]
      products[idProductt].like = false
    }
    likes()
  }
})









