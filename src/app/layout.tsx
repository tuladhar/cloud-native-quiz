import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Free Cloud Certification Quiz - AWS, AI, Cilium, Kubernetes, Cloud Native, Security, GitOps and more.</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Puru Tuladhar" />
      <link rel="canonical" href="https://quiz.purutuladhar.com/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Take free cloud certification quizzes on AWS, AI, Cilium, Kubernetes, Cloud Native, Security, GitOps and more. Unlock new career opportunity with cloud certification!" />
      <meta name="keywords" content="cloud certification quiz, cloud-native certification, cloud quiz, aws quiz, cilium quiz, free quizzes, cloud native certification, practice exam, online cloud quiz, ai practitioner, gitops, cloud native" />
      <meta property="og:title" content="Free Cloud Certification Quiz - AWS, AI, Cilium, Kubernetes, Cloud Native, Security, GitOps and more." />
      <meta property="og:description" content="Take free cloud certification quizzes on AWS, AI, Cilium, Kubernetes, Cloud Native, Security, GitOps and more. Unlock new career opportunity with cloud certification!" />
      <meta property="og:image" content="https://quiz.purutuladhar.com/logo.png" />
      <meta property="og:url" content="https://quiz.purutuladhar.com/" />
      <meta property="og:type" content="website" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
