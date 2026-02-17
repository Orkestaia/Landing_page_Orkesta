"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { sectorContent } from "@/lib/content";

type ContentType = (typeof sectorContent)[keyof typeof sectorContent];

/* ─── SpotlightCard ─────────────────────────────────── */
function SpotlightCard({
    icon,
    title,
    description,
    delay = 0,
}: {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setSpotlightPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-card relative overflow-hidden p-6 cursor-default group"
        >
            {/* Spotlight overlay */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(300px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0,229,255,0.07), transparent 60%)`,
                }}
            />

            {/* Border glow on hover */}
            <div
                className="absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow: "inset 0 0 0 1px rgba(0,229,255,0.3)",
                }}
            />

            <div className="relative z-10">
                <span className="text-3xl block mb-3">{icon}</span>
                <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                    {title}
                </h3>
                <p
                    className="text-sm leading-relaxed"
                    style={{
                        color: "var(--text-body)",
                        fontFamily: "var(--font-inter)",
                    }}
                >
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

/* ─── PROBLEM SECTION ───────────────────────────────── */
const painCards = [
    {
        icon: "📞",
        title: "Llamadas sin registro",
        description: "Información que desaparece con cada llamada no documentada.",
    },
    {
        icon: "🔁",
        title: "Tareas repetitivas",
        description: "Tu equipo saturado y sin foco, repitiendo lo mismo cada día.",
    },
    {
        icon: "👻",
        title: "Leads sin seguimiento",
        description:
            "Oportunidades que se evaporan por falta de automatización.",
    },
    {
        icon: "🔥",
        title: "Cero visibilidad",
        description: "Apagando fuegos cada día sin datos para decidir.",
    },
];

export function ProblemSection({ content }: { content: ContentType }) {
    return (
        <section className="relative py-24 lg:py-32" id="problema">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* ─ Left Column ─ */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-32">
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
                            El Problema
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl lg:text-[48px] font-bold leading-tight text-white"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            ¿Te suena esto?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg leading-relaxed max-w-md"
                            style={{
                                color: "var(--text-body)",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            {content.pain_point}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="gradient-text text-xl font-semibold max-w-md leading-snug"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            Cada día sin automatizar es tiempo y dinero perdido que no
                            vuelve.
                        </motion.p>
                    </div>

                    {/* ─ Right Column: SpotlightCards Grid ─ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {painCards.map((card, i) => (
                            <SpotlightCard
                                key={i}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                delay={0.1 + i * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
