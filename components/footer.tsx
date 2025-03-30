import Link from 'next/link';
import { Github, TwitterIcon } from 'lucide-react';
import { githubUrl, twitterUrl } from '@/lib/constant';

export function Footer() {
  return (
    <footer className='border-t'>
      <div className='container mx-auto px-4 py-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='text-lg font-medium mb-4'>Features</h3>
            <p className='text-muted-foreground text-sm'>
              A collection of web applications. that are built with similer technologies.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Applications</h3>
            <ul className='space-y-2 text-sm'>
              {[
                { name: 'Home', link: '/' },
                { name: 'Blog', link: '/blog' },
                { name: 'E-commerce', link: '/ecommerce' },
                { name: 'Landing', link: '/landing' },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Resources</h3>
            <ul className='space-y-2 text-sm'>
                {[
                { name: 'Documentation', link: '#' },
                { name: 'Components', link: '#' },
                { name: 'Examples', link: '#' },
                ].map((item, index) => (
                <li key={index}>
                  <Link
                  href={item.link}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                  {item.name}
                  </Link>
                </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-medium mb-4'>Connect</h3>
            <div className='flex items-center gap-4'>
              <Link
                href={githubUrl}
                target='_blank'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Link>
              <Link
                href={twitterUrl}
                target='_blank'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <TwitterIcon className='size-5'/>
                <span className='sr-only'>Twitter</span>
              </Link>     
            </div>
          </div>
        </div>
        <div className='mt-8 pt-6 border-t text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} Vijay Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
