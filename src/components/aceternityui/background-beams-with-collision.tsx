"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: Math.random() * 10 + 2,
      repeatDelay: Math.random() * 5 + 1,
      delay: Math.random() * 5,
      className: Math.random() > 0.7 ? "h-6" : undefined,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: Math.random() * 10 + 3,
      repeatDelay: Math.random() * 7 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.5 ? "h-12" : undefined,
    },
    {
      initialX: 200,
      translateX: 200,
      duration: Math.random() * 8 + 4,
      repeatDelay: Math.random() * 6 + 3,
      delay: Math.random() * 6 + 1,
      className: Math.random() > 0.8 ? "h-20" : undefined,
    },
    {
      initialX: 300,
      translateX: 300,
      duration: Math.random() * 12 + 5,
      repeatDelay: Math.random() * 7 + 3,
      delay: Math.random() * 5 + 2,
      className: Math.random() > 0.6 ? "h-6" : undefined,
    },
    {
      initialX: 400,
      translateX: 400,
      duration: Math.random() * 10 + 3,
      repeatDelay: Math.random() * 5 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.7 ? "h-12" : undefined,
    },
    {
      initialX: 500,
      translateX: 500,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 3 + 1,
      className: Math.random() > 0.5 ? "h-20" : undefined,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: Math.random() * 7 + 5,
      repeatDelay: Math.random() * 6 + 3,
      delay: Math.random() * 5,
      className: Math.random() > 0.8 ? "h-6" : undefined,
    },
    {
      initialX: 700,
      translateX: 700,
      duration: Math.random() * 10 + 4,
      repeatDelay: Math.random() * 7 + 1,
      delay: Math.random() * 6,
      className: Math.random() > 0.6 ? "h-12" : undefined,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: Math.random() * 11 + 7,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.4 ? "h-20" : undefined,
    },
    {
      initialX: 900,
      translateX: 900,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 7 + 2,
      delay: Math.random() * 5,
      className: Math.random() > 0.7 ? "h-6" : undefined,
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: Math.random() * 10 + 3,
      repeatDelay: Math.random() * 5 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.5 ? "h-12" : undefined,
    },
    {
      initialX: 1100,
      translateX: 1100,
      duration: Math.random() * 8 + 4,
      repeatDelay: Math.random() * 6 + 3,
      delay: Math.random() * 6 + 1,
      className: Math.random() > 0.8 ? "h-20" : undefined,
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: Math.random() * 7 + 5,
      repeatDelay: Math.random() * 7 + 3,
      delay: Math.random() * 5 + 2,
      className: Math.random() > 0.6 ? "h-6" : undefined,
    },
    {
      initialX: 1300,
      translateX: 1300,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 3 + 1,
      className: Math.random() > 0.5 ? "h-20" : undefined,
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: Math.random() * 11 + 7,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.4 ? "h-6" : undefined,
    },
    {
      initialX: 1500,
      translateX: 1500,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 7 + 2,
      delay: Math.random() * 5,
      className: Math.random() > 0.7 ? "h-6" : undefined,
    },
    {
      initialX: 1600,
      translateX: 1600,
      duration: Math.random() * 10 + 3,
      repeatDelay: Math.random() * 5 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.5 ? "h-12" : undefined,
    },
    {
      initialX: 1700,
      translateX: 1700,
      duration: Math.random() * 8 + 4,
      repeatDelay: Math.random() * 6 + 3,
      delay: Math.random() * 6 + 1,
      className: Math.random() > 0.8 ? "h-20" : undefined,
    },
    {
      initialX: 1800,
      translateX: 1800,
      duration: Math.random() * 7 + 5,
      repeatDelay: Math.random() * 7 + 3,
      delay: Math.random() * 5 + 2,
      className: Math.random() > 0.6 ? "h-6" : undefined,
    },
    {
      initialX: 1900,
      translateX: 1900,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 3 + 1,
      className: Math.random() > 0.5 ? "h-20" : undefined,
    },
    {
      initialX: 2000,
      translateX: 2000,
      duration: Math.random() * 11 + 7,
      repeatDelay: Math.random() * 8 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.4 ? "h-6" : undefined,
    },
    {
      initialX: 2100,
      translateX: 2100,
      duration: Math.random() * 9 + 6,
      repeatDelay: Math.random() * 7 + 2,
      delay: Math.random() * 5,
      className: Math.random() > 0.7 ? "h-6" : undefined,
    },
    {
      initialX: 2200,
      translateX: 2200,
      duration: Math.random() * 10 + 3,
      repeatDelay: Math.random() * 5 + 2,
      delay: Math.random() * 4 + 1,
      className: Math.random() > 0.5 ? "h-12" : undefined,
    },
    {
      initialX: 2300,
      translateX: 2300,
      duration: Math.random() * 8 + 4,
      repeatDelay: Math.random() * 6 + 3,
      delay: Math.random() * 6 + 1,
      className: Math.random() > 0.8 ? "h-20" : undefined,
    },
    {
      initialX: 2400,
      translateX: 2400,
      duration: Math.random() * 7 + 5,
      repeatDelay: Math.random() * 7 + 3,
      delay: Math.random() * 5 + 2,
      className: Math.random() > 0.6 ? "h-6" : undefined,
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-full relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-red-600 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-orange-500 to-red-600"
        />
      ))}
    </div>
  );
};
