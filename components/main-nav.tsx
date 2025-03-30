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
            {[
              { name: "Blog", link: "/blog" },
              { name: "E-commerce", link: "/ecommerce" },
              { name: "Landing", link: "/landing" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

