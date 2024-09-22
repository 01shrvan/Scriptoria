"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, Code, Feather, Mail } from 'lucide-react'

export default function AboutPage() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your server
        console.log('Submitted email:', email)
        // Reset the input field
        setEmail('')
        // You could also show a success message to the user
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                    About Scriptoria
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
                                    Empowering minds through curated, Markdown-powered content.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form onSubmit={handleSubmit} className="flex space-x-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-grow bg-white/10 text-white placeholder-gray-400"
                                        required
                                    />
                                    <Button type="submit" className="bg-white text-black hover:bg-white/90">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-gray-400">Stay updated with our latest articles and insights.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="space-y-2 transition-all duration-200 ease-in-out hover:transform hover:scale-105">
                                <BookOpen className="h-8 w-8 text-white" />
                                <h3 className="text-2xl font-bold">Curated Content</h3>
                                <p className="text-gray-400">
                                    Discover handpicked articles that inspire, inform, and ignite curiosity.
                                </p>
                            </div>
                            <div className="space-y-2 transition-all duration-200 ease-in-out hover:transform hover:scale-105">
                                <Code className="h-8 w-8 text-white" />
                                <h3 className="text-2xl font-bold">Markdown Powered</h3>
                                <p className="text-gray-400">
                                    Experience the elegance of Markdown in every article for enhanced readability.
                                </p>
                            </div>
                            <div className="space-y-2 transition-all duration-200 ease-in-out hover:transform hover:scale-105">
                                <Feather className="h-8 w-8 text-white" />
                                <h3 className="text-2xl font-bold">Expert Writers</h3>
                                <p className="text-gray-400">
                                    Gain insights from industry leaders and seasoned professionals in various fields.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-white/5">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Scriptoria, we're dedicated to cultivating a garden of knowledge. Our mission is to curate and deliver
                                    content that not only informs but also inspires and challenges our readers. We believe in the
                                    transformative power of well-crafted words and ideas.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/blog">
                                    <Button className="bg-white text-black hover:bg-white/90">
                                        Explore Our Blog
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                    onClick={() => window.location.href = 'mailto:contact@scriptoria.com'}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">For Readers</h3>
                                <p className="text-gray-400">
                                    Embark on a journey of discovery with our thought-provoking articles, in-depth analyses, and expert insights.
                                    Every visit to Scriptoria promises to be an enriching experience, broadening your horizons and deepening your understanding.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">For Potential Contributors</h3>
                                <p className="text-gray-400">
                                    While Scriptoria maintains a curated approach to content, we're always eager to hear from exceptional writers
                                    and subject matter experts. If you have unique insights or compelling stories to share, we invite you to reach out.
                                    Your expertise could be the next addition to our carefully crafted collection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full py-6 bg-gray-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center text-center gap-2 md:flex-row md:justify-between md:items-center">
                        <p className="text-sm text-gray-400">
                            © 2024 Scriptoria. Proudly crafted with 💻 & ❤️ by
                            <span className="ml-1 text-gray-300 font-semibold hover:text-gray-100 transition-colors duration-300 ease-in-out">
                                shrvan!
                            </span>
                        </p>
                        <p className="text-xs text-gray-500">
                            A solo venture dedicated to supporting indie developers! 🌱
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}