import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, Search, Filter, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EcommerceTemplate() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300&text=Headphones",
      badge: "New",
    },
    {
      id: 2,
      name: "Ultra-Slim Laptop Pro",
      price: 1299.99,
      rating: 4.9,
      reviews: 86,
      image: "/placeholder.svg?height=300&width=300&text=Laptop",
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Smart Watch Series X",
      price: 349.99,
      rating: 4.7,
      reviews: 215,
      image: "/placeholder.svg?height=300&width=300&text=Watch",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      price: 49.99,
      rating: 4.5,
      reviews: 178,
      image: "/placeholder.svg?height=300&width=300&text=Charger",
    },
  ]

  const categories = [
    "Electronics",
    "Computers",
    "Smart Home",
    "Wearables",
    "Accessories",
    "Audio",
    "Cameras",
    "Gaming",
  ]

  const brands = ["TechPro", "UltraGear", "SmartLife", "NextGen", "PowerTech", "InnovateTech"]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Templates
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline">Customize Template</Button>
            <Button>Use This Template</Button>
          </div>
        </div>

        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold">TechStore</h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8" />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
          <nav className="flex overflow-auto pb-2">
            <ul className="flex items-center gap-6">
              {categories.map((category) => (
                <li key={category}>
                  <Link href="#" className="text-sm font-medium whitespace-nowrap hover:text-primary">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="hidden lg:block space-y-6">
            <div>
              <h3 className="font-medium mb-4 flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </h3>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="category">
                  <AccordionTrigger className="text-sm">Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input type="checkbox" id={`category-${category}`} className="mr-2" />
                          <label htmlFor={`category-${category}`} className="text-sm">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="brand">
                  <AccordionTrigger className="text-sm">Brands</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center">
                          <input type="checkbox" id={`brand-${brand}`} className="mr-2" />
                          <label htmlFor={`brand-${brand}`} className="text-sm">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price">
                  <AccordionTrigger className="text-sm">Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <input type="number" placeholder="Min" className="w-20 p-2 text-sm border rounded" />
                        <span className="text-sm">to</span>
                        <input type="number" placeholder="Max" className="w-20 p-2 text-sm border rounded" />
                      </div>
                      <Button size="sm" className="w-full">
                        Apply
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rating">
                  <AccordionTrigger className="text-sm">Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
                          <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                            {Array(rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            {Array(5 - rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-muted-foreground" />
                              ))}
                            <span className="ml-1">& Up</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium mb-2">Popular Products</h3>
              <div className="space-y-4">
                {featuredProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex gap-2">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2">{product.name}</h4>
                      <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=1200&text=Special+Offers"
                  alt="Special Offers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
                  <h2 className="text-white text-3xl font-bold mb-2">Summer Sale</h2>
                  <p className="text-white/80 mb-4 max-w-md">
                    Get up to 40% off on selected electronics and accessories. Limited time offer.
                  </p>
                  <Button className="w-fit">Shop Now</Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.75"
                        y="0.75"
                        width="13.5"
                        height="13.5"
                        rx="1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Button>
                  <Separator orientation="vertical" className="h-6" />
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.75"
                        y="0.75"
                        width="5.5"
                        height="5.5"
                        rx="1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="8.75"
                        y="0.75"
                        width="5.5"
                        height="5.5"
                        rx="1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="0.75"
                        y="8.75"
                        width="5.5"
                        height="5.5"
                        rx="1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="8.75"
                        y="8.75"
                        width="5.5"
                        height="5.5"
                        rx="1.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                    {product.badge && <Badge className="absolute top-2 right-2">{product.badge}</Badge>}
                    <Button variant="secondary" size="icon" className="absolute top-2 left-2 h-8 w-8 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">View All Products</Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 4).map((category) => (
              <div key={category} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=200&width=200&text=${category}`}
                  alt={category}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 bg-muted p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">Get the latest updates on new products and special sales</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

