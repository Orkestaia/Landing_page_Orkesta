"use client";

import { motion } from "framer-motion";
import type { sectorContent } from "@/lib/content";

type ContentType = (typeof sectorContent)[keyof typeof sectorContent];

interface HeroSectionProps {
    content: ContentType;
}

/* ─── Animated Word Stagger ─────────────────────────── */
function AnimatedLine({
    text,
    className = "",
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + i * 0.08, duration: 0.4 }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

/* ─── Orkesta OS Diagram ────────────────────────────── */
function OrkestaOSDiagram() {
    const nodes = [
        { label: "Agente Voz/Chat", x: 60, y: 30, icon: "🎙️" },
        { label: "n8n Workflows", x: 340, y: 30, icon: "⚡" },
        { label: "CRM / Sheets", x: 60, y: 280, icon: "📊" },
        { label: "Observabilidad", x: 340, y: 280, icon: "👁️" },
    ];
    const center = { x: 200, y: 155 };

    return (
        <div className="relative w-full max-w-[460px] aspect-square mx-auto">
            {/* Glow Orb */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.08) 0%, transparent 70%)",
                }}
            />

            <svg
                viewBox="0 0 400 310"
                className="w-full h-full"
                fill="none"
            >
                {/* Connection Lines */}
                {nodes.map((node, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={center.x}
                        y1={center.y}
                        x2={node.x + 50}
                        y2={node.y + 25}
                        stroke="#00B4D8"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.8 + i * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Pulse along lines */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`pulse-${i}`}
                        r="3"
                        fill="#00E5FF"
                        initial={{ opacity: 0 }}
                        animate={{
                            cx: [center.x, node.x + 50],
                            cy: [center.y, node.y + 25],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            delay: 1.5 + i * 0.4,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Center Node */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <rect
                        x={center.x - 55}
                        y={center.y - 22}
                        width="110"
                        height="44"
                        rx="12"
                        fill="#121212"
                        stroke="#00E5FF"
                        strokeWidth="1.5"
                    />
                    <text
                        x={center.x}
                        y={center.y + 5}
                        textAnchor="middle"
                        fill="#00E5FF"
                        fontSize="13"
                        fontFamily="var(--font-fira-code)"
                        fontWeight="500"
                    >
                        Orkesta OS
                    </text>
                </motion.g>

                {/* Glow behind center */}
                <circle
                    cx={center.x}
                    cy={center.y}
                    r="35"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="0.5"
                    opacity="0.15"
                />
            </svg>

            {/* Satellite Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={`node-${i}`}
                    className="absolute glass-card px-3 py-2 flex items-center gap-2"
                    style={{
                        left: `${(node.x / 400) * 100}%`,
                        top: `${(node.y / 310) * 100}%`,
                        transform: "translate(-10%, -10%)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                    whileHover={{
                        boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                        scale: 1.05,
                    }}
                >
                    <span className="text-lg">{node.icon}</span>
                    <span
                        className="text-[11px] text-cyan-energy whitespace-nowrap"
                        style={{ fontFamily: "var(--font-fira-code)" }}
                    >
                        {node.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

/* ─── HERO SECTION ──────────────────────────────────── */
export function HeroSection({ content }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
                    {/* ─ Left Column ─ */}
                    <div className="flex flex-col gap-7">
                        {/* Tech Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex self-start"
                        >
                            <span
                                className="px-4 py-2 rounded-full text-[13px] border"
                                style={{
                                    background: "#121212",
                                    borderColor: "rgba(0,229,255,0.25)",
                                    color: "#00E5FF",
                                    fontFamily: "var(--font-fira-code)",
                                }}
                            >
                                {"// stack: n8n · Retell AI · Make · CRM"}
                            </span>
                        </motion.div>

                        {/* Animated H1 */}
                        <h1
                            className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.08] tracking-tight"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            <AnimatedLine text="Automatizamos tu operación" />
                            <br />
                            <AnimatedLine
                                text="con Agentes de IA y Workflows"
                                className="gradient-text"
                                delay={0.3}
                            />
                            <br />
                            <AnimatedLine text="en semanas, no meses." delay={0.6} />
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="text-lg max-w-[520px] leading-relaxed"
                            style={{
                                color: "var(--text-body)",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            {content.headline_b}
                        </motion.p>

                        {/* Use case badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="inline-flex self-start"
                        >
                            <span
                                className="text-sm"
                                style={{
                                    color: "#00B4D8",
                                    fontFamily: "var(--font-fira-code)",
                                }}
                            >
                                → {content.caso_uso}
                            </span>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="flex flex-wrap gap-4 mt-2"
                        >
                            {/* Primary CTA */}
                            <motion.a
                                href="#cta"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-base"
                                style={{
                                    background: "var(--gradient-orkesta)",
                                    fontFamily: "var(--font-space-grotesk)",
                                    boxShadow: "0 0 20px rgba(0,229,255,0.15)",
                                    transition: "box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow =
                                        "0 0 35px rgba(0,229,255,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow =
                                        "0 0 20px rgba(0,229,255,0.15)";
                                }}
                            >
                                {content.cta_texto}
                            </motion.a>

                            {/* Secondary CTA */}
                            <motion.a
                                href="#solucion"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base text-white"
                                style={{
                                    border: "1px solid rgba(0,229,255,0.4)",
                                    fontFamily: "var(--font-space-grotesk)",
                                }}
                            >
                                {content.cta_secundario}
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* ─ Right Column ─ */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hidden lg:block"
                    >
                        <OrkestaOSDiagram />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
