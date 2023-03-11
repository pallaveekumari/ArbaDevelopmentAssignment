import React from 'react'

const CartPage = () => {

    const data=[

    ]

  return (
    <div>
        {data.map((el)=>{
            return (
                <div>
                    <button>-</button>
                    <h3>{el.qty}</h3>
                <button>+</button>
                </div>
            )
        })}
    </div>
  )
}

export default CartPage