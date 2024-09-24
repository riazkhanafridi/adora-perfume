import Button from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";


function CartPage() { 
  return (
    <div className="bg-secondary flex flex-col items-center  w-full ">
  <div className=" flex justify-center   w-[100%] mt-8 ">
  <p className="text-primary text-2xl font-semibold flex items-center gap-2 ">YOUR CART<FiShoppingCart/>IS EMPTY</p>
  </div>
        <div className="flex justify-end w-full pr-8">
            <Button className="flex items-center px-4 mt-8 ">continue to shopping<FiShoppingCart/> </Button>
        </div>
    </div>
  )
}

export default CartPage