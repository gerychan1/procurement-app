"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/cartprovider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, X } from "lucide-react"

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg">
          <ShoppingCart className="h-6 w-6" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Review the items in your cart before submitting your purchase request.</SheetDescription>
        </SheetHeader>
        {cart.length === 0 ? (
          <p className="text-center py-4">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 mt-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
            </div>
            <Button onClick={clearCart} variant="destructive" className="w-full">
              Clear Cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

