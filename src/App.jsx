import React, { useState } from 'react'
import dataJson from '../data.json'
import Dessert from './Dessert'
import Cart from './Cart'
const App = () => {
  const [data, setData] = useState(dataJson)
  const [cart, setCart] = useState([])
  const addToCart = dessert => {
    setCart([...cart, { ...dessert, quantity: 1 }])
  }

  const getCartItem = dessertName => {
    return cart.find(item => item.name === dessertName)
  }
  const deleteCartItem = dessertName => {
    setCart(cart.filter(item => item.name !== dessertName))
  }
  const increaseQuantity = dessertName => {
    setCart(
      cart.map(item =>
        item.name === dessertName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }
  const decreaseQuantity = dessertName => {
    setCart(
      cart
        .map(item =>
          item.name === dessertName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }
  return (
    <div className="bg-rose-100 min-h-screen">
      <div className="max-w-3xl min-[1300px]:max-w-6xl mx-auto grid min-[1300px]:grid-cols-[2fr_1fr] p-9 gap-7">
        <div>
          <h1 className="font-bold text-3xl text-rose-900 mb-5">Desserts</h1>
          <section className="grid grid-cols-1 min-[550px]:grid-cols-2 min-[724px]:grid-cols-3 gap-2">
            {data.map((dessert, i) => {
              const cartItem = getCartItem(dessert.name)

              return (
                <Dessert
                  key={i}
                  imageDesktop={dessert.image.desktop}
                  imageTablet={dessert.image.tablet}
                  imageMobile={dessert.image.mobile}
                  dessertCategory={dessert.category}
                  dessertName={dessert.name}
                  dessertPrice={dessert.price}
                  onAddToCart={() => addToCart(dessert)}
                  inCart={!!cartItem}
                  quantity={cartItem?.quantity || 0}
                  onDecreament={() => decreaseQuantity(dessert.name)}
                  onIncreament={()=> increaseQuantity(dessert.name)}
                />
              )
            })}
          </section>
        </div>
        <Cart cartItems={cart} deleteCartItem={deleteCartItem}/>
      </div>
    </div>
  )
}

export default App
