import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


const CardTotals = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)
    return (
        <>
            

            <div className="space-y-4 mt-6">

                <div className="flex justify-between">
                    <span className="text-neutral-500">
                        Subtotal
                    </span>
                    <span>
                        {currency} {getCartAmount()}.00

                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-neutral-500">
                        Shipping Fee
                    </span>
                    <span>
                        {currency}
                        {delivery_fee}
                    </span>
                </div>

                <hr className="border-neutral-200" />

                <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>
                        {currency}

                        {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
                    </span>
                </div>

            </div>
        </>




    )
}

export default CardTotals
