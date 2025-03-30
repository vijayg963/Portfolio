import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const templates = [
    {
      id: "blog",
      title: "Blog Template",
      description: "A clean, modern blog template with featured posts, categories, and author profiles.",
      image: "/placeholder.svg?height=200&width=400&text=Blog+Template",
      features: ["Article layouts", "Category pages", "Author profiles", "Comment system"],
    },
    {
      id: "ecommerce",
      title: "E-commerce Template",
      description: "A complete e-commerce template with product listings, cart functionality, and checkout process.",
      image: "/placeholder.svg?height=200&width=400&text=E-commerce+Template",
      features: ["Product listings", "Shopping cart", "Checkout flow", "Product details"],
    },
    {
      id: "portfolio",
      title: "Portfolio Template",
      description:
        "Showcase your work with this elegant portfolio template featuring project galleries and skills sections.",
      image: "/placeholder.svg?height=200&width=400&text=Portfolio+Template",
      features: ["Project showcase", "Skills section", "About me", "Contact form"],
    },
    {
      id: "landing",
      title: "Landing Page Template",
      description:
        "Convert visitors with this high-impact landing page template featuring hero sections and testimonials.",
      image: "/placeholder.svg?height=200&width=400&text=Landing+Page+Template",
      features: ["Hero section", "Feature highlights", "Testimonials", "Call-to-action"],
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Next.js Multi-Template Starter</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from multiple pre-built templates for your Next.js application, each designed for specific use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={template.image || "/placeholder.svg"}
                alt={template.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {template.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/templates/${template.id}`} className="w-full">
                <Button className="w-full">
                  View Template <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">How to Use These Templates</h2>
          <p className="text-muted-foreground">Follow these steps to get started with your chosen template</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-card p-6 rounded-lg border">
            <div className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              <span>Choose a Template</span>
            </div>
            <p className="text-muted-foreground">
              Browse the available templates and select one that fits your project needs.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              <span>Customize Content</span>
            </div>
            <p className="text-muted-foreground">Replace placeholder content with your own text, images, and data.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="font-bold text-xl mb-2 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              <span>Extend Functionality</span>
            </div>
            <p className="text-muted-foreground">
              Add additional components or modify existing ones to meet your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

