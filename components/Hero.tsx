"use client";

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Remove Background from</span>
        <span className="block text-blue-600">Video and Images</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Effortlessly remove backgrounds from your videos and images with our AI-powered tool. Fast, accurate, and easy to use.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Button size="lg" className="w-full">Get Started</Button>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Button variant="outline" size="lg" className="w-full">Learn More</Button>
        </div>
      </div>
    </div>
  );
}