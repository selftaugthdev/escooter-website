import Layout from '../../../components/Layout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// This would typically come from an API or database
const scooters = {
  dualtron: [
    { name: "Dualtron X", price: 5999, image: "/placeholder.svg?height=200&width=300" },
    { name: "Dualtron Thunder", price: 3999, image: "/placeholder.svg?height=200&width=300" },
    { name: "Dualtron Eagle Pro", price: 2299, image: "/placeholder.svg?height=200&width=300" },
  ],
  segway: [
    { name: "Ninebot Max", price: 799, image: "/placeholder.svg?height=200&width=300" },
    { name: "Ninebot ES4", price: 769, image: "/placeholder.svg?height=200&width=300" },
    { name: "Ninebot ES2", price: 589, image: "/placeholder.svg?height=200&width=300" },
  ],
  // ... other brands
}

export default function BrandPage({ params }: { params: { brandName: string } }) {
  const { brandName } = params
  const brandScooters = scooters[brandName as keyof typeof scooters] || []

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-center capitalize text-blue-800 dark:text-blue-300">{brandName} E-Scooters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandScooters.map((scooter) => (
          <Card key={scooter.name} className="flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">{scooter.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={scooter.image}
                alt={scooter.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-xl font-bold text-purple-600 dark:text-purple-400">${scooter.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
}