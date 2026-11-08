import { useState, useEffect, useRef } from "react";
import {
  Code, Trophy, Cpu,
  Terminal, X, Star, FileText, Wifi, BookOpen, ChevronDown, Download
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import CinematicHero from "./CinematicHero";

// Self-contained custom SVG components for brand icons missing in local lucide-react
const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LaptopCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <line x1="2" x2="22" y1="20" y2="20" />
    <line x1="12" x2="12" y1="16" y2="20" />
    <path d="m10 9-2 2 2 2" />
    <path d="m14 9 2 2-2 2" />
  </svg>
);

const Braces = ({ size, color, style }) => (
  <span 
    className="inline-flex flex-row items-center whitespace-nowrap mr-2"
    style={{ 
      fontSize: "14px", 
      fontWeight: "700", 
      fontFamily: "'Space Mono', monospace", 
      color: color, 
      transition: "color 0.3s ease",
      ...style 
    }}
  >
    {"{ }"}
  </span>
);


/* ─────────────────────────── COMPACT DATA DATABASE ─────────────────────────── */
const NAV = ["About", "Achievements", "Projects", "Skills", "Contact"];

const PROJECTS = [
  { 
    title: "Pocket-Cloud", tag: "The ESP32 Drive", color: "#00ffff", 
    desc: "A compact cloud-inspired storage system built using ESP32 that enables wireless file access and management through IoT connectivity.",
    fullDesc: { 
      overview: "Pocket-Cloud is a compact, portable, cloud-inspired storage system built using the ESP32 microcontroller. The idea was to transform a small embedded device into a lightweight personal storage platform that allows users to wirelessly access, manage, and transfer files.",
      principle: ["ESP32 initializes Wi‑Fi communication.", "The microSD storage is mounted.", "ESP32 hosts a lightweight web interface.", "Users connect through a browser.", "Files can be uploaded, viewed, managed, and downloaded wirelessly."],
      features: ["Portable cloud-inspired storage system", "Wireless file access through Wi‑Fi", "Self-hosted file management", "Compact and low-cost design"],
      github: "https://github.com/ricardo-lopez-codes/Pocket-Cloud-An-ESP32-Based-Cloud-Storage",
      linkedin: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_esp32-iot-embeddedsystems-activity-7464283819676819456-9-QO"
    }
  },
  { 
    title: "Field-Eye", tag: "Smart Agriculture Rover", color: "#39ff14", 
    desc: "An intelligent agriculture rover designed for smart farming, featuring plant health monitoring, autonomous navigation, and smart pesticide spraying.",
    fullDesc: { 
      overview: "Field-Eye is an intelligent semi-autonomous agriculture rover designed to bring smart automation into farming through Embedded Systems, IoT, and sensor-based monitoring.", 
      principle: ["Sensors scan crop conditions.", "Autonomous path navigation is triggered.", "Obstacles are detected via ultrasonics.", "Smart spraying mechanism is engaged."], 
      features: ["Smart agriculture rover platform", "Semi-autonomous navigation", "Ultrasonic-based obstacle detection", "Smart pesticide spraying mechanism"],
      github: "https://github.com/ricardo-lopez-codes/Field-Eye",
      linkedin: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_agritech-robotics-embeddedsystems-activity-7464223820841701376--o48"
    }
  },
  { 
    title: "Vital Drive", tag: "IoT-based EV Safety", color: "#ff6700", 
    desc: "An IoT-based EV safety system that monitors the driver's health in real-time, detects cardiac emergencies, and triggers vehicle safety measures.",
    fullDesc: { 
      overview: "Vital Drive is an IoT-based intelligent safety system designed specifically for Electric Vehicles (EVs), aimed at enhancing driver safety through real-time health monitoring and emergency response mechanisms.",
      principle: ["The wearable continuously monitors the driver's ECG signals.", "Health data is transmitted to the ESP32 system using Wi‑Fi.", "The ESP32 analyzes incoming information.", "If abnormal conditions are detected, emergency logic activates.", "The system initiates vehicle safety measures and alerts."],
      features: ["Real-time driver health monitoring", "ECG-based emergency detection", "Vehicle safety response system", "GPS-based location tracking", "Emergency alert transmission"],
      github: "https://github.com/ricardo-lopez-codes/Vital-Drive",
      linkedin: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathon-hackera25-sathyabama-activity-7355335339625914370-1IkM"
    }
  }
];

const ACHIEVEMENTS = [
  { 
    year: "2025", title: "Techno-a-thon 1st Prize", color: "#22d3ee", 
    desc: "Secured 1st Place at this national-level hackathon held at St. Joseph's College of Engineering. I developed an agricultural rover designed to automate field monitoring and optimize crop health management, significantly reducing manual labor.", 
    link: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathonwinner-ai-robotics-activity-7375127809779843072-RPGD" 
  },
  { 
    year: "2025", title: "Protothon 2K25 Track Prize", color: "#fbbf24", 
    desc: "Awarded a track prize at HITS, Kelambakkam, for engineering a battery-operated semiconductor cooling system. This project addressed thermal management inefficiencies in portable electronics using an energy-efficient Peltier-based architecture.", 
    link: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_protothon2k25-hackathon-embeddedsystems-activity-7464227765521649664-hPRa" 
  },
  { 
    year: "2025", title: "MICRONEX '25 Runner-up", color: "#f87171", 
    desc: "Achieved 2nd prize for a research-based paper presentation. The project introduced a novel method to harvest and convert wasted mechanical energy from ambient vibrations and movement into usable electrical power.", 
    link: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_secondprize-paperpresentation-micronex25-activity-7355352055764377600-RUW_" 
  },
  { 
    year: "2024", title: "SIH 2024 Finalist", color: "#818cf8", 
    desc: "Selected as a college-level finalist for the Smart India Hackathon. I presented the same energy-harvesting research, demonstrating its scalability for industrial applications and sustainable power generation.", 
    link: null 
  },
  { 
    year: "2024", title: "Open Sesame 2nd Prize", color: "#34d399", 
    desc: "Won 2nd prize in the Poetry Writing competition at SRMIST Ramapuram. This win reflects my passion for creative expression and articulating complex ideas in a compelling narrative format.", 
    link: "https://www.linkedin.com/posts/ricardo-alvaro-lopez_poetrywriting-creativewriting-srmistramapuram-activity-7355661242914467840-fVuV" 
  }
];

const SKILLS_DATA = {
  "Programming": ["Python", "C", "C++", "Embedded C", "Arduino", "SQL", "HTML", "CSS", "JavaScript"],
  "Embedded Systems": ["RTOS Basics", "Firmware Development", "Hardware–Software Integration", "PCB Design", "Circuit Design & Prototyping", "ESP32", "Arduino"],
  "Firmware & Protocols": ["Embedded System Debugging", "Device Driver Integration", "Firmware Testing", "UART", "SPI", "I2C", "HTTP/Web Servers", "MQTT"]
};

const SKILLS_CATEGORIES_DISPLAY = {
  "Programming": "PROGRAMMING",
  "Embedded Systems": "EMBEDDED",
  "Firmware & Protocols": "FIRMWARE/PROTOCOLS"
};

/* ─────────────────────────── HOOKS & CONTROLLERS ─────────────────────────── */
function useTypewriter(text, speed = 40, active = true) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, active]);
  return out;
}

function useScrollSpy() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const fn = () => {
      const tokens = NAV.map(n => n.toLowerCase());
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = tokens[0];
      tokens.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return active;
}

/* ─────────────────────────── GLOBAL CSS INJECTION ─────────────────────────── */
function GlobalStyles() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Space+Mono&family=Syne:wght@500;700&display=swap";
    document.head.appendChild(link);
    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Syne', sans-serif; }
      html { scroll-behavior: smooth; }
      body { color: #94a3b8; overflow-x: hidden; }
      
      .glass { 
        background: rgba(15, 23, 42, 0.65); 
        backdrop-filter: blur(30px); 
        -webkit-backdrop-filter: blur(30px); 
        border: 1px solid rgba(34, 211, 238, 0.3); 
        border-radius: 16px; 
        transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s; 
      }
      .glass:hover { border-color: rgba(34, 211, 238, 0.5); box-shadow: 0 0 20px rgba(34, 211, 238, 0.15); }
      
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
      }
      
      .terminal-screen {
        background: rgba(10, 15, 30, 0.8) !important;
        border: 1px solid rgba(34, 211, 238, 0.25) !important;
        box-shadow: inset 0 0 30px rgba(34, 211, 238, 0.05), 0 0 20px rgba(2, 6, 23, 0.5) !important;
        border-radius: 12px;
        font-family: 'Space Mono', monospace !important;
        width: 100%;
        overflow: hidden;
        transition: border-color 0.3s, box-shadow 0.3s;
      }
      .terminal-screen:hover {
        border-color: rgba(34, 211, 238, 0.45) !important;
        box-shadow: inset 0 0 35px rgba(34, 211, 238, 0.08), 0 0 25px rgba(34, 211, 238, 0.15) !important;
      }
      
      .terminal-header {
        background: rgba(15, 23, 42, 0.9);
        border-bottom: 1px solid rgba(34, 211, 238, 0.15);
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .terminal-circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      
      .terminal-stream-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
        padding: 45px 50px;
      }

      .terminal-stream-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.1rem;
        color: #e2e8f0;
        margin-bottom: 12px;
        opacity: 0;
        transform: translateY(8px);
        font-family: 'Space Mono', 'Courier New', 'Fira Code', monospace !important;
      }
      
      .boot-active .terminal-stream-item {
        animation: terminalBoot 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      
      @keyframes terminalBoot {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .project-card {
        cursor: pointer;
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 280px;
        transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
      }
      .project-card:hover {
        border: 1px solid #22d3ee !important;
        box-shadow: 0 0 20px rgba(34, 211, 238, 0.3) !important;
        transform: translateY(-4px);
      }
      
      .nav-link {
        position: relative;
        color: #94a3b8;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        transition: color 0.3s ease;
        padding-bottom: 6px;
      }
      .nav-link:hover { color: #22d3ee; }
      .nav-link.nav-active { color: #22d3ee !important; font-weight: 700; }
      .nav-link.nav-active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #22d3ee;
        border-radius: 2px;
        animation: slideIn 0.3s ease forwards;
      }
      
      .hero-flex-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 80px;
        width: 100%;
      }
      
      .hero-col-left {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .hero-col-mid {
        flex: 0 0 52%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: -40px;
      }
      
      .hero-col-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .contact-flex-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 50px;
        width: 100%;
        text-align: left;
      }
      
      .contact-col-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
      
      .contact-col-right {
        flex: 1.2;
      }

      @keyframes slideIn {
        from { width: 0; left: 50%; }
        to { width: 100%; left: 0; }
      }
      @keyframes blink { 50% { opacity: 0; } }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .contact-sidebar-container {
        display: flex;
        gap: 50px;
        align-items: stretch;
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        padding: 45px 50px;
        background: rgba(15, 23, 42, 0.55) !important;
        border: 1px solid rgba(34, 211, 238, 0.3) !important;
        box-shadow: 0 0 25px rgba(34, 211, 238, 0.05) !important;
        border-radius: 16px;
      }
      .contact-sidebar-left {
        flex: 0 0 200px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        padding-right: 40px;
      }
      .contact-sidebar-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        gap: 24px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);
  return null;
}

/* ─────────────────────────── ENTRANCE BOOTLOADER MODAL ─────────────────────────── */
// EntranceModal removed in favor of unified typewriter bootloader

/* ─────────────────────────── SOCIAL & ACTION BUTTONS ─────────────────────────── */
function SocialButton({ title, url, icon: Icon, isDownload = false, styles }) {
  const [hovered, setHovered] = useState(false);
  const color = styles?.color || "#22d3ee";
  const borderColor = styles?.borderColor || color;
  const hoverBg = styles?.hoverBg || "rgba(34, 211, 238, 0.1)";
  const glowColor = styles?.glowColor || color;
  const shadowColor = styles?.shadowColor || "rgba(34, 211, 238, 0.05)";
  const hoverColor = styles?.hoverColor || color;

  return (
    <a
      href={url}
      target={isDownload ? "_self" : "_blank"}
      download={isDownload ? "Ricardo_Lopez_Resume.pdf" : undefined}
      rel={isDownload ? undefined : "noreferrer"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 24px",
        background: hovered ? hoverBg : "transparent",
        border: `1px solid ${borderColor}`,
        borderRadius: "8px",
        color: hovered ? hoverColor : color,
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "14px",
        transition: "all 0.3s ease",
        width: "100%",
        boxShadow: hovered ? `0 0 15px ${glowColor}` : `0 0 10px ${shadowColor}`
      }}
    >
      <Icon size={18} color={hovered ? hoverColor : color} style={{ transition: "color 0.3s ease" }} />
      <span style={{ letterSpacing: "1.5px", fontFamily: "'Space Mono', monospace" }}>{title}</span>
    </a>
  );
}

/* ─────────────────────────── ACHIEVEMENT ACCORDION CARD ─────────────────────────── */
function AchievementCard({ ach }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div 
      className="glass" 
      onClick={() => setExpanded(!expanded)}
      style={{ 
        padding: "25px 35px", 
        display: "flex", 
        flexDirection: "column", 
        gap: "15px", 
        cursor: "pointer", 
        borderLeft: `4px solid ${ach.color}`,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" 
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", color: ach.color, fontWeight: 700, fontSize: "15px" }}>[{ach.year}]</span>
          <h3 style={{ fontSize: "1.3rem", color: "#fff", fontFamily: "'Orbitron', sans-serif", fontWeight: "600" }}>{ach.title}</h3>
        </div>
        <ChevronDown 
          size={18} 
          color="#22d3ee" 
          style={{ 
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)", 
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" 
          }} 
        />
      </div>

      <div 
        style={{ 
          maxHeight: expanded ? "350px" : "0px", 
          opacity: expanded ? 1 : 0, 
          overflow: "hidden", 
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.5", marginTop: "10px" }}>{ach.desc}</p>
        
        {ach.link && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <a 
              href={ach.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "rgba(34, 211, 238, 0.1)",
                  border: "1px solid #22d3ee",
                  color: "#22d3ee",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontFamily: "'Space Mono', monospace",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#22d3ee";
                  e.currentTarget.style.color = "#020617";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(34, 211, 238, 0.1)";
                  e.currentTarget.style.color = "#22d3ee";
                }}
              >
                View LinkedIn
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────── PROJECT DETAIL MODAL COMPONENT ─────────────────────────── */
function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;
  const { title, tag, color, fullDesc } = project;
  if (!fullDesc) return null;

  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        background: "rgba(2, 6, 23, 0.8)", 
        backdropFilter: "blur(20px)", 
        WebkitBackdropFilter: "blur(20px)",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        zIndex: 9999, 
        padding: "20px" 
      }}
      onClick={onClose}
    >
      <div 
        className="glass" 
        style={{ 
          maxWidth: "800px", 
          width: "100%", 
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "40px", 
          position: "relative", 
          background: "rgba(15, 23, 42, 0.9)", 
          border: `1px solid ${color}`,
          boxShadow: `0 0 35px ${color}33`,
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          borderRadius: "20px",
          scrollbarWidth: "thin",
          scrollbarColor: `${color} rgba(15, 23, 42, 0.8)`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          style={{ 
            position: "absolute", 
            top: 20, 
            right: 20, 
            background: "rgba(255, 255, 255, 0.05)", 
            border: "1px solid rgba(255, 255, 255, 0.1)", 
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#94a3b8", 
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = color;
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          }}
        >
          <X size={20} />
        </button>

        {/* Title and Tag (Underlined Dynamically) */}
        <div style={{ borderBottom: `2px solid ${color}`, paddingBottom: "18px" }}>
          <h3 style={{ fontSize: "2rem", color: color, fontFamily: "'Orbitron', sans-serif", fontWeight: 700, margin: 0, textShadow: `0 0 10px ${color}44` }}>{title}</h3>
          <h4 style={{ fontSize: "1.1rem", color: "#e2e8f0", fontFamily: "'Space Mono', monospace", marginTop: "6px", letterSpacing: "1px" }}>{tag}</h4>
        </div>

        {/* 1. Project Overview */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px" }}>
          <h3 style={{ fontSize: "1.3rem", color: color, fontFamily: "'Orbitron', sans-serif", fontWeight: 600, marginBottom: "12px", letterSpacing: "1px", textShadow: `0 0 8px ${color}22` }}>PROJECT OVERVIEW</h3>
          <p style={{ color: "#cbd5e1", fontSize: "1.2rem", lineHeight: "1.6", textAlign: "justify" }}>
            {fullDesc.overview}
          </p>
        </div>

        {/* 2. Working Principle */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px" }}>
          <h3 style={{ fontSize: "1.3rem", color: color, fontFamily: "'Orbitron', sans-serif", fontWeight: 600, marginBottom: "12px", letterSpacing: "1px", textShadow: `0 0 8px ${color}22` }}>WORKING PRINCIPLE</h3>
          <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: color, fontSize: "1.2rem", lineHeight: "1.5" }}>
            {fullDesc.principle.map((step, idx) => (
              <li key={idx} style={{ paddingLeft: "8px", color: color }}>
                <span style={{ color: "#cbd5e1" }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 3. Key Features */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px" }}>
          <h3 style={{ fontSize: "1.3rem", color: color, fontFamily: "'Orbitron', sans-serif", fontWeight: 600, marginBottom: "12px", letterSpacing: "1px", textShadow: `0 0 8px ${color}22` }}>KEY FEATURES</h3>
          <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "12px", paddingLeft: 0 }}>
            {fullDesc.features.map((feat, idx) => (
              <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#cbd5e1", fontSize: "1.2rem", lineHeight: "1.5" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "4px" }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Action Buttons */}
        {(fullDesc.github || fullDesc.linkedin) && (
          <div style={{ display: "flex", gap: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "25px", marginTop: "5px" }}>
            {fullDesc.github && (
              <a 
                href={fullDesc.github} 
                target="_blank" 
                rel="noreferrer" 
                className="no-underline flex-1"
              >
                <button
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    border: `1px solid ${color}`,
                    color: color,
                    padding: "14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "700",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "2px",
                    transition: "all 0.3s ease",
                    width: "100%",
                    boxShadow: `0 0 10px ${color}22`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = "#020617";
                    e.currentTarget.style.background = color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
                    e.currentTarget.style.boxShadow = `0 0 10px ${color}22`;
                  }}
                >
                  GITHUB REPO
                </button>
              </a>
            )}

            {fullDesc.linkedin && (
              <a 
                href={fullDesc.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="no-underline flex-1"
              >
                <button
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    border: `1px solid ${color}`,
                    color: color,
                    padding: "14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "700",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "2px",
                    transition: "all 0.3s ease",
                    width: "100%",
                    boxShadow: `0 0 10px ${color}22`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = "#020617";
                    e.currentTarget.style.background = color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.background = "rgba(15, 23, 42, 0.65)";
                    e.currentTarget.style.boxShadow = `0 0 10px ${color}22`;
                  }}
                >
                  LINKEDIN
                </button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────── MAIN PORTFOLIO COMPONENT ────────────────────────────────── */
export default function DesktopPortfolio() {
  const activeSection = useScrollSpy();
  const titleText = useTypewriter("Embedded Systems and IOT Developer", 50, true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [isBooted, setIsBooted] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBooted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    const target = terminalRef.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div style={{ background: "radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%)", minHeight: "100vh", position: "relative", paddingBottom: "120px" }} className="w-full select-none min-h-screen">
      <ParticleBackground />
      <GlobalStyles />
      
      {/* FULL-SCREEN 100VH CINEMATIC INTRO / HERO SECTION */}
      <CinematicHero />

      {/* NAVBAR: Ricardo_Lopez // BRANDING + SEMI-TRANSPARENT HUD */}
      <nav className="sticky top-0 z-50 w-full bg-[#0b0f19]/70 backdrop-blur-md border-b border-white/10">
        <div 
          style={{ 
            maxWidth: "1240px", 
            margin: "0 auto", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "20px 45px", 
            width: "100%"
          }}
        >
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: "#22d3ee", letterSpacing: "2px", fontSize: "16px" }}>Ricardo_Lopez //</div>
          
          {/* Desktop Links (No hamburger, 100% desktop optimized) */}
          <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
            {NAV.map(item => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a 
                  key={item} 
                  href={'#' + item.toLowerCase()} 
                  className={`nav-link ${isActive ? 'nav-active' : ''}`}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "1px"
                  }}
                >
                  {item.toUpperCase()}
                </a>
              );
            })}
            
            <a href="/Ricardo.Resume.pdf" download="Ricardo_Lopez_Resume.pdf" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "rgba(34, 211, 238, 0.1)",
                  border: "1px solid #22d3ee",
                  color: "#22d3ee",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginLeft: "15px",
                  fontFamily: "'Space Mono', monospace",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#22d3ee";
                  e.currentTarget.style.color = "#020617";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(34, 211, 238, 0.1)";
                  e.currentTarget.style.color = "#22d3ee";
                }}
              >
                DOWNLOAD RESUME
              </button>
            </a>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "1240px", margin: "40px auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        
        {/* HERO SECTION: WIDE CENTERED 3-COLUMN STRUCTURE (1/3, 1/3, 1/3) */}
        <section id="about" className="scroll-mt-20 pt-16" style={{ paddingBottom: "50px" }}>
          <div className="hero-flex-container">
            
            {/* COLUMN 1: LEFT PHOTO FRAME */}
            <div className="hero-col-left">
              <div 
                className="glass" 
                style={{ 
                  width: "380px", 
                  height: "380px", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  border: "2px solid rgba(34, 211, 238, 0.35)", 
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(15, 23, 42, 0.7)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <img 
                  src="/Gemini_Generated_Image_5y7vhi5y7vhi5y7v.jpg" 
                  alt="Ricardo Lopez"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            </div>

            {/* COLUMN 2: CENTER INFO & HEADLINE */}
            <div className="hero-col-mid pt-28 self-start">
              <h1 style={{ fontSize: "5rem", fontWeight: "700", fontFamily: "'Orbitron', sans-serif", color: "#fff", letterSpacing: "-2px", lineHeight: "1.0", margin: "0 0 15px 0" }}>
                RICARDO LOPEZ
              </h1>
              <div style={{ minHeight: "40px", marginBottom: "15px" }}>
                <p style={{ fontSize: "1.2rem", color: "#22d3ee", fontFamily: "'Space Mono', monospace", fontWeight: 600, letterSpacing: "1px" }}>
                  {titleText}
                </p>
              </div>

              <p style={{ color: "#94a3b8", fontSize: "1.2rem", lineHeight: "1.5", textAlign: "left", marginBottom: "0" }}>
                I'm Ricardo Lopez, an Electronics and Communication Engineering student passionate about building intelligent systems that solve real-world problems. I specialize in IoT, Embedded Systems, AI, and Computer Vision, creating projects that combine hardware and software innovation. My work ranges from smart EV health monitoring and accident prediction systems to energy and automation solutions. I enjoy turning ideas into practical technology through hands-on development, teamwork, and continuous learning.
              </p>
            </div>

            {/* COLUMN 3: RIGHT ACTION & SOCIAL BUTTONS STACK (Duplicate Resume removed, brand profiles added) */}
            <div className="hero-col-right">
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "280px", alignItems: "stretch", marginLeft: "-20px" }}>
                <SocialButton 
                  title="LINKEDIN" 
                  url="https://www.linkedin.com/in/ricardo-alvaro-lopez" 
                  icon={Linkedin} 
                  styles={{
                    color: "#0077B5",
                    hoverBg: "rgba(0, 119, 181, 0.1)",
                    glowColor: "#0077B5",
                    shadowColor: "rgba(0, 119, 181, 0.05)"
                  }}
                />
                <SocialButton 
                  title="GITHUB" 
                  url="https://github.com/ricardo-lopez-codes" 
                  icon={Github} 
                  styles={{
                    color: "#e4e4e7",
                    borderColor: "#3f3f46",
                    hoverBg: "rgba(39, 39, 42, 0.5)",
                    glowColor: "rgba(228, 228, 231, 0.2)",
                    shadowColor: "rgba(228, 228, 231, 0.05)"
                  }}
                />
                <SocialButton 
                  title="LEETCODE" 
                  url="https://leetcode.com/u/ricardo_lopez/" 
                  icon={Code} 
                  styles={{
                    color: "#FFA116",
                    hoverBg: "rgba(255, 161, 22, 0.1)",
                    glowColor: "#FFA116",
                    shadowColor: "rgba(255, 161, 22, 0.05)"
                  }}
                />
                <SocialButton 
                  title="GEEKSFORGEEKS" 
                  url="https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit" 
                  icon={Braces} 
                  styles={{
                    color: "#2F8D46",
                    hoverBg: "rgba(47, 141, 70, 0.1)",
                    glowColor: "#2F8D46",
                    shadowColor: "rgba(47, 141, 70, 0.05)"
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS BLOCK */}
        <section style={{ padding: "55px 0" }}>
          <h2 id="achievements" className="scroll-mt-24" style={{ fontSize: "2.2rem", fontFamily: "'Orbitron', sans-serif", marginBottom: "40px", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>// RECOGNIZED MILESTONES</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {ACHIEVEMENTS.map((ach, idx) => (
              <AchievementCard key={idx} ach={ach} />
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION GRID */}
        <section style={{ padding: "55px 0" }}>
          <h2 id="projects" className="scroll-mt-24" style={{ fontSize: "2.2rem", fontFamily: "'Orbitron', sans-serif", marginBottom: "40px", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>PROJECTS //</h2>
          <div className="projects-grid">
            {PROJECTS.map((proj, idx) => {
              const isHovered = hoveredProject === idx;
              return (
                <div 
                  key={idx} 
                  className="glass project-card" 
                  onClick={() => setActiveProjectModal(proj)}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between",
                    minHeight: "350px",
                    borderColor: isHovered ? proj.color : "rgba(34, 211, 238, 0.3)",
                    boxShadow: isHovered ? `0 0 20px ${proj.color}44` : "none",
                    transform: isHovered ? "translateY(-4px)" : "none",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.5rem", color: proj.color, fontWeight: "bold", fontFamily: "'Orbitron', sans-serif", marginBottom: "10px" }}>{proj.title}</h3>
                    <h4 style={{ fontSize: "1.1rem", color: "#fff", fontFamily: "'Space Mono', monospace", marginBottom: "15px" }}>{proj.tag}</h4>
                    <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: "1.6" }}>{proj.desc}</p>
                  </div>
                  <div style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProjectModal(proj);
                      }}
                      style={{
                        background: "rgba(15, 23, 42, 0.65)",
                        backdropFilter: "blur(30px)",
                        WebkitBackdropFilter: "blur(30px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: "700",
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: "2px",
                        transition: "all 0.3s ease",
                        width: "100%",
                        boxShadow: "none"
                      }}
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.borderColor = proj.color;
                        e.currentTarget.style.color = proj.color;
                        e.currentTarget.style.boxShadow = `0 0 15px ${proj.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS CONTAINER NODES */}
        <section ref={terminalRef} style={{ padding: "55px 0" }}>
          <h2 id="skills" className="scroll-mt-24" style={{ fontSize: "2.2rem", fontFamily: "'Orbitron', sans-serif", marginBottom: "40px", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>TECHNICAL SKILLS //</h2>
          
          {/* Mainframe System Status Terminal Container */}
          <div className={`terminal-screen ${isBooted ? "boot-active" : ""}`}>
            {/* Terminal Window Header Bar */}
            <div className="terminal-header">
              <div className="terminal-circle" style={{ backgroundColor: "#ef4444" }}></div>
              <div className="terminal-circle" style={{ backgroundColor: "#eab308" }}></div>
              <div className="terminal-circle" style={{ backgroundColor: "#22c55e" }}></div>
              <span style={{ fontSize: "13px", fontFamily: "'Space Mono', 'Courier New', 'Fira Code', monospace", color: "#22d3ee", letterSpacing: "1.5px", marginLeft: "15px", fontWeight: "600" }}>
                TECHNICAL_STACK // SYSTEM_DASHBOARD
              </span>
            </div>

            {/* Terminal Inner 3-Column Grid Data Stream */}
            <div className="terminal-stream-grid">
              {Object.entries(SKILLS_DATA).map(([category, skills], idx) => {
                return (
                  <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.2rem", fontFamily: "'Space Mono', 'Courier New', 'Fira Code', monospace", color: "#22d3ee", fontWeight: "700", marginBottom: "25px", display: "flex", alignItems: "center", letterSpacing: "1.5px" }}>
                      {SKILLS_CATEGORIES_DISPLAY[category] || category.toUpperCase()}
                      <span style={{ color: "#22d3ee", animation: "blink 1.2s step-end infinite", marginLeft: "4px", fontWeight: "bold" }}>_</span>
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {skills.map((sk, i) => {
                        const delayIndex = idx * 6 + i; // stagger across columns
                        return (
                          <div 
                            key={i} 
                            className="terminal-stream-item"
                            style={{ animationDelay: `${delayIndex * 40}ms` }}
                          >
                            <span style={{ color: "rgba(34, 211, 238, 0.4)", fontFamily: "'Space Mono', 'Courier New', 'Fira Code', monospace", fontWeight: "bold" }}>&gt;&gt;&gt;</span>
                            <span style={{ fontWeight: "600", fontFamily: "'Space Mono', 'Courier New', 'Fira Code', monospace", color: "#e2e8f0" }}>{sk}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SIDEBAR-ACTION CONTACT ME SECTION */}
        <section style={{ padding: "55px 0 20px 0", display: "flex", justifyContent: "center" }}>
          <div className="contact-sidebar-container">
            
            {/* LEFT ZONE: Vertical Social Buttons Stack */}
            <div className="contact-sidebar-left">
              {[
                { title: "LINKEDIN", url: "https://www.linkedin.com/in/ricardo-alvaro-lopez" },
                { title: "GITHUB", url: "https://github.com/ricardo-lopez-codes" },
                { title: "LEETCODE", url: "https://leetcode.com/u/ricardo_lopez/" },
                { title: "GEEKSFORGEEKS", url: "https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit" }
              ].map((btn, idx) => (
                <a 
                  key={idx}
                  href={btn.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <button
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "1px solid #22d3ee",
                      color: "#22d3ee",
                      padding: "12px 18px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "700",
                      cursor: "pointer",
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "1px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 10px rgba(34, 211, 238, 0.03)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#22d3ee";
                      e.currentTarget.style.color = "#020617";
                      e.currentTarget.style.boxShadow = "0 0 15px #22d3ee";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#22d3ee";
                      e.currentTarget.style.boxShadow = "0 0 10px rgba(34, 211, 238, 0.03)";
                    }}
                  >
                    {btn.title}
                  </button>
                </a>
              ))}
            </div>

            {/* RIGHT ZONE: Info, Bio & Send Email Button */}
            <div className="contact-sidebar-right">
              <h2 id="contact" className="scroll-mt-24" style={{ fontSize: "2.2rem", fontFamily: "'Orbitron', sans-serif", color: "#fff", letterSpacing: "1.5px", margin: 0 }}>CONTACT ME</h2>
              
              <p style={{ color: "#cbd5e1", fontSize: "1.15rem", lineHeight: "1.6", margin: 0 }}>
                I am open to discussing new opportunities, collaborations, or technical projects. Feel free to reach out via email or connect with me on my professional social profiles.
              </p>
              
              <a 
                href="mailto:rl6930@srmist.edu.in"
                style={{ textDecoration: "none", width: "100%", maxWidth: "250px", marginTop: "5px" }}
              >
                <button
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "2px solid #22d3ee",
                    color: "#22d3ee",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "1.5px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 0 15px rgba(34, 211, 238, 0.15)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#22d3ee";
                    e.currentTarget.style.color = "#020617";
                    e.currentTarget.style.boxShadow = "0 0 25px #22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#22d3ee";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(34, 211, 238, 0.15)";
                  }}
                >
                  SEND EMAIL
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* DETAILED PROJECTS MODAL */}
      {activeProjectModal && (
        <ProjectDetailModal 
          project={activeProjectModal} 
          onClose={() => setActiveProjectModal(null)} 
        />
      )}

    </div>
  );
}
