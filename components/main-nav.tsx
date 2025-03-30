import Link from "next/link"
import {ModeToggle} from "./mode-toggle"

export function MainNav() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Vijay Dev
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/templates/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/templates/ecommerce" className="text-sm font-medium transition-colors hover:text-primary">
              E-commerce
            </Link>
            {/* <Link href="/templates/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link> */}
            <Link href="/templates/landing" className="text-sm font-medium transition-colors hover:text-primary">
              Landing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

