import { theme } from 'stitches.config';
import Head from 'next/head';
import Main from 'src/components/Sections/Main';
import About from 'src/components/Sections/About';
import Works from 'src/components/Sections/Works';
import Skills from 'src/components/Sections/Skills';
import Contact from 'src/components/Sections/Contact';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" href="images/favicon.ico" />
        <link rel="icon" href="images/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="title" content="José Victor - Front-end Developer" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:locale" content="en_US" />

        <meta
          name="description"
          content="Hi, I’m José Victor, front-end developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one."
        />

        <meta property="og:url" content="https://www.josevictor.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="José Victor - Front-end Developer" />
        <meta
          property="og:description"
          content="Hi, I’m José Victor, front-end developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one."
        />
        <meta property="og:image" content="https://i.imgur.com/e7E5psQ.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="josevictor.dev" />
        <meta property="twitter:url" content="https://www.josevictor.dev/" />
        <meta name="twitter:title" content="José Victor - Front-end Developer" />
        <meta
          name="twitter:description"
          content="Hi, I’m José Victor, front-end developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one."
        />
        <meta name="twitter:image" content="https://i.imgur.com/e7E5psQ.png" />

        <title>José Victor - Front-end Developer</title>
      </Head>
      <Main />
      <About />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}
