import { Suspense } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import ItemList from "@/components/itemlist"
import Cart from "@/components/cart"
import PurchaseRequestForm from "@/components/purchaserequestform"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar className="lg:w-1/4" />
          <main className="lg:w-3/4">
            <Suspense fallback={<Loading />}>
              <ItemList />
            </Suspense>
          </main>
        </div>
      </div>
      <Cart />
      <PurchaseRequestForm />
    </div>
  )
}

