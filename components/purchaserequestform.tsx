"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/cartprovider" // Updated import statement
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PurchaseRequestForm() {
  const [justification, setJustification] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const { cart, clearCart } = useCart()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the purchase request to a server
    console.log("Purchase request submitted:", { cart, justification })
    clearCart()
    setJustification("")
    setIsOpen(false)
    toast({
      title: "Purchase request submitted",
      description: "Your request has been sent for approval.",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-24 right-4 h-16 w-16 rounded-full shadow-lg" disabled={cart.length === 0}>
          Submit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Submit Purchase Request</DialogTitle>
            <DialogDescription>Please provide a justification for your purchase request.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Enter your justification here..."
              className="min-h-[100px]"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

