import React from 'react'
import emptyCartIllustration from './assets/illustration-empty-cart.svg'
import iconRemove from './assets/icon-remove-item.svg'
import iconCarbonNeutral from './assets/icon-carbon-neutral.svg'
const Cart = ({ cartItems, deleteCartItem }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  )
  return (
    <section className="bg-rose-50 rounded-md p-6 h-fit ">
      <h3 className="text-red font-bold text-xl mb-5">
        Your Cart ({totalItems})
      </h3>
      {cartItems.length === 0 ? (
        // Show empty state when NO items ✅
        <div className="mt-10 flex items-center flex-col">
          <img src={emptyCartIllustration} alt="" />
          <p className="text-rose-500 font-bold text-sm mt-5">
            Your added items will appear here
          </p>
        </div>
      ) : (
        // Show cart items when there ARE items ✅
        <div>
          {cartItems.map((item, i) => (
            <article
              key={i}
              className="flex justify-between items-center py-3 border-b border-rose-100 "
            >
              <div>
                <h4 className="font-semibold text-rose-900 mb-1">
                  {item.name}
                </h4>
                <div className="text-sm flex gap-3">
                  <span className="font-bold text-red">{item.quantity}x</span>
                  <span className="text-rose-400">@{item.price}</span>
                  <span className="text-rose-500 font-semibold">
                    {' '}
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteCartItem(item.name)}
                className="w-5 h-5 border border-rose-400 cursor-pointer rounded-full flex items-center justify-center hover:border-rose-900 transition"
              >
                <img src={iconRemove} alt="remove" className="w-3 h-3" />
              </button>
            </article>
          ))}
          <div className="flex justify-between items-center my-6">
            <span className=" text-rose-900 ">Order Total</span>
            <span className="font-bold text-rose-900 text-lg">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="rounded-md py-2 w-full text-rose-900/70 flex items-center gap-2 justify-center bg-rose-100 my-3 text-sm px-1">
            <img src={iconCarbonNeutral} alt="" />
            <p>
              This is a
              <span className="font-bold text-rose-900"> carbon-neutral</span>{' '}
              delivery
            </p>
          </div>
          <button className="text-rose-50 bg-red w-full rounded-full py-2 px-4 mt-4 cursor-pointer">
            Confirm Order
          </button>
        </div>
      )}
    </section>
  )
}

export default Cart
