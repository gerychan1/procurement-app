"use client"

import { useCart } from "@/components/providers/cartprovider"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Item {
  id: number
  name: string
  price: number
}

export default function AddToCartButton({ item }: { item: Item }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(item)
    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart} className="w-full">
      Add to Cart
    </Button>
  )
}

