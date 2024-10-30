"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolSelector from '@/components/ToolSelector';
import PricingSection from '@/components/PricingSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import BulkProcessor from '@/components/BulkProcessor';
import FolderUploader from '@/components/FolderUploader';
import ImageLinkProcessor from '@/components/ImageLinkProcessor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Hero />
            <div className="mt-12">
              <Tabs defaultValue="single" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="single">Single Image</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
                  <TabsTrigger value="folder">Folder Upload</TabsTrigger>
                  <TabsTrigger value="url">Image URL</TabsTrigger>
                </TabsList>
                <TabsContent value="single">
                  <ToolSelector />
                </TabsContent>
                <TabsContent value="bulk">
                  <BulkProcessor />
                </TabsContent>
                <TabsContent value="folder">
                  <FolderUploader />
                </TabsContent>
                <TabsContent value="url">
                  <ImageLinkProcessor />
                </TabsContent>
              </Tabs>
            </div>
            <PricingSection />
            <Features />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}