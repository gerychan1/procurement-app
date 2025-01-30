import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AddToCartButton from "@/components/AddToCartButton"

interface Item {
  id: number
  name: string
  price: number
  category: string
}

async function getItems(): Promise<Item[]> {
  // In a real app, this would be an API call
  return [
    { id: 1, name: "Ergonomic Chair", price: 299.99, category: "Furniture" },
    { id: 2, name: "Wireless Mouse", price: 49.99, category: "Electronics" },
    { id: 3, name: "Notebook Set", price: 24.99, category: "Office Supplies" },
    { id: 4, name: "Standing Desk", price: 499.99, category: "Furniture" },
    { id: 5, name: "Wireless Keyboard", price: 79.99, category: "Electronics" },
  ]
}

export default async function ItemList() {
  const items = await getItems()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-4">${item.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">Category: {item.category}</p>
            <AddToCartButton item={item} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

