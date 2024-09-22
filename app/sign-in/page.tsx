"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Github, Twitter } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

export default function SignInPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const router = useRouter()

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setSuccessMessage('')

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const rememberMe = formData.get('rememberMe') === 'on'

        // Handle sign-in logic
        console.log('Sign in attempt with:', { email, password, rememberMe })

        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsLoading(false)
        setSuccessMessage('Sign in successful. Welcome back to Scriptoria!')
        setTimeout(() => {
            router.push('/dashboard')
        }, 1500)
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed inset-0"> {/* Make the form container fixed */}
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold">
                            Sign in to Scriptoria
                        </h2>
                    </div>
                    {successMessage && (
                        <div className="bg-green-500 text-white p-3 rounded-md text-center">
                            {successMessage}
                        </div>
                    )}
                    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <Label htmlFor="email-address" className="sr-only">Email address</Label>
                                <Input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-white/10 text-white placeholder-gray-400 rounded-t-md"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="mt-4"> {/* Add margin between the inputs */}
                                <Label htmlFor="password" className="sr-only">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-white/10 text-white placeholder-gray-400 rounded-b-md"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox id="remember-me" name="rememberMe" />
                                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                    Remember me
                                </Label>
                            </div>

                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-white hover:text-gray-200">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full bg-white text-black hover:bg-white/90" disabled={isLoading}>
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </span>
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-black text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-white/10">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-white/10">
                                <Twitter className="mr-2 h-4 w-4" />
                                Twitter
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
