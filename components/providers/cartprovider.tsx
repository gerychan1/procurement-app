"use client"

import React, { createContext, useContext, useState, type ReactNode } from "react"

interface Item {
  id: number
  name: string
  price: number
}

interface CartContextType {
  cart: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Item[]>([])

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

