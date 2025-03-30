import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium mb-4">Next Templates</h3>
            <p className="text-muted-foreground text-sm">
              A collection of customizable templates for your Next.js applications.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Templates</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/templates/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog Template
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/ecommerce"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  E-commerce Template
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio Template
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/landing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Landing Page Template
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Next Templates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

