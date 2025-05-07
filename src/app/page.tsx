'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './_footer';

export default function LandingPage() {
  const [hoveredQuiz, setHoveredQuiz] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4 bg-pattern">
      <style jsx global>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
      <div className="w-full max-w-4xl bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8">
        <header className="text-center mb-8">

          <a href="/">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 animate-gradient-text">
              <span className="text-animation -rotate-12 bg-yellow-400 text-yellow-900 text-xl md:text-2xl lg:text-3xl  font-semibold px-2 py-1 rounded-md inline-block animate-float mr-2">FREE</span>
              &nbsp;Cloud Native Quiz
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              <b>Test your cloud-native knowledge and prepare for your next <a href="https://www.cncf.io/training/certification/" target="_blank">certifications</a>.</b><br />
              <span className="text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 animate-gradient-text">
                Unlock new career opportunity.
              </span>

            </p>
          </a>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://aif.purutuladhar.com" target="_blank">
              <Image
                src="/aif.png"
                alt="AWS Certified AI Practitioner (AIF-C01) - Free Quiz"
                width={170}
                height={170}
                className="object-contain rounded-2xl bg-gray-700 p-2"
              />
            </a>
          </motion.div> */}

          <motion.div

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://kcna.purutuladhar.com" target="_blank">
              <Image
                src="/kcna.png"
                alt="Kubernetes & Cloud Native Associate (KCNA) - Free Quiz"
                width={170}
                height={170}
                className="rounded-2xl bg-gray-700 p-2"
              />
            </a>
          </motion.div>
          <motion.div

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://kcsa.purutuladhar.com" target="_blank">
              <Image
                src="/kcsa.svg"
                alt="Kubernetes & Cloud Native Security Associate (KCSA) - Free Quiz"
                width={170}
                height={170}
                className="rounded-2xl bg-gray-700 p-2"
              />
            </a>
          </motion.div>


          <motion.div

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://cca.purutuladhar.com" target="_blank">
              <Image
                src="/cca.png"
                alt="Cilium Certified Associate (CCA) - Free Quiz"
                width={170}
                height={170}
                className="rounded-2xl bg-gray-700 p-2"
              />
            </a>
          </motion.div>

          <motion.div

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://cgoa.purutuladhar.com" target="_blank">
              <Image
                src="/cgoa.svg"
                alt="Certified GitOps Associate (CGOA) - Free Quiz"
                width={170}
                height={170}
                className="rounded-2xl bg-gray-700 p-2"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div >
  )
}