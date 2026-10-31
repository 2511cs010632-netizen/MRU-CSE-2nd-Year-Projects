"use client";

import { motion } from "framer-motion";

/**
 * Signature visual for the landing hero: terraced fields rendered as gold linework
 * on deep field-green, in a style that nods to Warli folk art — a tradition rooted
 * in the same rural communities AgriConnect serves. The sun rises on load, sprouts
 * grow up the furrows, and a few leaves drift on loop.
 */
export function FieldIllustration() {
  return (
    <svg
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of terraced fields at sunrise"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b2e1f" />
          <stop offset="55%" stopColor="#123c26" />
          <stop offset="100%" stopColor="#195234" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3d28a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f3d28a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="560" fill="url(#skyGrad)" />

      {/* Rising sun */}
      <motion.g
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle cx="400" cy="180" r="90" fill="url(#sunGlow)" />
        <motion.circle
          cx="400"
          cy="180"
          r="46"
          fill="#e8a94c"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Terraced field bands, back to front */}
      {[
        { y: 300, fill: "#123c26" },
        { y: 360, fill: "#195234" },
        { y: 420, fill: "#1f663e" },
        { y: 480, fill: "#2f8250" }
      ].map((band, i) => (
        <motion.path
          key={band.y}
          d={`M0,${band.y} Q200,${band.y - 24} 400,${band.y} T800,${band.y} V560 H0 Z`}
          fill={band.fill}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      {/* Terrace contour lines — the Warli-inspired linework */}
      {[318, 378, 438, 498].map((y, i) => (
        <motion.path
          key={y}
          d={`M0,${y} Q200,${y - 24} 400,${y} T800,${y}`}
          fill="none"
          stroke="#f3d28a"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
        />
      ))}

      {/* Sprouts growing along the furrows */}
      {[
        { x: 120, y: 350 },
        { x: 220, y: 358 },
        { x: 330, y: 352 },
        { x: 480, y: 410 },
        { x: 560, y: 416 },
        { x: 650, y: 408 },
        { x: 160, y: 470 },
        { x: 300, y: 476 },
        { x: 440, y: 472 },
        { x: 600, y: 478 },
        { x: 700, y: 474 }
      ].map((s, i) => (
        <motion.g
          key={`${s.x}-${s.y}`}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5, delay: 1.2 + i * 0.07, ease: "backOut" }}
          style={{ transformOrigin: `${s.x}px ${s.y}px` }}
        >
          <path
            d={`M${s.x},${s.y} q-6,-14 -2,-22 M${s.x},${s.y} q6,-14 2,-22 M${s.x},${s.y} v-18`}
            stroke="#faeac7"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      ))}

      {/* A few drifting leaves for ambient motion */}
      {[
        { x: 90, y: 120 },
        { x: 680, y: 90 },
        { x: 250, y: 60 }
      ].map((leaf, i) => (
        <motion.path
          key={i}
          d={`M${leaf.x},${leaf.y} q10,-10 20,0 q-10,10 -20,0 Z`}
          fill="#e8a94c"
          fillOpacity="0.55"
          animate={{
            y: [0, -10, 0],
            x: [0, 6, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </svg>
  );
}
