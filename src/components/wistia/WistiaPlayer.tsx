'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface WistiaPlayerProps {
  videoId: string;
  className?: string;
}

export function WistiaPlayer({ videoId, className = '' }: WistiaPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Wistia player when videoId changes
    if (typeof window !== 'undefined' && (window as typeof window & { _wq?: unknown[] })._wq) {
      (window as typeof window & { _wq: unknown[] })._wq.push({
        id: videoId,
        onReady: (video: unknown) => {
          console.log('Wistia video ready:', video);
        },
      });
    }
  }, [videoId]);

  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <div className={className}>
        <div
          ref={containerRef}
          className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Placeholder while video loads */}
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-zinc-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Background video variant for hero sections
export function WistiaBackground({
  videoId,
  className = '',
}: WistiaPlayerProps) {
  return (
    <>
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className={`wistia_embed wistia_async_${videoId} autoPlay=true muted=true loop=true playsinline=true controlsVisibleOnLoad=false`}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>
    </>
  );
}
