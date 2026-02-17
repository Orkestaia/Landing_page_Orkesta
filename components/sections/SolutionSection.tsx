"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { sectorContent } from "@/lib/content";

type ContentType = (typeof sectorContent)[keyof typeof sectorContent];

/* ─── Pillar Data ────────────────────────────────────── */
const pillars = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "Precisión",
        desc: "Más control, menos retrabajo",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: "Fluidez",
        desc: "Integración sin interrupciones",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.9 5.8h6.1l-4.9 3.6 1.9 5.8L12 14.6l-4.9 3.6 1.9-5.8L4 8.8h6.1z" />
            </svg>
        ),
        title: "Personalización",
        desc: "Adaptado a tu negocio, no genérico",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
        ),
        title: "Control",
        desc: "Tú diriges, la IA ejecuta",
    },
];

/* ─── Interactive Diagram ────────────────────────────── */
const modules = [
    {
        id: "voice",
        label: "Agentes Voz/Chat",
        icon: "🎙️",
        x: 30,
        y: 20,
        tooltip: "Agentes conversacionales de voz y chat que atienden, cualifican y ejecutan tareas 24/7.",
    },
    {
        id: "workflows",
        label: "n8n / Make",
        icon: "⚡",
        x: 290,
        y: 20,
        tooltip: "Workflows automatizados que conectan cada paso de tu operación sin código.",
    },
    {
        id: "crm",
        label: "Integraciones CRM",
        icon: "📊",
        x: 30,
        y: 240,
        tooltip: "Sincronización bidireccional con tu CRM, Google Sheets y herramientas existentes.",
    },
    {
        id: "obs",
        label: "Observabilidad 24/7",
        icon: "👁️",
        x: 290,
        y: 240,
        tooltip: "Monitorización en tiempo real de cada proceso, con alertas y métricas automáticas.",
    },
];

function SolutionDiagram() {
    const [hoveredModule, setHoveredModule] = useState<string | null>(null);
    const center = { x: 195, y: 145 };

    return (
        <div className="relative w-full max-w-[440px] aspect-[440/310] mx-auto">
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 47%, rgba(0,229,255,0.06) 0%, transparent 65%)",
                }}
            />

            <svg viewBox="0 0 390 290" className="w-full h-full" fill="none">
                {/* Animated paths from center to each module */}
                {modules.map((mod, i) => {
                    const endX = mod.x + 50;
                    const endY = mod.y + 22;
                    const midX = (center.x + endX) / 2;
                    const midY = (center.y + endY) / 2 + (i % 2 === 0 ? -15 : 15);

                    return (
                        <motion.path
                            key={`path-${mod.id}`}
                            d={`M ${center.x} ${center.y} Q ${midX} ${midY} ${endX} ${endY}`}
                            stroke={hoveredModule === mod.id ? "#00E5FF" : "#00B4D8"}
                            strokeWidth={hoveredModule === mod.id ? "2" : "1.5"}
                            strokeDasharray="6 4"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
                        />
                    );
                })}

                {/* Data particles flowing along paths */}
                {modules.map((mod, i) => {
                    const endX = mod.x + 50;
                    const endY = mod.y + 22;
                    const midX = (center.x + endX) / 2;
                    const midY = (center.y + endY) / 2 + (i % 2 === 0 ? -15 : 15);

                    return (
                        <motion.circle
                            key={`particle-${mod.id}`}
                            r="2.5"
                            fill="#00E5FF"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 2.5,
                                delay: 1 + i * 0.5,
                                repeat: Infinity,
                                repeatDelay: 1.5,
                            }}
                        >
                            <animateMotion
                                dur="2.5s"
                                begin={`${1 + i * 0.5}s`}
                                repeatCount="indefinite"
                                path={`M ${center.x} ${center.y} Q ${midX} ${midY} ${endX} ${endY}`}
                            />
                        </motion.circle>
                    );
                })}

                {/* Center node */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <rect
                        x={center.x - 52}
                        y={center.y - 20}
                        width="104"
                        height="40"
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
                        fontWeight="600"
                        fontFamily="var(--font-fira-code)"
                    >
                        Orkesta OS
                    </text>
                </motion.g>

                {/* Center glow rings */}
                <motion.circle
                    cx={center.x}
                    cy={center.y}
                    r="32"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </svg>

            {/* Module cards as HTML overlays */}
            {modules.map((mod, i) => (
                <motion.div
                    key={mod.id}
                    className="absolute"
                    style={{
                        left: `${(mod.x / 390) * 100}%`,
                        top: `${(mod.y / 290) * 100}%`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                    onMouseEnter={() => setHoveredModule(mod.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                >
                    <div
                        className="glass-card px-3 py-2 flex items-center gap-2 cursor-default transition-shadow duration-300 relative"
                        style={{
                            boxShadow: hoveredModule === mod.id ? "0 0 25px rgba(0,229,255,0.3)" : "none",
                        }}
                    >
                        <span className="text-base">{mod.icon}</span>
                        <span
                            className="text-[11px] whitespace-nowrap"
                            style={{
                                color: "#00E5FF",
                                fontFamily: "var(--font-fira-code)",
                            }}
                        >
                            {mod.label}
                        </span>
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hoveredModule === mod.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 w-52 p-3 rounded-xl text-xs leading-relaxed"
                                style={{
                                    background: "#1a1a2e",
                                    border: "1px solid rgba(0,229,255,0.25)",
                                    color: "var(--text-body)",
                                    fontFamily: "var(--font-inter)",
                                }}
                            >
                                {mod.tooltip}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}

/* ─── SOLUTION SECTION ──────────────────────────────── */
export function SolutionSection({ content }: { content: ContentType }) {
    return (
        <section className="relative py-24 lg:py-32" id="solucion">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* ─ Left Column ─ */}
                    <div className="flex flex-col gap-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-xs uppercase tracking-[4px] font-medium"
                            style={{
                                color: "#00E5FF",
                                fontFamily: "var(--font-fira-code)",
                            }}
                        >
                            La Solución
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="gradient-text text-4xl lg:text-[48px] font-bold leading-tight"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            Orkesta Automation OS
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg max-w-md"
                            style={{
                                color: "var(--text-body)",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            El sistema que orquesta tu operación completa
                        </motion.p>

                        {/* Use case card */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="glass-card p-4"
                            style={{ borderColor: "rgba(0,229,255,0.35)" }}
                        >
                            <span
                                className="text-sm"
                                style={{
                                    color: "#00E5FF",
                                    fontFamily: "var(--font-fira-code)",
                                }}
                            >
                                → {content.caso_uso}
                            </span>
                        </motion.div>

                        {/* 4 Pillars */}
                        <div className="flex flex-col gap-5 mt-2">
                            {pillars.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 mt-0.5">{p.icon}</div>
                                    <div>
                                        <h3
                                            className="text-white font-semibold text-base"
                                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                                        >
                                            {p.title}
                                        </h3>
                                        <p
                                            className="text-sm mt-0.5"
                                            style={{
                                                color: "var(--text-body)",
                                                fontFamily: "var(--font-inter)",
                                            }}
                                        >
                                            {p.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-4"
                        >
                            <span
                                className="inline-block glass-card px-4 py-2 text-xs"
                                style={{
                                    color: "#00B4D8",
                                    fontFamily: "var(--font-fira-code)",
                                }}
                            >
                                {"// TransFormación Digital → Automatización(true);"}
                            </span>
                        </motion.div>
                    </div>

                    {/* ─ Right Column: Diagram ─ */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <SolutionDiagram />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
