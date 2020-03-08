import React, { useReducer } from 'react'



interface Cart {
    products: string[],
    shipping_value?: number;
}

type CartActionType = {
    type: 'ADD' | 'REMOVE'
}

const AppContext: React.FC = () => {
    const cart = useReducer((state: Cart, action: CartActionType) => {
        switch(action.type) {
                case 'ADD': return {
                    ...state,
                    products: [...state.products, 'OLaaaaa']
                }
                default: return state
            }
        }, {
            products: ['asd'],
            shipping_value: 0
        })
   
    return (
       <u>

       </u>
    )
}

export default AppContext