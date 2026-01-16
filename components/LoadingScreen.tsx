"use client";

import { useEffect, useState } from "react";
import content from "@/lib/useContent";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { site } = content;

  useEffect(() => {
    // Auto complete after video ends or 10 seconds (whichever comes first)
    const timeout = setTimeout(() => {
      if (!isVideoEnded) {
        handleComplete();
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isVideoEnded]);

  const handleComplete = () => {
    setIsFadingOut(true);
    // Wait for blur animation to complete before removing component
    setTimeout(() => {
      onLoadingComplete();
    }, 800); // Match the animation duration
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    handleComplete();
  };

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 backdrop-blur-xl scale-110' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={`w-full h-full object-contain transition-all duration-700 ${
          isFadingOut ? 'blur-lg scale-95' : 'blur-0'
        }`}
      >
        <source src={site.loadingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
