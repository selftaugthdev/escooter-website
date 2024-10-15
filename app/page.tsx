import Layout from './components/Layout'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const brands = [
  { name: "Dualtron", image: "/dualtron-x-limited.webp", height: 200, width: 300 },
  { name: "Segway", image: "/segway-ninebot.png", height: 200, width: 300 },
  { name: "Xiaomi", image: "/xiaomi.jpg", height: 200, width: 300 },
  { name: "Kaabo", image: "/kaabo-wolf.png", height: 200, width: 300 },
  { name: "Apollo", image: "/apollo-pro.webp", height: 200, width: 300 },
  { name: "Inokim", image: "/inokim.jpg", height: 200, width: 300 },
];

/* export default function HomePage() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-300">Choose Your E-Scooter Brand</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Card key={brand.name} className="flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">{brand.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={brand.image}
                alt={`${brand.name} e-scooters`}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Link href={`/brand/${brand.name.toLowerCase()}`} className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300">
                  View {brand.name} Scooters
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
} */

  export default function HomePage() {
    return (
      <Layout>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-300">Choose An E-Scooter Brand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="flex flex-col bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">{brand.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="w-full h-72 aspect-w-4 aspect-h-3"> 
                  <img
                    src={brand.image}
                    alt={`${brand.name} e-scooters`}
                    className="object-cover w-full h-full rounded-md"  
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/brand/${brand.name.toLowerCase()}`} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300">
                    View All {brand.name} Scooters
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Layout>
    );
  }