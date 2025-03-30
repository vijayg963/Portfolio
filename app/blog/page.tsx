import Link from 'next/link';
import { ArrowLeft, Clock, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function BlogTemplate() {
  const featuredPost = {
    title: 'Understanding the Basics of React Server Components',
    excerpt:
      'React Server Components represent a paradigm shift in how we build React applications. Learn the fundamentals and how to implement them in your Next.js projects.',
    date: 'March 15, 2025',
    author: {
      name: 'Alex Johnson',
      avatar: '/placeholder.png?height=40&width=40',
    },
    category: 'React',
    readTime: '8 min read',
    image: '/placeholder.png?height=400&width=800&text=Featured+Post',
  };

  const recentPosts = [
    {
      id: 1,
      title: 'Building Accessible Web Applications',
      excerpt:
        'Learn how to make your web applications accessible to all users, including those with disabilities.',
      date: 'March 10, 2025',
      author: {
        name: 'Jamie Smith',
        avatar: '/placeholder.png?height=40&width=40',
      },
      category: 'Accessibility',
      readTime: '6 min read',
      image: '/placeholder.png?height=200&width=300&text=Post+1',
    },
    {
      id: 2,
      title: "The Future of CSS: What's Coming in 2025",
      excerpt:
        'Explore the upcoming CSS features that will revolutionize web design in the coming year.',
      date: 'March 5, 2025',
      author: {
        name: 'Taylor Wilson',
        avatar: '/placeholder.png?height=40&width=40',
      },
      category: 'CSS',
      readTime: '5 min read',
      image: '/placeholder.png?height=200&width=300&text=Post+2',
    },
    {
      id: 3,
      title: 'Optimizing Next.js Applications for Performance',
      excerpt:
        'Practical tips and techniques to improve the performance of your Next.js applications.',
      date: 'February 28, 2025',
      author: {
        name: 'Jordan Lee',
        avatar: '/placeholder.png?height=40&width=40',
      },
      category: 'Performance',
      readTime: '7 min read',
      image: '/placeholder.png?height=200&width=300&text=Post+3',
    },
  ];

  const categories = [
    { name: 'React', count: 12 },
    { name: 'Next.js', count: 8 },
    { name: 'JavaScript', count: 15 },
    { name: 'CSS', count: 7 },
    { name: 'Accessibility', count: 4 },
    { name: 'Performance', count: 6 },
  ];

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center mb-8'>
          <Link href='/'>
            <Button variant='ghost' className='gap-2'>
              <ArrowLeft className='h-4 w-4' />
              Back
            </Button>
          </Link>
        </div>

        <header className='mb-12 text-center'>
          <h1 className='text-4xl font-bold mb-4'>The Developer Blog</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Insights, tutorials, and news about web development, programming,
            and technology.
          </p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          <div className='lg:col-span-2'>
            <div className='mb-8'>
              <h2 className='text-2xl font-bold mb-4'>Featured Post</h2>
              <Card className='overflow-hidden'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={featuredPost.image || '/placeholder.png'}
                    alt={featuredPost.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <CardHeader>
                  <div className='flex items-center gap-2 mb-2'>
                    <Badge variant='secondary'>{featuredPost.category}</Badge>
                    <span className='text-sm text-muted-foreground flex items-center gap-1'>
                      <Clock className='h-3 w-3' /> {featuredPost.readTime}
                    </span>
                  </div>
                  <CardTitle className='text-2xl'>
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className='text-base'>
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <Avatar className='h-8 w-8'>
                      <AvatarImage
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                      />
                      <AvatarFallback>
                        {featuredPost.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='text-sm'>
                      <p className='font-medium'>{featuredPost.author.name}</p>
                      <p className='text-muted-foreground'>
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                  <Button variant='ghost' size='sm'>
                    Read More <ChevronRight className='ml-1 h-4 w-4' />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Recent Posts</h2>
              <div className='grid gap-6'>
                {recentPosts.map((post) => (
                  <Card key={post.id} className='overflow-hidden'>
                    <div className='flex flex-col md:flex-row'>
                      <div className='md:w-1/3'>
                        <img
                          src={post.image || '/placeholder.png'}
                          alt={post.title}
                          className='w-full h-full object-cover aspect-video md:aspect-square'
                        />
                      </div>
                      <div className='md:w-2/3 p-6'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Badge variant='secondary'>{post.category}</Badge>
                          <span className='text-sm text-muted-foreground flex items-center gap-1'>
                            <Clock className='h-3 w-3' /> {post.readTime}
                          </span>
                        </div>
                        <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
                        <p className='text-muted-foreground mb-4'>
                          {post.excerpt}
                        </p>
                        <div className='flex justify-between items-center'>
                          <div className='flex items-center gap-2'>
                            <Avatar className='h-6 w-6'>
                              <AvatarImage
                                src={post.author.avatar}
                                alt={post.author.name}
                              />
                              <AvatarFallback>
                                {post.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className='text-sm'>{post.author.name}</span>
                            <span className='text-sm text-muted-foreground'>
                              •
                            </span>
                            <span className='text-sm text-muted-foreground'>
                              {post.date}
                            </span>
                          </div>
                          <Button variant='ghost' size='sm'>
                            Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className='mt-8 text-center'>
                <Button variant='outline'>View All Posts</Button>
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-col items-center text-center mb-4'>
                  <Avatar className='h-20 w-20 mb-4'>
                    <AvatarImage
                      src='/placeholder.png?height=80&width=80'
                      alt='Blog Author'
                    />
                    <AvatarFallback>BL</AvatarFallback>
                  </Avatar>
                  <h3 className='font-bold text-lg'>The Dev Team</h3>
                  <p className='text-sm text-muted-foreground'>
                    We&apos;re a team of developers sharing our knowledge and
                    experiences.
                  </p>
                </div>
                <Separator className='my-4' />
                <p className='text-sm text-muted-foreground'>
                  This blog is dedicated to sharing insights, tutorials, and
                  news about web development, programming, and technology. Join
                  us on this journey of continuous learning.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant='outline' className='w-full'>
                  Subscribe to Newsletter
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className='flex justify-between items-center'
                    >
                      <Link href='#' className='text-sm hover:underline'>
                        {category.name}
                      </Link>
                      <Badge variant='secondary'>{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='outline'>React</Badge>
                  <Badge variant='outline'>Next.js</Badge>
                  <Badge variant='outline'>JavaScript</Badge>
                  <Badge variant='outline'>TypeScript</Badge>
                  <Badge variant='outline'>Web Development</Badge>
                  <Badge variant='outline'>CSS</Badge>
                  <Badge variant='outline'>Tailwind</Badge>
                  <Badge variant='outline'>Performance</Badge>
                  <Badge variant='outline'>Accessibility</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
