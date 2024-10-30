"use client";

import { Download, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

interface ProcessedImageProps {
  processedImage: string | null;
  isProcessing: boolean;
  progress: number;
  background?: string;
}

export default function ProcessedImage({ processedImage, isProcessing, progress, background = "transparent" }: ProcessedImageProps) {
  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'removed-background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getBackgroundStyle = () => {
    if (background.startsWith('http')) {
      return {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    if (background.startsWith('linear-gradient')) {
      return { background };
    }
    return { background };
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-200 rounded-xl h-[400px] flex flex-col items-center justify-center relative"
      style={getBackgroundStyle()}
    >
      {isProcessing ? (
        <div className="flex flex-col items-center gap-4">
          <Progress value={progress} className="w-[60%]" />
          <p className="text-sm text-gray-600">Processing image... {progress}%</p>
        </div>
      ) : processedImage ? (
        <>
          <div className="relative w-full h-full">
            <Image
              src={processedImage}
              alt="Processed"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <Button 
            className="absolute bottom-4 right-4"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Result
          </Button>
        </>
      ) : (
        <>
          <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
          <p className="text-gray-600 text-center mb-4">
            Your processed image will appear here
          </p>
          <Button disabled variant="secondary">
            <Download className="h-4 w-4 mr-2" />
            Download Result
          </Button>
        </>
      )}
    </div>
  );
}