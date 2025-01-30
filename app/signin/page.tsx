import SignInForm from "@/components/signinform"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Sign In</h1>
        <SignInForm />
      </div>
    </div>
  )
}

