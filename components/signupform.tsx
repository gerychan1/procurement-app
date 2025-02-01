"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function SignUpForm() {  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }
    // Here you would typically call your API to create a new user
    // For now, we'll just simulate a successful signup
    console.log("Signing up with:", email, password)
    toast({
      title: "Success",
      description: "Account created successfully",
    })
    router.push("/signin")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
      <div className="text-center">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  )
}

