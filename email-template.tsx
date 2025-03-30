"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Image, Link2, Send } from "lucide-react"

export default function EmailTemplate() {
  const [emailContent, setEmailContent] = useState({
    subject: "Welcome to Our Newsletter",
    headerImage: "/placeholder.svg?height=200&width=600",
    heading: "Welcome to Our Newsletter",
    content:
      "Thank you for subscribing to our newsletter. We're excited to share our latest updates and news with you.",
    ctaText: "Learn More",
    ctaLink: "https://example.com",
    footerText: "© 2025 Your Company. All rights reserved.",
    unsubscribeLink: "https://example.com/unsubscribe",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailContent((prev) => ({ ...prev, [name]: value }))
  }

  const EmailPreview = () => (
    <div className="border rounded-md p-4 max-w-[600px] mx-auto bg-white">
      <div className="text-center mb-4">
        <img
          src={emailContent.headerImage || "/placeholder.svg"}
          alt="Header"
          className="w-full max-h-[200px] object-cover rounded-t-md"
        />
      </div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{emailContent.heading}</h1>
        <div className="text-gray-600 mb-6 whitespace-pre-line">{emailContent.content}</div>
        <a
          href={emailContent.ctaLink}
          className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium"
        >
          {emailContent.ctaText}
        </a>
      </div>
      <div className="text-center text-gray-500 text-sm border-t pt-4">
        <p>{emailContent.footerText}</p>
        <p className="mt-2">
          <a href={emailContent.unsubscribeLink} className="text-blue-500 underline">
            Unsubscribe
          </a>
        </p>
      </div>
    </div>
  )

  const getHtmlCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailContent.subject}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header img {
      max-width: 100%;
      height: auto;
    }
    .content {
      text-align: center;
      margin-bottom: 30px;
    }
    .content h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .content p {
      margin-bottom: 25px;
    }
    .cta {
      display: inline-block;
      background-color: #4f46e5;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
    }
    .footer {
      text-align: center;
      color: #777;
      font-size: 14px;
      border-top: 1px solid #eee;
      padding-top: 20px;
    }
    .footer a {
      color: #4f46e5;
      text-decoration: underline;
    }
    @media only screen and (max-width: 480px) {
      .container {
        padding: 10px;
      }
      .content h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${emailContent.headerImage}" alt="Header Image">
    </div>
    <div class="content">
      <h1>${emailContent.heading}</h1>
      <p>${emailContent.content.replace(/\n/g, "<br>")}</p>
      <a href="${emailContent.ctaLink}" class="cta">${emailContent.ctaText}</a>
    </div>
    <div class="footer">
      <p>${emailContent.footerText}</p>
      <p><a href="${emailContent.unsubscribeLink}">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Email Template Builder</h1>

      <Tabs defaultValue="editor">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">HTML Code</TabsTrigger>
        </TabsList>

        <TabsContent value="editor">
          <Card>
            <CardHeader>
              <CardTitle>Email Content</CardTitle>
              <CardDescription>Customize your email template content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Subject
                </Label>
                <Input id="subject" name="subject" value={emailContent.subject} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headerImage" className="flex items-center gap-2">
                  <Image className="h-4 w-4" /> Header Image URL
                </Label>
                <Input id="headerImage" name="headerImage" value={emailContent.headerImage} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heading">Heading</Label>
                <Input id="heading" name="heading" value={emailContent.heading} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" rows={5} value={emailContent.content} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ctaText">CTA Button Text</Label>
                  <Input id="ctaText" name="ctaText" value={emailContent.ctaText} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ctaLink" className="flex items-center gap-2">
                    <Link2 className="h-4 w-4" /> CTA Link
                  </Label>
                  <Input id="ctaLink" name="ctaLink" value={emailContent.ctaLink} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="footerText">Footer Text</Label>
                <Input id="footerText" name="footerText" value={emailContent.footerText} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="unsubscribeLink" className="flex items-center gap-2">
                  <Link2 className="h-4 w-4" /> Unsubscribe Link
                </Label>
                <Input
                  id="unsubscribeLink"
                  name="unsubscribeLink"
                  value={emailContent.unsubscribeLink}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Email Preview</CardTitle>
              <CardDescription>Preview how your email will look</CardDescription>
            </CardHeader>
            <CardContent>
              <EmailPreview />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>HTML Code</CardTitle>
              <CardDescription>Copy this HTML code to use in your email service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">{getHtmlCode()}</pre>
                <Button
                  className="absolute top-2 right-2"
                  variant="outline"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(getHtmlCode())}
                >
                  Copy
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => alert("This would send a test email in a real application")}>
                <Send className="mr-2 h-4 w-4" /> Send Test Email
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

