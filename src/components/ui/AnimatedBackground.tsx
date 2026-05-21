import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {theme === "dark" ? (
        <>
          <div className="absolute -top-52 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-[160px]" />
          <div className="absolute top-24 -left-40 h-[480px] w-[480px] rounded-full bg-cyan-500/20 blur-[150px]" />
          <div className="absolute -bottom-20 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/25 blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(5,7,20,0.92),_rgba(2,6,23,0.98))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(99,102,241,0.06)_0%,_transparent_40%)]" />
          <div className="absolute inset-0 bg-noise opacity-40" />
        </>
      ) : (
        <>
          <div className="absolute -top-52 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[160px]" />
          <div className="absolute top-24 -left-40 h-[480px] w-[480px] rounded-full bg-emerald-400/12 blur-[150px]" />
          <div className="absolute -bottom-20 right-0 h-[520px] w-[520px] rounded-full bg-blue-400/15 blur-[170px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.05),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(248,250,252,0.5),_rgba(241,245,249,0.7))]" />
          <div className="absolute inset-0 bg-noise opacity-20" />
        </>
      )}
    </div>
  );
}
