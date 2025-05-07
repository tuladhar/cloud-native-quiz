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
        <title>Free Cloud Native Certifications Quiz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Puru Tuladhar" />
        <link rel="canonical" href="https://quiz.purutuladhar.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Take free cloud-native certification quizzes. Unlock new career opportunity with cloud-native certification!" />
        <meta name="keywords" content="cloud-native certification, cloud-native quiz, cloud-native certification, cncf, kcna, kcsa, cilium, gitops" />
        <meta property="og:title" content="Free Cloud Native Certifications Quiz" />
        <meta property="og:description" content="Take free cloud-native certification quizzes. Unlock new career opportunity with cloud-native certification!" />
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
