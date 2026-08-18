"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Mail, Instagram, Linkedin, Youtube, Film, Layers, Award } from "lucide-react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Cinematic Brand Commercial",
      category: "Video Editing & Color Grading",
      year: "2026",
      desc: "High-paced commercial cut with sound design, dynamic speed ramps, and custom color grading.",
      tag: "Premiere Pro / DaVinci",
    },
    {
      title: "3D Motion Graphics Reel",
      category: "Motion Design",
      year: "2026",
      desc: "Smooth typography animations, keyframe transitions, and visual identity rollout.",
      tag: "After Effects / Blender",
    },
    {
      title: "Social Media High-Engagement Reels",
      category: "Short-form Content",
      year: "2026",
      desc: "Viral retention-focused hooks, motion tracking titles, and fast visual storytelling.",
      tag: "Content Strategy / Editing",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-neutral-800 selection:text-white overflow-x-hidden font-sans">
      {/* Noise Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-screen" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Custom Follower Cursor */}
      <div
        className="pointer-events-none fixed z-[999] rounded-full bg-white transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: cursorHovered ? "48px" : "8px",
          height: cursorHovered ? "48px" : "8px",
          mixBlendMode: "difference",
          opacity: cursorHovered ? 0.9 : 1,
        }}
      />

      {/* Floating Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl">
        <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
          <span className="font-bold tracking-wider text-sm">ARJUN GUND</span>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="mailto:contact@arjungund.com"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="text-xs bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium tracking-wide rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR FREELANCE & PROJECTS
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-6">
          ARJUN GUND
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl font-light tracking-wide mb-10">
          Video Editor & Motion Designer crafting high-impact visual stories and cinematic narratives.
        </p>

        {/* Featured Video Card */}
        <div 
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
          className="relative w-full max-w-4xl h-72 md:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-20">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
          <span className="absolute bottom-6 left-6 z-20 text-xs font-mono tracking-widest text-neutral-400">
            SHOWREEL 2026 — PLAY VIDEO
          </span>
        </div>
      </section>

      {/* Stacking / Sticky Scroll Projects Section */}
      <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500">Selected Work</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Projects & Edits</h2>
        </div>

        <div className="space-y-12">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="sticky top-28 rounded-3xl bg-[#121212] border border-white/10 p-8 md:p-12 shadow-2xl transition-all duration-300 hover:border-white/20"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{item.tag}</span>
                  <h3 className="text-2xl md:text-4xl font-bold mt-2">{item.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="h-64 md:h-80 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-600 mb-6">
                [ Project Showcase / Video Preview ]
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-neutral-400 gap-2">
                <p>{item.desc}</p>
                <span className="font-mono text-xs text-neutral-600">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Tools & Skills */}
      <section className="py-16 border-y border-white/5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee text-neutral-500 text-sm font-mono uppercase tracking-widest">
          <span>• Premiere Pro</span>
          <span>• After Effects</span>
          <span>• DaVinci Resolve</span>
          <span>• Color Grading</span>
          <span>• Sound Design</span>
          <span>• Visual Effects</span>
          <span>• Blender</span>
          <span>• Premiere Pro</span>
          <span>• After Effects</span>
          <span>• DaVinci Resolve</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
          LET'S CREATE SOMETHING REMARKABLE.
        </h2>
        <a
          href="mailto:contact@arjungund.com"
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-200 transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4" /> Start a Conversation
        </a>
      </section>
    </div>
  );
}
