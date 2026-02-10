"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface TransformerScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function TransformerScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: TransformerScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Transform scroll progress to frame index
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  // Preload all frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Pattern discovered from actual files: 0.067, 0.066, 0.067, 0.067, 0.066, 0.067, 0.067, 0.066...
      // This follows a pattern where frames at positions 1, 4, 7, 10, 13... (i % 3 === 1) use 0.066s
      // All other frames use 0.067s
      const frameNumber = String(i).padStart(3, "0");
      const delay = (i % 3 === 1) ? "0.066" : "0.067";
      img.src = `${imageFolderPath}/frame_${frameNumber}_delay-${delay}s.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
          console.log(`✅ All ${totalFrames} frames loaded successfully`);
        }
      };

      img.onerror = () => {
        console.error(`❌ Failed to load frame ${i}: ${img.src}`);
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };

      loadedImages[i] = img;
    }

    setImages(loadedImages);
  }, [totalFrames, imageFolderPath]);

  // Handle canvas resize and device pixel ratio for high-DPI displays
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();

      // Set actual canvas size (accounting for device pixel ratio)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Set display size via CSS
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Trigger re-render of current frame immediately after resize
      const ctx = canvas.getContext("2d");
      const currentIndex = Math.round(frameIndex.get());
      const img = images[currentIndex];

      if (img && img.complete && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspect > canvasAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  // Combined render effect to ensure consistent drawing
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      const img = images[index];

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspect > canvasAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    });

    return () => unsubscribe();
  }, [frameIndex, images, imagesLoaded]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-dark">
          <div className="text-center">
            <div className="animate-pulse font-heading text-accent-metal text-xl tracking-widest mb-2">
              LOADING SEQUENCE
            </div>
            <div className="font-body text-white/60 text-sm">
              Preparing {totalFrames} frames...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
