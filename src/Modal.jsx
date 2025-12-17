import React from 'react'
import iconCheck from './assets/icon-order-confirmed.svg'

const Modal = ({ cartItems, handleStartNewOrder }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  )

  return (
    // Dark overlay - covers entire screen
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
      {/* Modal content - centered white box */}
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <img src={iconCheck} alt="" className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Order confirmed</h3>
        <p className="text-rose-500 mb-6">We hope you enjoy your food!</p>

        <div className="bg-rose-50 rounded-lg p-4 mb-6">
          {cartItems.map((cartItem, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-3 border-b border-rose-200 last:border-b-0"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={cartItem.image.thumbnail}
                  alt=""
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{cartItem.name}</div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-red font-semibold">
                      {cartItem.quantity}x
                    </span>
                    <span className="text-rose-500">
                      @ ${cartItem.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold">
                ${(cartItem.price * cartItem.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 pt-6">
            <span className="text-sm">Order Total</span>
            <span className="text-2xl font-bold">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>

              <button className="cursor-pointer w-full bg-red text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
              onClick={handleStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Modal
