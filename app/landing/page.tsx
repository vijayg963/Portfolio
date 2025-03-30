import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LandingTemplate() {
  const features = [
    {
      title: 'Intuitive Interface',
      description:
        'Our user-friendly interface makes it easy to navigate and find what you need quickly.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <rect width='18' height='18' x='3' y='3' rx='2' />
          <path d='M7 7h10' />
          <path d='M7 12h10' />
          <path d='M7 17h10' />
        </svg>
      ),
    },
    {
      title: 'Powerful Analytics',
      description:
        'Gain valuable insights with our comprehensive analytics and reporting tools.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <path d='M3 3v18h18' />
          <path d='m19 9-5 5-4-4-3 3' />
        </svg>
      ),
    },
    {
      title: 'Seamless Integration',
      description:
        'Easily integrate with your existing tools and workflows for maximum efficiency.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
          <path d='M3.29 7 12 12l8.71-5' />
          <path d='M12 22V12' />
        </svg>
      ),
    },
    {
      title: 'Advanced Security',
      description:
        'Rest easy knowing your data is protected with our enterprise-grade security measures.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
          <path d='M7 11V7a5 5 0 0 1 10 0v4' />
        </svg>
      ),
    },
    {
      title: '24/7 Support',
      description:
        'Our dedicated support team is always available to help you with any questions or issues.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
      ),
    },
    {
      title: 'Regular Updates',
      description:
        'Stay ahead with continuous improvements and new features delivered regularly.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-10 w-10 text-primary'
        >
          <path d='M21 2v6h-6' />
          <path d='M3 12a9 9 0 0 1 15-6.7L21 8' />
          <path d='M3 22v-6h6' />
          <path d='M21 12a9 9 0 0 1-15 6.7L3 16' />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        'This product has completely transformed how our team works. The efficiency gains have been remarkable.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      avatar: '/placeholder.png?height=60&width=60',
    },
    {
      quote:
        "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features.",
      author: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      avatar: '/placeholder.png?height=60&width=60',
    },
    {
      quote:
        'The customer support is exceptional. Any questions we had were answered promptly and thoroughly.',
      author: 'Emily Rodriguez',
      role: 'Operations Director, GrowthInc',
      avatar: '/placeholder.png?height=60&width=60',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        '24-hour support response time',
        '1 team member',
        '5GB storage',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        '4-hour support response time',
        '10 team members',
        '50GB storage',
        'Custom integrations',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited everything',
        'Premium analytics',
        '1-hour support response time',
        'Unlimited team members',
        '500GB storage',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'How does the pricing work?',
      answer:
        'Our pricing is based on a monthly subscription model. You can choose from our Starter, Professional, or Enterprise plans depending on your needs. We also offer annual subscriptions at a discounted rate.',
    },
    {
      question: 'Can I change plans later?',
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle.",
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial for all our plans. No credit card is required to start your trial.',
    },
    {
      question: 'How secure is my data?',
      answer:
        'We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, you can request a full refund.",
    },
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

        <section className='py-12 md:py-20'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
                Streamline Your Workflow with Our Platform
              </h1>
              <p className='text-xl text-muted-foreground mb-8'>
                The all-in-one solution for teams to collaborate, manage
                projects, and boost productivity.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button size='lg' className='gap-2'>
                  Get Started <ArrowRight className='h-4 w-4' />
                </Button>
                <Button size='lg' variant='outline' className='gap-2'>
                  Watch Demo <ExternalLink className='h-4 w-4' />
                </Button>
              </div>
              <div className='mt-8 flex items-center gap-2 text-sm text-muted-foreground'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-4 w-4 text-primary'
                >
                  <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                  <path d='m9 12 2 2 4-4' />
                </svg>
                <span>No credit card required</span>
                <span className='mx-2'>•</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-4 w-4 text-primary'
                >
                  <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                  <path d='m9 12 2 2 4-4' />
                </svg>
                <span>14-day free trial</span>
                <span className='mx-2'>•</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-4 w-4 text-primary'
                >
                  <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                  <path d='m9 12 2 2 4-4' />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-primary-foreground/5 blur-3xl rounded-3xl'></div>
              <img
                src='/placeholder.png?height=600&width=600&text=Platform+Screenshot'
                alt='Platform Screenshot'
                className='w-full rounded-lg border shadow-lg'
              />
            </div>
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              Trusted by Industry Leaders
            </h2>
            <p className='text-xl text-muted-foreground'>
              Join thousands of companies using our platform to improve their
              workflow
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
              >
                <img
                  src={`/placeholder.png?height=40&width=120&text=Company+${i}`}
                  alt={`Company ${i}`}
                  className='h-8 md:h-10'
                />
              </div>
            ))}
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Powerful Features</h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Everything you need to manage your projects and boost productivity
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card key={index} className='border bg-card'>
                <CardHeader>
                  <div className='mb-4'>{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='py-12 md:py-20 relative overflow-hidden'>
          <div className='absolute -z-10 inset-0 bg-muted rounded-3xl'></div>
          <div className='relative'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                Our simple three-step process to transform your workflow
              </p>
            </div>
            <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-2'>Sign Up</h3>
                <p className='text-muted-foreground'>
                  Create your account and set up your team in minutes. No
                  technical knowledge required.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-2'>Import Data</h3>
                <p className='text-muted-foreground'>
                  Easily import your existing data or start fresh with our
                  intuitive templates.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-2'>Collaborate</h3>
                <p className='text-muted-foreground'>
                  Invite your team members and start collaborating in real-time
                  on your projects.
                </p>
              </div>
            </div>
            <div className='mt-12 text-center'>
              <Button size='lg'>Get Started Now</Button>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>What Our Customers Say</h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Don&apos;t just take our word for it - hear from some of our
              satisfied customers
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className='bg-muted/50'>
                <CardContent className='pt-6'>
                  <div className='mb-4'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5 inline-block text-yellow-500'
                      >
                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                      </svg>
                    ))}
                  </div>
                  <p className='italic mb-6'>{testimonial.quote}</p>
                  <div className='flex items-center'>
                    <img
                      src={testimonial.avatar || '/placeholder.png'}
                      alt={testimonial.author}
                      className='w-12 h-12 rounded-full mr-4'
                    />
                    <div>
                      <p className='font-medium'>{testimonial.author}</p>
                      <p className='text-sm text-muted-foreground'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Pricing Plans</h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium'>
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className='mt-4'>
                    <span className='text-4xl font-bold'>{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className='text-muted-foreground ml-2'>/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center'>
                        <Check className='h-5 w-5 text-primary mr-2 flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className='w-full'
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className='mt-12 text-center'>
            <p className='text-muted-foreground mb-4'>
              All plans include a 14-day free trial. No credit card required.
            </p>
            <Link
              href='#'
              className='text-primary hover:underline inline-flex items-center'
            >
              View full pricing details{' '}
              <ChevronRight className='h-4 w-4 ml-1' />
            </Link>
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Find answers to common questions about our platform
            </p>
          </div>
          <div className='max-w-3xl mx-auto'>
            <Tabs defaultValue='all' className='mb-8'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='pricing'>Pricing</TabsTrigger>
                <TabsTrigger value='product'>Product</TabsTrigger>
              </TabsList>
              <TabsContent value='all' className='mt-6'>
                <div className='space-y-4'>
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className='text-lg'>
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-muted-foreground'>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value='pricing' className='mt-6'>
                <div className='space-y-4'>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className='text-lg'>
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-muted-foreground'>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value='product' className='mt-6'>
                <div className='space-y-4'>
                  {faqs.slice(3, 5).map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className='text-lg'>
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className='text-muted-foreground'>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className='text-center'>
              <p className='mb-4'>Still have questions?</p>
              <Button>Contact Support</Button>
            </div>
          </div>
        </section>

        <section className='py-12 md:py-20'>
          <div className='bg-primary text-primary-foreground rounded-3xl p-8 md:p-12'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h2 className='text-3xl font-bold mb-4'>
                  Ready to get started?
                </h2>
                <p className='text-xl opacity-80 mb-6'>
                  Transform your workflow today with our all-in-one platform.
                  Start your free trial now.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    size='lg'
                    className='bg-white text-primary hover:bg-white/90'
                  >
                    Get Started
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='bg-transparent border-white text-white hover:bg-white/10'
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className='hidden md:block'>
                <img
                  src='/placeholder.png?height=300&width=500&text=Dashboard+Preview'
                  alt='Dashboard Preview'
                  className='rounded-lg shadow-lg'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
