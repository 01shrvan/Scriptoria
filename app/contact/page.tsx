"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Plus, Minus } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted form data:', formData)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                    Get in Touch
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
                                    Have questions? We're here to help. Reach out to the Scriptoria team.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Contact Us</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 text-white placeholder-gray-400"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 text-white placeholder-gray-400"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 text-white placeholder-gray-400"
                                            placeholder="Your message"
                                            rows={4}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
                                        Send Message
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Contact Information</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                        <span>contact@scriptoria.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                        <span>123 Scriptoria St, Knowledge City, IN 54321</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>How often is new content published?</AccordionTrigger>
                                            <AccordionContent>
                                                We publish new articles every week, typically on Mondays and Thursdays.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Can I contribute to Scriptoria?</AccordionTrigger>
                                            <AccordionContent>
                                                While we maintain a curated approach, we're always open to exceptional content. Please reach out with your proposal.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>Is there a mobile app for Scriptoria?</AccordionTrigger>
                                            <AccordionContent>
                                                Currently, we don't have a mobile app, but our website is fully responsive and optimized for mobile viewing.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-white/5">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Connected</h2>
                                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join the Scriptoria community. Subscribe to our newsletter for exclusive content and updates.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow bg-white/10 text-white placeholder-gray-400"
                                        required
                                    />
                                    <Button type="submit" className="bg-white text-black hover:bg-white/90">
                                        Subscribe
                                    </Button>
                                </form>
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