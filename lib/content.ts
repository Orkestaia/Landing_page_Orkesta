export const sectorContent = {
    default: {
        headline_a: "Automatizamos tu operación con Agentes de IA y Workflows",
        headline_b:
            "Convierte llamadas y chats en datos y acciones automáticas",
        headline_c: "Menos tareas manuales. Más control. Más ingresos.",
        pain_point:
            "Cada día apago fuegos: leads sin registrar, tareas repetidas, cero visibilidad.",
        cta_texto: "Solicitar Auditoría de Automatización — 15 min",
        caso_uso:
            "Automatización de capturas, seguimiento y reporting con agentes IA",
        cta_secundario: "Ver cómo funciona →",
    },
    dental: {
        headline_a:
            "Automatiza tu clínica: citas, recordatorios y seguimiento en piloto automático",
        headline_b:
            "Tu equipo deja de llamar pacientes manualmente. La IA lo hace.",
        headline_c:
            "Reduce no-shows y recupera horas de recepción cada semana.",
        pain_point:
            "Las llamadas de confirmación se pierden, los pacientes no aparecen y la agenda está descontrolada.",
        cta_texto: "Ver cómo funciona para clínicas dentales",
        caso_uso:
            "Agente de voz que confirma citas, envía recordatorios y actualiza el historial",
        cta_secundario: "Ver demo para clínicas →",
    },
    farmacia: {
        headline_a:
            "Farmacia inteligente: pedidos, atención y seguimiento automatizados",
        headline_b:
            "Tus pacientes reciben recordatorios automáticos. Tu equipo se enfoca en lo importante.",
        headline_c:
            "Menos llamadas manuales. Más fidelización. Más ventas recurrentes.",
        pain_point:
            "Los pacientes olvidan sus tratamientos, los pedidos se gestionan a mano y no hay seguimiento.",
        cta_texto: "Ver automatización para farmacias",
        caso_uso:
            "Recordatorios de medicación, pedidos recurrentes y atención 24/7",
        cta_secundario: "Ver demo para farmacias →",
    },
    restaurante: {
        headline_a:
            "Tu restaurante funciona solo: reservas, pedidos y atención automatizados",
        headline_b:
            "Menos llamadas perdidas, más reservas confirmadas automáticamente.",
        headline_c: "Cero llamadas perdidas. Cero reservas sin confirmar.",
        pain_point:
            "Las reservas por teléfono se pierden y el equipo interrumpe el servicio para atender llamadas.",
        cta_texto: "Ver automatización para restaurantes",
        caso_uso:
            "Agente de voz para reservas + confirmaciones automáticas + gestión de sala",
        cta_secundario: "Ver demo para restaurantes →",
    },
    ecommerce: {
        headline_a:
            "Tu tienda vende y atiende sola: pedidos, soporte y seguimiento automatizados",
        headline_b: "De la compra al post-venta, sin intervención manual.",
        headline_c: "Escala sin contratar. Automatiza sin complicarte.",
        pain_point:
            "El soporte post-venta consume horas y los carritos abandonados no tienen seguimiento.",
        cta_texto: "Ver automatización para ecommerce",
        caso_uso:
            "Recuperación de carritos, soporte automatizado y seguimiento de pedidos con IA",
        cta_secundario: "Ver demo para ecommerce →",
    },
    agencia: {
        headline_a: "Tu agencia entrega más sin aumentar el equipo",
        headline_b:
            "Automatiza reporting, onboarding y seguimiento de clientes.",
        headline_c:
            "Más clientes, mismo equipo. La IA hace el trabajo repetitivo.",
        pain_point:
            "Los reportes se hacen a mano, el onboarding tarda semanas y los clientes preguntan lo mismo.",
        cta_texto: "Ver automatización para agencias",
        caso_uso:
            "Reporting automático, onboarding con agentes y gestión de tareas recurrentes",
        cta_secundario: "Ver demo para agencias →",
    },
} as const;

export type SectorKey = keyof typeof sectorContent;

export const testimonios = [
    {
        nombre: "Josu Alonso",
        cargo: "CEO",
        texto:
            "Automatizamos más de lo que pensábamos... tareas pesadas del día a día.",
    },
    {
        nombre: "Paula Echevarrieta",
        cargo: "Marketing Manager",
        texto:
            "Mejoran cualquier solución actual... más tiempo para llegar a todo.",
    },
    {
        nombre: "Iñigo Loperena",
        cargo: "Startup CEO",
        texto: "Reducir costes y generar ingresos en piloto automático.",
    },
] as const;

export function getSectorContent(sector?: string | null) {
    const key = (sector || "default") as SectorKey;
    return sectorContent[key] ?? sectorContent.default;
}
