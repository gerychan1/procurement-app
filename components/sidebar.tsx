import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = ["Office Supplies", "Electronics", "Furniture", "Software", "Services"]

export default function Sidebar({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button key={category} variant="ghost" className="w-full justify-start">
              {category}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

