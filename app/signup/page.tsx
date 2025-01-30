import SignUpForm from "@/components/signupform"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  )
}

