import React from "react";
import cartIcon from "./assets/icon-add-to-cart.svg";
import decreamentIcon from "./assets/icon-decrement-quantity.svg";
import increamentIcon from "./assets/icon-increment-quantity.svg";
const Dessert = ({
  imageMobile,
  imageDesktop,
  imageTablet,
  dessertCategory,
  dessertName,
  dessertPrice,
  onAddToCart,
  inCart,
  quantity,
  onIncreament,
  onDecreament,
}) => {
  return (
    <article>
      <div className="relative w-fit mb-8">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageDesktop} />
          <source media="(min-width: 640px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            alt=""
            className={`w-full min-[724px]:w-55 object-cover ${
              inCart ? 'ring-2 ring-red' : ''
            } rounded-xl`}
          />
        </picture>{' '}
        {inCart ? (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-red rounded-full border inline-flex font-semibold text-sm text-rose-50 py-1.5 px-5 justify-between items-center w-32 whitespace-nowrap transition-all duration-300 cursor-pointer">
            <button className="w-5 h-5 rounded-full border border-rose-50 flex items-center justify-center  hover:text-red transition-colors cursor-pointer">
              <img
                src={decreamentIcon}
                alt=""
                onClick={onDecreament}
                className="w-2.5 h-2.5"
              />
            </button>

            <span className="flex-1 text-center">{quantity}</span>

            <button
              className="w-5 h-5 rounded-full border border-rose-50 flex items-center justify-center  hover:text-red transition-colors cursor-pointer"
              onClick={onIncreament}
            >
              <img src={increamentIcon} alt="" className="w-2.5 h-2.5" />
            </button>
          </div>
        ) : (
          <button
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-rose-50 rounded-full border border-rose-500 inline-flex font-semibold text-sm text-rose-900 py-1.5 px-7 justify-center items-center gap-1 whitespace-nowrap transition-all duration-300 hover:border-red hover:text-red cursor-pointer"
            onClick={onAddToCart}
          >
            <img src={cartIcon} alt="" />
            Add to Cart
          </button>
        )}
      </div>
      <div className="flex text-sm flex-col mb-7">
        <span className=" text-rose-500">{dessertCategory}</span>
        <h4 className="font-semibold text-rose-900 ">{dessertName}</h4>
        <p className="text-red font-semibold ">${dessertPrice.toFixed(2)}</p>
      </div>
    </article>
  )
};

export default Dessert;
