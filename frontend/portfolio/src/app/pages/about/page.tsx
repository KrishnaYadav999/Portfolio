// Import necessary components
import Footer from '@/app/components/Footer';
import { SparklesPreview } from '@/app/components/SparklesPreview';
import { TimelineDemo } from '@/app/components/TimelineDemo';
import { WobbleCardDemo } from '@/app/components/WobbleCardDemo';
import Head from 'next/head'; // Import the Head component for SEO
import React from 'react';

// Define the About component
const About = () => {
  return (
    <>
      {/* Head section for SEO */}
      <Head>
        <title>About Us - Your Company Name</title>
        <meta name="description" content="Learn more about our company and what we do." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Render components */}
      <SparklesPreview />
      <WobbleCardDemo />
      <TimelineDemo />
      <Footer />
    </>
  );
}

// Export the About component as default
export default About;
