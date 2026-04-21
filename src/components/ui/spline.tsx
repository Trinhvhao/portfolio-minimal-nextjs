"use client";

import React, { useEffect, useState } from "react";

interface SplineSceneProps {
  scene: string;
  className?: string;
  isVisible?: boolean;
}

function SplineFallback({ message }: { message: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg-dark/80 z-10">
      <div className="w-10 h-10 border-2 border-dashed border-white/20 rounded-full" />
      <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">{message}</p>
    </div>
  );
}

export function SplineScene({ scene, className, isVisible = false }: SplineSceneProps) {
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<{ scene: string; className?: string; onLoad?: () => void }> | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadSpline() {
      try {
        const module = await import("@splinetool/react-spline");
        if (!cancelled) {
          setSplineComponent(() => module.default);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    loadSpline();
    return () => { cancelled = true; };
  }, []);

  if (loadError) {
    return (
      <div className={`${className ?? ""} relative w-full h-full overflow-hidden rounded-lg`}>
        <SplineFallback message="3D FAILED TO LOAD" />
      </div>
    );
  }

  return (
    <div
      className={`${className ?? ""} relative w-full h-full overflow-hidden rounded-lg`}
    >
      {isVisible && SplineComponent ? (
        <SplineComponent
          scene={scene}
          className="w-full h-full"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <SplineFallback
          message={SplineComponent ? (isVisible ? "LOADING 3D..." : "3D PAUSED OFFSCREEN") : "LOADING 3D ENGINE..."}
        />
      )}
    </div>
  );
}
