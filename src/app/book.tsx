"use client"

import { useState } from "react"
import { BookOpen, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookBannerProps {
    title: string
    description?: string
    ctaText?: string
    ctaLink: string
    dismissible?: boolean
    className?: string
}

export default function BookBanner({
    title,
    description = "The complete guide to mastering Kubernetes Security",
    ctaText = "Get the Book",
    ctaLink,
    dismissible = true,
    className = "",
}: BookBannerProps) {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div
            className={`w-full rounded-lg bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 text-white py-3 px-4 ${className}`}
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-3 sm:mb-0">
                    <div className="bg-purple-700 p-2 rounded-lg mr-3 hidden sm:flex">
                        <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm sm:text-base flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 sm:hidden" />
                            {title}
                            <span className="ml-2 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
                        </h3>
                        {description && <p className="text-xs sm:text-sm text-purple-200 mt-0.5">{description}</p>}
                    </div>
                </div>
                <div className="flex items-center">
                    <Button asChild size="sm" className="bg-white text-purple-900 hover:bg-purple-100 mr-2">
                        <Link href={ctaLink} target="_blank">
                            {ctaText} <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                    </Button>
                    {dismissible && (
                        <button
                            onClick={() => setIsVisible(false)}
                            className="hidden text-purple-200 hover:text-white p-1 rounded-full"
                            aria-label="Dismiss banner"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
