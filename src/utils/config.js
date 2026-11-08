import { Star, Trophy, FileText, Cpu, Terminal, Wifi, Code } from "lucide-react";

export const NAV = ["About", "Projects", "Achievements", "Skills", "Contact"];

export const PROJECTS = [
  {
    title: "PestRover SemiAuto",
    desc: "Agricultural precision autonomous rover utilizing an integrated firmware-driven sensor matrix.",
    fullDesc: "An advanced semi-autonomous agricultural tracking rover built natively on a 4-wheel differential drive vehicle architecture. Side motors are interconnected via isolated high-current motor drivers to execute precision edge navigation. Integrates environmental sensor modules for macro data logging and automated deep field monitoring.",
    tags: ["Embedded C", "Hardware Design", "4-Wheel Drive", "Motor Drivers"],
    accent: "#22d3ee",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  },
  {
    title: "CarbonKlick",
    desc: "Real-time macro carbon emissions tracking footprint firmware stack and network matrix layer.",
    fullDesc: "An Internet-of-Things (IoT) remote data monitoring network focused on indexing local environmental carbon output parameters. Features deep localized calibration nodes utilizing custom microcontrollers, pushing processed emissions arrays to a low-overhead real-time cloud data pipeline over encrypted communication layers.",
    tags: ["IoT Arrays", "Carbon Logs", "Firmware", "Sensors"],
    accent: "#34d399",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Eye-Pulse",
    desc: "Intraocular pressure monitoring system using advanced ultrasound pulse echo technologies.",
    fullDesc: "A medical hardware integration system designed to compute fine intraocular pressure milestones non-invasively. Utilizes high-frequency ultrasound parsing echo metrics based on low-latency logic flowcharts rather than traditional optical or mechanical transduction, lowering mechanical component overhead and improving system accuracy thresholds.",
    tags: ["Ultrasound UI", "Logic Flow", "Signal Parsing", "Biomedical"],
    accent: "#a78bfa",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Mann-Nanban",
    desc: "AI-integrated agroforestry planning system optimized with smart sensory arrays.",
    fullDesc: "An AI-assisted planning tool designed to maximize soil yield optimization parameters in complex agroforestry plots. Combines deep hardware sensory probes logging macro chemical values with predictive software modeling, providing agricultural administrators with automated deployment layouts and dynamic resource scheduling metrics.",
    tags: ["Agroforestry", "Predictive AI", "Microcontrollers", "Sensors"],
    accent: "#f43f5e",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Cryptera",
    desc: "Decentralized Web3 Ethereum-based network protocol for cross-border remittance tasks.",
    fullDesc: "A secure blockchain-based international payment system layer built on the Ethereum virtual machinery framework. Features low-gas optimization schemes to carry out wealth processing and asset migration rules, enabling cross-border value balancing without intermediate processing gatekeepers.",
    tags: ["Solidity", "Web3 Core", "Ethereum Network", "Remittance"],
    accent: "#fbbf24",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com"
  }
];

export const ACHIEVEMENTS = [
  { year: "2024", title: "Smart India Hackathon Winner", desc: "Emerged as Grand Finale track champion with Team Alpha Century for producing the Intelligent Bio-Monitoring Assistance System.", icon: Star, color: "#34d399" },
  { year: "2025", title: "Technoathon National Champion", desc: "Secured 1st Place overall at the national competitive hackathon event hosted by St. Joseph College of Engineering.", icon: Trophy, color: "#22d3ee" },
  { year: "2025", title: "Shadow Project Internship Selection", desc: "Selected for and cleared the highly competitive industry training track at Beau Roi.", icon: FileText, color: "#a78bfa" }
];

export const SKILL_CATS = [
  { name: "Embedded Systems", icon: Cpu, color: "#22d3ee", skills: ["ESP32", "ESP8266", "STM32", "Arduino", "RISC-V", "Circuit Design", "PCB Layout", "4-Wheel Differential Drive"] },
  { name: "Firmware & Protocols", icon: Terminal, color: "#34d399", skills: ["FreeRTOS", "Zephyr", "Bare-Metal C", "Device Drivers", "JTAG Debugging", "MQTT", "BLE 5.0", "LoRaWAN", "Zigbee", "CAN Bus", "ModBus"] },
  { name: "Sensor Matrix Calibration", icon: Wifi, color: "#a78bfa", skills: ["NPK Sensors", "MQ-Series Gas Probes", "Ultrasonic Transducers", "Pulse Echo Logic"] },
  { name: "Core Languages", icon: Code, color: "#22d3ee", skills: ["C / C++", "Python", "Solidity", "Rust", "JavaScript", "Assembly"] }
];
