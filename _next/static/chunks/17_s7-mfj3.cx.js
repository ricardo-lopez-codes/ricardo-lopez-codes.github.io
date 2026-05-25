(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let o=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.createContext)({}),s=(0,r.forwardRef)(({color:e,size:t,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:d,iconNode:c,...p},g)=>{let{size:x=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:u=""}=(0,r.useContext)(a)??{},b=s??h?24*Number(i??m)/Number(t??x):i??m;return(0,r.createElement)("svg",{ref:g,...n,width:t??x??n.width,height:t??x??n.height,stroke:e??f,strokeWidth:b,className:o("lucide",u,l),...!d&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(p)&&{"aria-hidden":"true"},...p},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(d)?d:[d]])}),l=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...a},l)=>(0,r.createElement)(s,{ref:l,iconNode:t,className:o(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...a}));return n.displayName=i(e),n},d=l("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),c=l("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]),p=l("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),g=l("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function x(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r=e.current;if(!r)return;let o=r.getContext("2d");if(!o)return;let i=[],n=r.width=window.innerWidth,a=r.height=window.innerHeight;for(let e=0;e<80;e++)i.push({x:Math.random()*n,y:Math.random()*a,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,radius:2*Math.random()+1,alpha:.4*Math.random()+.2});let s=()=>{r&&(n=r.width=window.innerWidth,a=r.height=window.innerHeight)};window.addEventListener("resize",s);let l={x:null,y:null,radius:150},d=e=>{l.x=e.clientX,l.y=e.clientY},c=()=>{l.x=null,l.y=null};window.addEventListener("mousemove",d),window.addEventListener("mouseleave",c);let p=()=>{o.clearRect(0,0,n,a),i.forEach(e=>{if(e.x+=e.vx,e.y+=e.vy,e.x<0?e.x=n:e.x>n&&(e.x=0),e.y<0?e.y=a:e.y>a&&(e.y=0),null!==l.x&&null!==l.y){let t=e.x-l.x,r=e.y-l.y,o=Math.sqrt(t*t+r*r);if(o<l.radius){let i=(l.radius-o)/l.radius;e.x+=t/o*i*1.5,e.y+=r/o*i*1.5}}o.beginPath(),o.arc(e.x,e.y,e.radius,0,2*Math.PI),o.fillStyle="#ffffff",o.globalAlpha=e.alpha,o.fill()}),t=requestAnimationFrame(p)};return p(),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",d),window.removeEventListener("mouseleave",c),cancelAnimationFrame(t)}},[]),(0,t.jsx)("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",backgroundColor:"transparent"}})}let m=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),(0,t.jsx)("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),h=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,t.jsx)("rect",{width:"4",height:"12",x:"2",y:"9"}),(0,t.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),f=({size:e,color:r,style:o})=>(0,t.jsx)("span",{className:"inline-flex flex-row items-center whitespace-nowrap mr-2",style:{fontSize:"14px",fontWeight:"700",fontFamily:"'Space Mono', monospace",color:r,transition:"color 0.3s ease",...o},children:"{ }"}),u=["About","Achievements","Projects","Skills","Contact"],b=[{title:"Pocket-Cloud",tag:"The ESP32 Drive",color:"#00ffff",desc:"A compact cloud-inspired storage system built using ESP32 that enables wireless file access and management through IoT connectivity.",fullDesc:{overview:"Pocket-Cloud is a compact, portable, cloud-inspired storage system built using the ESP32 microcontroller. The idea was to transform a small embedded device into a lightweight personal storage platform that allows users to wirelessly access, manage, and transfer files.",principle:["ESP32 initializes Wi‑Fi communication.","The microSD storage is mounted.","ESP32 hosts a lightweight web interface.","Users connect through a browser.","Files can be uploaded, viewed, managed, and downloaded wirelessly."],features:["Portable cloud-inspired storage system","Wireless file access through Wi‑Fi","Self-hosted file management","Compact and low-cost design"],github:"https://github.com/ricardo-lopez-codes/Pocket-Cloud-An-ESP32-Based-Cloud-Storage",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_esp32-iot-embeddedsystems-activity-7464283819676819456-9-QO"}},{title:"Field-Eye",tag:"Smart Agriculture Rover",color:"#39ff14",desc:"An intelligent agriculture rover designed for smart farming, featuring plant health monitoring, autonomous navigation, and smart pesticide spraying.",fullDesc:{overview:"Field-Eye is an intelligent semi-autonomous agriculture rover designed to bring smart automation into farming through Embedded Systems, IoT, and sensor-based monitoring.",principle:["Sensors scan crop conditions.","Autonomous path navigation is triggered.","Obstacles are detected via ultrasonics.","Smart spraying mechanism is engaged."],features:["Smart agriculture rover platform","Semi-autonomous navigation","Ultrasonic-based obstacle detection","Smart pesticide spraying mechanism"],github:"https://github.com/ricardo-lopez-codes/Field-Eye",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_agritech-robotics-embeddedsystems-activity-7464223820841701376--o48"}},{title:"Vital Drive",tag:"IoT-based EV Safety",color:"#ff6700",desc:"An IoT-based EV safety system that monitors the driver's health in real-time, detects cardiac emergencies, and triggers vehicle safety measures.",fullDesc:{overview:"Vital Drive is an IoT-based intelligent safety system designed specifically for Electric Vehicles (EVs), aimed at enhancing driver safety through real-time health monitoring and emergency response mechanisms.",principle:["The wearable continuously monitors the driver's ECG signals.","Health data is transmitted to the ESP32 system using Wi‑Fi.","The ESP32 analyzes incoming information.","If abnormal conditions are detected, emergency logic activates.","The system initiates vehicle safety measures and alerts."],features:["Real-time driver health monitoring","ECG-based emergency detection","Vehicle safety response system","GPS-based location tracking","Emergency alert transmission"],github:"https://github.com/ricardo-lopez-codes/Vital-Drive",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathon-hackera25-sathyabama-activity-7355335339625914370-1IkM"}}],y=[{year:"2025",title:"Techno-a-thon 1st Prize",color:"#22d3ee",desc:"Secured 1st Place at this national-level hackathon held at St. Joseph's College of Engineering. I developed an agricultural rover designed to automate field monitoring and optimize crop health management, significantly reducing manual labor.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathonwinner-ai-robotics-activity-7375127809779843072-RPGD"},{year:"2025",title:"Protothon 2K25 Track Prize",color:"#fbbf24",desc:"Awarded a track prize at HITS, Kelambakkam, for engineering a battery-operated semiconductor cooling system. This project addressed thermal management inefficiencies in portable electronics using an energy-efficient Peltier-based architecture.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_protothon2k25-hackathon-embeddedsystems-activity-7464227765521649664-hPRa"},{year:"2025",title:"MICRONEX '25 Runner-up",color:"#f87171",desc:"Achieved 2nd prize for a research-based paper presentation. The project introduced a novel method to harvest and convert wasted mechanical energy from ambient vibrations and movement into usable electrical power.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_secondprize-paperpresentation-micronex25-activity-7355352055764377600-RUW_"},{year:"2024",title:"SIH 2024 Finalist",color:"#818cf8",desc:"Selected as a college-level finalist for the Smart India Hackathon. I presented the same energy-harvesting research, demonstrating its scalability for industrial applications and sustainable power generation.",link:null},{year:"2024",title:"Open Sesame 2nd Prize",color:"#34d399",desc:"Won 2nd prize in the Poetry Writing competition at SRMIST Ramapuram. This win reflects my passion for creative expression and articulating complex ideas in a compelling narrative format.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_poetrywriting-creativewriting-srmistramapuram-activity-7355661242914467840-fVuV"}],w={Programming:["Python","C","C++","Embedded C","Arduino","SQL","HTML","CSS","JavaScript"],"Embedded Systems":["RTOS Basics","Firmware Development","Hardware–Software Integration","PCB Design","Circuit Design & Prototyping","ESP32","Arduino"],"Firmware & Protocols":["Embedded System Debugging","Device Driver Integration","Firmware Testing","UART","SPI","I2C","HTTP/Web Servers","MQTT"]},v={Programming:"PROGRAMMING","Embedded Systems":"EMBEDDED","Firmware & Protocols":"FIRMWARE/PROTOCOLS"};function j(){return(0,r.useEffect)(()=>{let e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Space+Mono&family=Syne:wght@500;700&display=swap",document.head.appendChild(e);let t=document.createElement("style");return t.textContent=`
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
    `,document.head.appendChild(t),()=>{document.head.contains(e)&&document.head.removeChild(e),document.head.contains(t)&&document.head.removeChild(t)}},[]),null}function S({title:e,url:o,icon:i,isDownload:n=!1,styles:a}){let[s,l]=(0,r.useState)(!1),d=a?.color||"#22d3ee",c=a?.borderColor||d,p=a?.hoverBg||"rgba(34, 211, 238, 0.1)",g=a?.glowColor||d,x=a?.shadowColor||"rgba(34, 211, 238, 0.05)",m=a?.hoverColor||d;return(0,t.jsxs)("a",{href:o,target:n?"_self":"_blank",download:n?"Ricardo_Lopez_Resume.pdf":void 0,rel:n?void 0:"noreferrer",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"12px",padding:"14px 24px",background:s?p:"transparent",border:`1px solid ${c}`,borderRadius:"8px",color:s?m:d,textDecoration:"none",fontWeight:"700",fontSize:"14px",transition:"all 0.3s ease",width:"100%",boxShadow:s?`0 0 15px ${g}`:`0 0 10px ${x}`},children:[(0,t.jsx)(i,{size:18,color:s?m:d,style:{transition:"color 0.3s ease"}}),(0,t.jsx)("span",{style:{letterSpacing:"1.5px",fontFamily:"'Space Mono', monospace"},children:e})]})}function k({ach:e}){let[o,i]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"glass",onClick:()=>i(!o),style:{padding:"25px 35px",display:"flex",flexDirection:"column",gap:"15px",cursor:"pointer",borderLeft:`4px solid ${e.color}`,transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,t.jsxs)("span",{style:{fontFamily:"'Space Mono', monospace",color:e.color,fontWeight:700,fontSize:"15px"},children:["[",e.year,"]"]}),(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:"#fff",fontFamily:"'Orbitron', sans-serif",fontWeight:"600"},children:e.title})]}),(0,t.jsx)(g,{size:18,color:"#22d3ee",style:{transform:o?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}})]}),(0,t.jsxs)("div",{style:{maxHeight:o?"350px":"0px",opacity:+!!o,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",flexDirection:"column",gap:"15px"},onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("p",{style:{color:"#94a3b8",fontSize:"1.1rem",lineHeight:"1.5",marginTop:"10px"},children:e.desc}),e.link&&(0,t.jsx)("div",{style:{display:"flex",justifyContent:"flex-start"},children:(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,t.jsx)("button",{style:{background:"rgba(34, 211, 238, 0.1)",border:"1px solid #22d3ee",color:"#22d3ee",padding:"8px 16px",borderRadius:"6px",fontSize:"12px",fontWeight:"700",cursor:"pointer",fontFamily:"'Space Mono', monospace",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(34, 211, 238, 0.1)",e.currentTarget.style.color="#22d3ee"},children:"View LinkedIn"})})})]})]})}function T({project:e,onClose:r}){if(!e)return null;let{title:o,tag:i,color:n,fullDesc:a}=e;return a?(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(2, 6, 23, 0.8)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},onClick:r,children:(0,t.jsxs)("div",{className:"glass",style:{maxWidth:"800px",width:"100%",maxHeight:"85vh",overflowY:"auto",padding:"40px",position:"relative",background:"rgba(15, 23, 42, 0.9)",border:`1px solid ${n}`,boxShadow:`0 0 35px ${n}33`,display:"flex",flexDirection:"column",gap:"28px",borderRadius:"20px",scrollbarWidth:"thin",scrollbarColor:`${n} rgba(15, 23, 42, 0.8)`},onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{onClick:r,style:{position:"absolute",top:20,right:20,background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.color=n,e.currentTarget.style.borderColor=n,e.currentTarget.style.background="rgba(255, 255, 255, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.color="#94a3b8",e.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",e.currentTarget.style.background="rgba(255, 255, 255, 0.05)"},children:(0,t.jsx)(p,{size:20})}),(0,t.jsxs)("div",{style:{borderBottom:`2px solid ${n}`,paddingBottom:"18px"},children:[(0,t.jsx)("h3",{style:{fontSize:"2rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:700,margin:0,textShadow:`0 0 10px ${n}44`},children:o}),(0,t.jsx)("h4",{style:{fontSize:"1.1rem",color:"#e2e8f0",fontFamily:"'Space Mono', monospace",marginTop:"6px",letterSpacing:"1px"},children:i})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"PROJECT OVERVIEW"}),(0,t.jsx)("p",{style:{color:"#cbd5e1",fontSize:"1.2rem",lineHeight:"1.6",textAlign:"justify"},children:a.overview})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"WORKING PRINCIPLE"}),(0,t.jsx)("ol",{style:{paddingLeft:"20px",display:"flex",flexDirection:"column",gap:"10px",color:n,fontSize:"1.2rem",lineHeight:"1.5"},children:a.principle.map((e,r)=>(0,t.jsx)("li",{style:{paddingLeft:"8px",color:n},children:(0,t.jsx)("span",{style:{color:"#cbd5e1"},children:e})},r))})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"KEY FEATURES"}),(0,t.jsx)("ul",{style:{listStyleType:"none",display:"flex",flexDirection:"column",gap:"12px",paddingLeft:0},children:a.features.map((e,r)=>(0,t.jsxs)("li",{style:{display:"flex",gap:"12px",alignItems:"flex-start",color:"#cbd5e1",fontSize:"1.2rem",lineHeight:"1.5"},children:[(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"4px"},children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}),(0,t.jsx)("span",{children:e})]},r))})]}),(a.github||a.linkedin)&&(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"25px",marginTop:"5px"},children:[a.github&&(0,t.jsx)("a",{href:a.github,target:"_blank",rel:"noreferrer",className:"no-underline flex-1",children:(0,t.jsx)("button",{style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:`1px solid ${n}`,color:n,padding:"14px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:`0 0 10px ${n}22`},onMouseEnter:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color="#020617",e.currentTarget.style.background=n,e.currentTarget.style.boxShadow=`0 0 20px ${n}`},onMouseLeave:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color=n,e.currentTarget.style.background="rgba(15, 23, 42, 0.65)",e.currentTarget.style.boxShadow=`0 0 10px ${n}22`},children:"GITHUB REPO"})}),a.linkedin&&(0,t.jsx)("a",{href:a.linkedin,target:"_blank",rel:"noreferrer",className:"no-underline flex-1",children:(0,t.jsx)("button",{style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:`1px solid ${n}`,color:n,padding:"14px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:`0 0 10px ${n}22`},onMouseEnter:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color="#020617",e.currentTarget.style.background=n,e.currentTarget.style.boxShadow=`0 0 20px ${n}`},onMouseLeave:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color=n,e.currentTarget.style.background="rgba(15, 23, 42, 0.65)",e.currentTarget.style.boxShadow=`0 0 10px ${n}22`},children:"LINKEDIN"})})]})]})}):null}function E(){let[e,o]=(0,r.useState)(!0),[i,n]=(0,r.useState)(0),[a,s]=(0,r.useState)(""),[l,p]=(0,r.useState)(""),[g,E]=(0,r.useState)(""),[C,z]=(0,r.useState)(""),[I,R]=(0,r.useState)(!1),L=function(){let[e,t]=(0,r.useState)("about");return(0,r.useEffect)(()=>{let e=()=>{let e=u.map(e=>e.toLowerCase()),r=window.scrollY+.35*window.innerHeight,o=e[0];e.forEach(e=>{let t=document.getElementById(e);t&&t.offsetTop<=r&&(o=e)}),t(o)};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)},[]),e}(),N=function(e,t=40,o=!0){let[i,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{if(!o)return;let r=0,i=setInterval(()=>{r++,n(e.slice(0,r)),r>=e.length&&clearInterval(i)},t);return()=>clearInterval(i)},[e,t,o]),i}("Embedded Systems and IOT Developer",50,!e),[F,M]=(0,r.useState)(null),[O,B]=(0,r.useState)(null),[W,D]=(0,r.useState)(!1),A=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e,t=1,r=0,o=()=>{1===t?r<41?(s(e=>e+"// CONNECTING TO DIGITAL SYSTEM FRAMEWORK".charAt(r)),r++,e=setTimeout(o,15)):(t=2,r=0,e=setTimeout(o,150)):2===t?r<52?(p(e=>e+"// LOADING REPOSITORIES AND CIRCUIT ARCHITECTURES...".charAt(r)),r++,e=setTimeout(o,15)):(t=3,r=0,e=setTimeout(o,150)):3===t?r<51?(E(e=>e+"// ARCHITECTURE VALIDATED: AT 100% RESPONSIVE VIEW.".charAt(r)),r++,e=setTimeout(o,15)):(t=4,r=0,e=setTimeout(o,150)):4===t&&(r<33?(z(e=>e+"// WELCOME TO THE CORE PORTFOLIO.".charAt(r)),r++,e=setTimeout(o,15)):R(!0))};return e=setTimeout(o,100),()=>clearTimeout(e)},[]),(0,r.useEffect)(()=>{if(!I)return;let e=setInterval(()=>{n(t=>t>=100?(clearInterval(e),100):t+1)},8);return()=>clearInterval(e)},[I]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(D(!0),e.unobserve(t.target))},{threshold:.15}),t=A.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]),(0,t.jsxs)("div",{style:{background:"radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%)",minHeight:"100vh",position:"relative",paddingBottom:"120px"},className:"w-full select-none min-h-screen",children:[(0,t.jsx)(x,{}),(0,t.jsx)(j,{}),e&&(0,t.jsx)("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] px-6 select-none",children:(0,t.jsxs)("div",{className:"glass max-w-xl w-full",style:{padding:"40px",background:"rgba(15, 23, 42, 0.95)",borderColor:"rgba(0, 210, 255, 0.2)",boxShadow:"0 0 40px rgba(0, 210, 255, 0.15)",boxSizing:"border-box",fontFamily:"'Space Mono', monospace",color:"#00d2ff"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"25px",borderBottom:"1px solid rgba(0, 210, 255, 0.2)",paddingBottom:"15px"},children:[(0,t.jsx)(c,{size:20,color:"#00d2ff"}),(0,t.jsx)("span",{style:{fontSize:"14px",fontWeight:700,letterSpacing:"1.5px"},children:"BOOT_LOADER // TERMINAL_ENTRANCE"})]}),(0,t.jsxs)("div",{style:{minHeight:"130px",display:"flex",flexDirection:"column",textAlign:"left"},className:"font-mono text-xs sm:text-sm",children:[a&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:a}),l&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:l}),g&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:g}),C&&(0,t.jsx)("div",{style:{lineHeight:"1.8"},children:C})]}),(0,t.jsx)("div",{className:"h-10 w-full","aria-hidden":"true"}),(0,t.jsx)("div",{className:"w-full flex justify-center",children:i<100?(0,t.jsxs)("div",{className:"w-full h-12 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 h-full bg-[#00d2ff]/20",style:{width:`${i}%`}}),(0,t.jsxs)("span",{className:"font-mono text-xs text-[#00d2ff] relative z-10",children:[i,"%"]})]}):(0,t.jsx)("button",{onClick:()=>o(!1),className:"w-full h-12 bg-transparent text-[#00d2ff] border border-[#00d2ff] font-mono font-bold rounded-lg tracking-widest text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:bg-[#00d2ff] hover:text-[#0B0B0C] flex items-center justify-center cursor-pointer",children:"ENTER PORTFOLIO //"})})]})}),(0,t.jsx)("nav",{className:"sticky top-0 z-50 w-full bg-[#0b0f19]/70 backdrop-blur-md border-b border-white/10",children:(0,t.jsxs)("div",{style:{maxWidth:"1240px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 45px",width:"100%"},children:[(0,t.jsx)("div",{style:{fontFamily:"'Orbitron', sans-serif",fontWeight:700,color:"#22d3ee",letterSpacing:"2px",fontSize:"16px"},children:"Ricardo_Lopez //"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"35px",alignItems:"center"},children:[u.map(e=>{let r=L===e.toLowerCase();return(0,t.jsx)("a",{href:"#"+e.toLowerCase(),className:`nav-link ${r?"nav-active":""}`,style:{fontSize:"14px",fontWeight:600,letterSpacing:"1px"},children:e.toUpperCase()},e)}),(0,t.jsx)("a",{href:"/Ricardo.Resume.pdf",download:"Ricardo_Lopez_Resume.pdf",style:{textDecoration:"none"},children:(0,t.jsx)("button",{style:{background:"rgba(34, 211, 238, 0.1)",border:"1px solid #22d3ee",color:"#22d3ee",padding:"8px 16px",borderRadius:"6px",fontSize:"13px",fontWeight:"700",cursor:"pointer",marginLeft:"15px",fontFamily:"'Space Mono', monospace",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(34, 211, 238, 0.1)",e.currentTarget.style.color="#22d3ee"},children:"DOWNLOAD RESUME"})})]})]})}),(0,t.jsxs)("main",{style:{maxWidth:"1240px",margin:"40px auto",padding:"0 24px",position:"relative",zIndex:2},children:[(0,t.jsx)("section",{id:"about",className:"scroll-mt-24 pt-44",style:{paddingBottom:"50px"},children:(0,t.jsxs)("div",{className:"hero-flex-container",children:[(0,t.jsx)("div",{className:"hero-col-left",children:(0,t.jsx)("div",{className:"glass",style:{width:"380px",height:"380px",borderRadius:"24px",overflow:"hidden",border:"2px solid rgba(34, 211, 238, 0.35)",boxShadow:"0 0 30px rgba(34, 211, 238, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(15, 23, 42, 0.7)",backdropFilter:"blur(10px)"},children:(0,t.jsx)("img",{src:"/Gemini_Generated_Image_5y7vhi5y7vhi5y7v.jpg",alt:"Ricardo Lopez",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.08)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1)"})})}),(0,t.jsxs)("div",{className:"hero-col-mid pt-28 self-start",children:[(0,t.jsx)("h1",{style:{fontSize:"5rem",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",color:"#fff",letterSpacing:"-2px",lineHeight:"1.0",margin:"0 0 15px 0"},children:"RICARDO LOPEZ"}),(0,t.jsx)("div",{style:{minHeight:"40px",marginBottom:"15px"},children:(0,t.jsx)("p",{style:{fontSize:"1.2rem",color:"#22d3ee",fontFamily:"'Space Mono', monospace",fontWeight:600,letterSpacing:"1px"},children:N})}),(0,t.jsx)("p",{style:{color:"#94a3b8",fontSize:"1.2rem",lineHeight:"1.5",textAlign:"left",marginBottom:"0"},children:"I'm Ricardo Lopez, an Electronics and Communication Engineering student passionate about building intelligent systems that solve real-world problems. I specialize in IoT, Embedded Systems, AI, and Computer Vision, creating projects that combine hardware and software innovation. My work ranges from smart EV health monitoring and accident prediction systems to energy and automation solutions. I enjoy turning ideas into practical technology through hands-on development, teamwork, and continuous learning."})]}),(0,t.jsx)("div",{className:"hero-col-right",children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%",maxWidth:"280px",alignItems:"stretch",marginLeft:"-20px"},children:[(0,t.jsx)(S,{title:"LINKEDIN",url:"https://www.linkedin.com/in/ricardo-alvaro-lopez",icon:h,styles:{color:"#0077B5",hoverBg:"rgba(0, 119, 181, 0.1)",glowColor:"#0077B5",shadowColor:"rgba(0, 119, 181, 0.05)"}}),(0,t.jsx)(S,{title:"GITHUB",url:"https://github.com/ricardo-lopez-codes",icon:m,styles:{color:"#e4e4e7",borderColor:"#3f3f46",hoverBg:"rgba(39, 39, 42, 0.5)",glowColor:"rgba(228, 228, 231, 0.2)",shadowColor:"rgba(228, 228, 231, 0.05)"}}),(0,t.jsx)(S,{title:"LEETCODE",url:"https://leetcode.com/u/ricardo_lopez/",icon:d,styles:{color:"#FFA116",hoverBg:"rgba(255, 161, 22, 0.1)",glowColor:"#FFA116",shadowColor:"rgba(255, 161, 22, 0.05)"}}),(0,t.jsx)(S,{title:"GEEKSFORGEEKS",url:"https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit",icon:f,styles:{color:"#2F8D46",hoverBg:"rgba(47, 141, 70, 0.1)",glowColor:"#2F8D46",shadowColor:"rgba(47, 141, 70, 0.05)"}})]})})]})}),(0,t.jsxs)("section",{style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"achievements",className:"scroll-mt-24",style:{fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"// RECOGNIZED MILESTONES"}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:y.map((e,r)=>(0,t.jsx)(k,{ach:e},r))})]}),(0,t.jsxs)("section",{style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"projects",className:"scroll-mt-24",style:{fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"PROJECTS //"}),(0,t.jsx)("div",{className:"projects-grid",children:b.map((e,r)=>{let o=F===r;return(0,t.jsxs)("div",{className:"glass project-card",onClick:()=>B(e),onMouseEnter:()=>M(r),onMouseLeave:()=>M(null),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"350px",borderColor:o?e.color:"rgba(34, 211, 238, 0.3)",boxShadow:o?`0 0 20px ${e.color}44`:"none",transform:o?"translateY(-4px)":"none",transition:"all 0.3s ease"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{style:{fontSize:"1.5rem",color:e.color,fontWeight:"bold",fontFamily:"'Orbitron', sans-serif",marginBottom:"10px"},children:e.title}),(0,t.jsx)("h4",{style:{fontSize:"1.1rem",color:"#fff",fontFamily:"'Space Mono', monospace",marginBottom:"15px"},children:e.tag}),(0,t.jsx)("p",{style:{color:"#94a3b8",fontSize:"1rem",lineHeight:"1.6"},children:e.desc})]}),(0,t.jsx)("div",{style:{marginTop:"25px",display:"flex",justifyContent:"center"},children:(0,t.jsx)("button",{onClick:t=>{t.stopPropagation(),B(e)},style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",padding:"12px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:"none"},onMouseEnter:t=>{t.stopPropagation(),t.currentTarget.style.borderColor=e.color,t.currentTarget.style.color=e.color,t.currentTarget.style.boxShadow=`0 0 15px ${e.color}`},onMouseLeave:e=>{e.stopPropagation(),e.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)",e.currentTarget.style.color="#fff",e.currentTarget.style.boxShadow="none"},children:"DETAILS"})})]},r)})})]}),(0,t.jsxs)("section",{ref:A,style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"skills",className:"scroll-mt-24",style:{fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"TECHNICAL SKILLS //"}),(0,t.jsxs)("div",{className:`terminal-screen ${W?"boot-active":""}`,children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#ef4444"}}),(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#eab308"}}),(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#22c55e"}}),(0,t.jsx)("span",{style:{fontSize:"13px",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#22d3ee",letterSpacing:"1.5px",marginLeft:"15px",fontWeight:"600"},children:"TECHNICAL_STACK // SYSTEM_DASHBOARD"})]}),(0,t.jsx)("div",{className:"terminal-stream-grid",children:Object.entries(w).map(([e,r],o)=>(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)("h3",{style:{fontSize:"1.2rem",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#22d3ee",fontWeight:"700",marginBottom:"25px",display:"flex",alignItems:"center",letterSpacing:"1.5px"},children:[v[e]||e.toUpperCase(),(0,t.jsx)("span",{style:{color:"#22d3ee",animation:"blink 1.2s step-end infinite",marginLeft:"4px",fontWeight:"bold"},children:"_"})]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:r.map((e,r)=>{let i=6*o+r;return(0,t.jsxs)("div",{className:"terminal-stream-item",style:{animationDelay:`${40*i}ms`},children:[(0,t.jsx)("span",{style:{color:"rgba(34, 211, 238, 0.4)",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",fontWeight:"bold"},children:">>>"}),(0,t.jsx)("span",{style:{fontWeight:"600",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#e2e8f0"},children:e})]},r)})})]},o))})]})]}),(0,t.jsx)("section",{style:{padding:"55px 0 20px 0",display:"flex",justifyContent:"center"},children:(0,t.jsxs)("div",{className:"contact-sidebar-container",children:[(0,t.jsx)("div",{className:"contact-sidebar-left",children:[{title:"LINKEDIN",url:"https://www.linkedin.com/in/ricardo-alvaro-lopez"},{title:"GITHUB",url:"https://github.com/ricardo-lopez-codes"},{title:"LEETCODE",url:"https://leetcode.com/u/ricardo_lopez/"},{title:"GEEKSFORGEEKS",url:"https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit"}].map((e,r)=>(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",width:"100%"},children:(0,t.jsx)("button",{style:{width:"100%",background:"transparent",border:"1px solid #22d3ee",color:"#22d3ee",padding:"12px 18px",borderRadius:"8px",fontSize:"13px",fontWeight:"700",cursor:"pointer",fontFamily:"'Orbitron', sans-serif",letterSpacing:"1px",transition:"all 0.3s ease",boxShadow:"0 0 10px rgba(34, 211, 238, 0.03)"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617",e.currentTarget.style.boxShadow="0 0 15px #22d3ee"},onMouseLeave:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.color="#22d3ee",e.currentTarget.style.boxShadow="0 0 10px rgba(34, 211, 238, 0.03)"},children:e.title})},r))}),(0,t.jsxs)("div",{className:"contact-sidebar-right",children:[(0,t.jsx)("h2",{id:"contact",className:"scroll-mt-24",style:{fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",color:"#fff",letterSpacing:"1.5px",margin:0},children:"CONTACT ME"}),(0,t.jsx)("p",{style:{color:"#cbd5e1",fontSize:"1.15rem",lineHeight:"1.6",margin:0},children:"I am open to discussing new opportunities, collaborations, or technical projects. Feel free to reach out via email or connect with me on my professional social profiles."}),(0,t.jsx)("a",{href:"mailto:rl6930@srmist.edu.in",style:{textDecoration:"none",width:"100%",maxWidth:"250px",marginTop:"5px"},children:(0,t.jsx)("button",{style:{width:"100%",background:"transparent",border:"2px solid #22d3ee",color:"#22d3ee",padding:"14px 28px",borderRadius:"8px",fontSize:"14px",fontWeight:"700",cursor:"pointer",fontFamily:"'Orbitron', sans-serif",letterSpacing:"1.5px",transition:"all 0.3s ease",boxShadow:"0 0 15px rgba(34, 211, 238, 0.15)"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617",e.currentTarget.style.boxShadow="0 0 25px #22d3ee"},onMouseLeave:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.color="#22d3ee",e.currentTarget.style.boxShadow="0 0 15px rgba(34, 211, 238, 0.15)"},children:"SEND EMAIL"})})]})]})})]}),O&&(0,t.jsx)(T,{project:O,onClose:()=>B(null)})]})}let C=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),(0,t.jsx)("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),z=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),(0,t.jsx)("rect",{width:"4",height:"12",x:"2",y:"9"}),(0,t.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),I=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}),(0,t.jsx)("line",{x1:"2",x2:"22",y1:"20",y2:"20"}),(0,t.jsx)("line",{x1:"12",x2:"12",y1:"16",y2:"20"}),(0,t.jsx)("path",{d:"m10 9-2 2 2 2"}),(0,t.jsx)("path",{d:"m14 9 2 2-2 2"})]}),R=["About","Achievements","Projects","Skills","Contact"],L=[{title:"Pocket-Cloud",tag:"The ESP32 Drive",color:"#00ffff",desc:"A compact cloud-inspired storage system built using ESP32 that enables wireless file access and management through IoT connectivity.",fullDesc:{overview:"Pocket-Cloud is a compact, portable, cloud-inspired storage system built using the ESP32 microcontroller. The idea was to transform a small embedded device into a lightweight personal storage platform that allows users to wirelessly access, manage, and transfer files.",principle:["ESP32 initializes Wi‑Fi communication.","The microSD storage is mounted.","ESP32 hosts a lightweight web interface.","Users connect through a browser.","Files can be uploaded, viewed, managed, and downloaded wirelessly."],features:["Portable cloud-inspired storage system","Wireless file access through Wi‑Fi","Self-hosted file management","Compact and low-cost design"],github:"https://github.com/ricardo-lopez-codes/Pocket-Cloud-An-ESP32-Based-Cloud-Storage",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_esp32-iot-embeddedsystems-activity-7464283819676819456-9-QO"}},{title:"Field-Eye",tag:"Smart Agriculture Rover",color:"#39ff14",desc:"An intelligent agriculture rover designed for smart farming, featuring plant health monitoring, autonomous navigation, and smart pesticide spraying.",fullDesc:{overview:"Field-Eye is an intelligent semi-autonomous agriculture rover designed to bring smart automation into farming through Embedded Systems, IoT, and sensor-based monitoring.",principle:["Sensors scan crop conditions.","Autonomous path navigation is triggered.","Obstacles are detected via ultrasonics.","Smart spraying mechanism is engaged."],features:["Smart agriculture rover platform","Semi-autonomous navigation","Ultrasonic-based obstacle detection","Smart pesticide spraying mechanism"],github:"https://github.com/ricardo-lopez-codes/Field-Eye",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_agritech-robotics-embeddedsystems-activity-7464223820841701376--o48"}},{title:"Vital Drive",tag:"IoT-based EV Safety",color:"#ff6700",desc:"An IoT-based EV safety system that monitors the driver's health in real-time, detects cardiac emergencies, and triggers vehicle safety measures.",fullDesc:{overview:"Vital Drive is an IoT-based intelligent safety system designed specifically for Electric Vehicles (EVs), aimed at enhancing driver safety through real-time health monitoring and emergency response mechanisms.",principle:["The wearable continuously monitors the driver's ECG signals.","Health data is transmitted to the ESP32 system using Wi‑Fi.","The ESP32 analyzes incoming information.","If abnormal conditions are detected, emergency logic activates.","The system initiates vehicle safety measures and alerts."],features:["Real-time driver health monitoring","ECG-based emergency detection","Vehicle safety response system","GPS-based location tracking","Emergency alert transmission"],github:"https://github.com/ricardo-lopez-codes/Vital-Drive",linkedin:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathon-hackera25-sathyabama-activity-7355335339625914370-1IkM"}}],N=[{year:"2025",title:"Techno-a-thon 1st Prize",color:"#22d3ee",desc:"Secured 1st Place at this national-level hackathon held at St. Joseph's College of Engineering. I developed an agricultural rover designed to automate field monitoring and optimize crop health management, significantly reducing manual labor.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_hackathonwinner-ai-robotics-activity-7375127809779843072-RPGD"},{year:"2025",title:"Protothon 2K25 Track Prize",color:"#fbbf24",desc:"Awarded a track prize at HITS, Kelambakkam, for engineering a battery-operated semiconductor cooling system. This project addressed thermal management inefficiencies in portable electronics using an energy-efficient Peltier-based architecture.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_protothon2k25-hackathon-embeddedsystems-activity-7464227765521649664-hPRa"},{year:"2025",title:"MICRONEX '25 Runner-up",color:"#f87171",desc:"Achieved 2nd prize for a research-based paper presentation. The project introduced a novel method to harvest and convert wasted mechanical energy from ambient vibrations and movement into usable electrical power.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_secondprize-paperpresentation-micronex25-activity-7355352055764377600-RUW_"},{year:"2024",title:"SIH 2024 Finalist",color:"#818cf8",desc:"Selected as a college-level finalist for the Smart India Hackathon. I presented the same energy-harvesting research, demonstrating its scalability for industrial applications and sustainable power generation.",link:null},{year:"2024",title:"Open Sesame 2nd Prize",color:"#34d399",desc:"Won 2nd prize in the Poetry Writing competition at SRMIST Ramapuram. This win reflects my passion for creative expression and articulating complex ideas in a compelling narrative format.",link:"https://www.linkedin.com/posts/ricardo-alvaro-lopez_poetrywriting-creativewriting-srmistramapuram-activity-7355661242914467840-fVuV"}],F={Programming:["Python","C","C++","Embedded C","Arduino","SQL","HTML","CSS","JavaScript"],"Embedded Systems":["RTOS Basics","Firmware Development","Hardware–Software Integration","PCB Design","Circuit Design & Prototyping","ESP32","Arduino"],"Firmware & Protocols":["Embedded System Debugging","Device Driver Integration","Firmware Testing","UART","SPI","I2C","HTTP/Web Servers","MQTT"]},M={Programming:"PROGRAMMING","Embedded Systems":"EMBEDDED","Firmware & Protocols":"FIRMWARE/PROTOCOLS"};function O(){return(0,r.useEffect)(()=>{let e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Space+Mono&family=Syne:wght@500;700&display=swap",document.head.appendChild(e);let t=document.createElement("style");return t.textContent=`
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
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
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
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px 20px;
        width: 100%;
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
        flex-direction: column;
        gap: 30px;
        align-items: stretch;
        width: 100%;
        padding: 24px;
        background: rgba(15, 23, 42, 0.55) !important;
        border: 1px solid rgba(34, 211, 238, 0.3) !important;
        box-shadow: 0 0 25px rgba(34, 211, 238, 0.05) !important;
        border-radius: 16px;
      }
      .contact-sidebar-left {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding-bottom: 24px;
        width: 100%;
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
    `,document.head.appendChild(t),()=>{document.head.contains(e)&&document.head.removeChild(e),document.head.contains(t)&&document.head.removeChild(t)}},[]),null}function B({ach:e}){let[o,i]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"glass",onClick:()=>i(!o),style:{padding:"25px 35px",display:"flex",flexDirection:"column",gap:"15px",cursor:"pointer",borderLeft:`4px solid ${e.color}`,transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,t.jsxs)("span",{style:{fontFamily:"'Space Mono', monospace",color:e.color,fontWeight:700,fontSize:"15px"},children:["[",e.year,"]"]}),(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:"#fff",fontFamily:"'Orbitron', sans-serif",fontWeight:"600",minWidth:"190px",width:"190px",display:"inline-block"},children:e.title})]}),(0,t.jsx)(g,{size:18,color:"#22d3ee",style:{transform:o?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}})]}),(0,t.jsxs)("div",{style:{maxHeight:o?"350px":"0px",opacity:+!!o,overflow:"hidden",transition:"all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",flexDirection:"column",gap:"15px"},onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("p",{style:{color:"#94a3b8",fontSize:"1.1rem",lineHeight:"1.5",marginTop:"10px"},children:e.desc}),e.link&&(0,t.jsx)("div",{style:{display:"flex",justifyContent:"flex-start"},children:(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,t.jsx)("button",{style:{background:"rgba(34, 211, 238, 0.1)",border:"1px solid #22d3ee",color:"#22d3ee",padding:"8px 16px",borderRadius:"6px",fontSize:"12px",fontWeight:"700",cursor:"pointer",fontFamily:"'Space Mono', monospace",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(34, 211, 238, 0.1)",e.currentTarget.style.color="#22d3ee"},children:"View LinkedIn"})})})]})]})}function W({project:e,onClose:r}){if(!e)return null;let{title:o,tag:i,color:n,fullDesc:a}=e;return a?(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(2, 6, 23, 0.8)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},onClick:r,children:(0,t.jsxs)("div",{className:"glass",style:{maxWidth:"800px",width:"100%",maxHeight:"85vh",overflowY:"auto",padding:"40px",position:"relative",background:"rgba(15, 23, 42, 0.9)",border:`1px solid ${n}`,boxShadow:`0 0 35px ${n}33`,display:"flex",flexDirection:"column",gap:"28px",borderRadius:"20px",scrollbarWidth:"thin",scrollbarColor:`${n} rgba(15, 23, 42, 0.8)`},onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{onClick:r,style:{position:"absolute",top:20,right:20,background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.color=n,e.currentTarget.style.borderColor=n,e.currentTarget.style.background="rgba(255, 255, 255, 0.1)"},onMouseLeave:e=>{e.currentTarget.style.color="#94a3b8",e.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",e.currentTarget.style.background="rgba(255, 255, 255, 0.05)"},children:(0,t.jsx)(p,{size:20})}),(0,t.jsxs)("div",{style:{borderBottom:`2px solid ${n}`,paddingBottom:"18px"},children:[(0,t.jsx)("h3",{style:{fontSize:"2rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:700,margin:0,textShadow:`0 0 10px ${n}44`},children:o}),(0,t.jsx)("h4",{style:{fontSize:"1.1rem",color:"#e2e8f0",fontFamily:"'Space Mono', monospace",marginTop:"6px",letterSpacing:"1px"},children:i})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"PROJECT OVERVIEW"}),(0,t.jsx)("p",{style:{color:"#cbd5e1",fontSize:"1.2rem",lineHeight:"1.6",textAlign:"justify"},children:a.overview})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"WORKING PRINCIPLE"}),(0,t.jsx)("ol",{style:{paddingLeft:"20px",display:"flex",flexDirection:"column",gap:"10px",color:n,fontSize:"1.2rem",lineHeight:"1.5"},children:a.principle.map((e,r)=>(0,t.jsx)("li",{style:{paddingLeft:"8px",color:n},children:(0,t.jsx)("span",{style:{color:"#cbd5e1"},children:e})},r))})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"20px"},children:[(0,t.jsx)("h3",{style:{fontSize:"1.3rem",color:n,fontFamily:"'Orbitron', sans-serif",fontWeight:600,marginBottom:"12px",letterSpacing:"1px",textShadow:`0 0 8px ${n}22`},children:"KEY FEATURES"}),(0,t.jsx)("ul",{style:{listStyleType:"none",display:"flex",flexDirection:"column",gap:"12px",paddingLeft:0},children:a.features.map((e,r)=>(0,t.jsxs)("li",{style:{display:"flex",gap:"12px",alignItems:"flex-start",color:"#cbd5e1",fontSize:"1.2rem",lineHeight:"1.5"},children:[(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"4px"},children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}),(0,t.jsx)("span",{children:e})]},r))})]}),(a.github||a.linkedin)&&(0,t.jsxs)("div",{style:{display:"flex",gap:"20px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",paddingTop:"25px",marginTop:"5px"},children:[a.github&&(0,t.jsx)("a",{href:a.github,target:"_blank",rel:"noreferrer",className:"no-underline flex-1",children:(0,t.jsx)("button",{style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:`1px solid ${n}`,color:n,padding:"14px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:`0 0 10px ${n}22`},onMouseEnter:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color="#020617",e.currentTarget.style.background=n,e.currentTarget.style.boxShadow=`0 0 20px ${n}`},onMouseLeave:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color=n,e.currentTarget.style.background="rgba(15, 23, 42, 0.65)",e.currentTarget.style.boxShadow=`0 0 10px ${n}22`},children:"GITHUB REPO"})}),a.linkedin&&(0,t.jsx)("a",{href:a.linkedin,target:"_blank",rel:"noreferrer",className:"no-underline flex-1",children:(0,t.jsx)("button",{style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:`1px solid ${n}`,color:n,padding:"14px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:`0 0 10px ${n}22`},onMouseEnter:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color="#020617",e.currentTarget.style.background=n,e.currentTarget.style.boxShadow=`0 0 20px ${n}`},onMouseLeave:e=>{e.currentTarget.style.borderColor=n,e.currentTarget.style.color=n,e.currentTarget.style.background="rgba(15, 23, 42, 0.65)",e.currentTarget.style.boxShadow=`0 0 10px ${n}22`},children:"LINKEDIN"})})]})]})}):null}function D(){let[e,o]=(0,r.useState)(!0),[i,n]=(0,r.useState)(0),[a,s]=(0,r.useState)(""),[l,g]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),[f,u]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1),[w,v]=(0,r.useState)(!1),j=function(){let[e,t]=(0,r.useState)("about");return(0,r.useEffect)(()=>{let e=()=>{let e=R.map(e=>e.toLowerCase()),r=window.scrollY+.35*window.innerHeight,o=e[0];e.forEach(e=>{let t=document.getElementById(e);t&&t.offsetTop<=r&&(o=e)}),t(o)};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)},[]),e}(),S=function(e,t=40,o=!0){let[i,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{if(!o)return;let r=0,i=setInterval(()=>{r++,n(e.slice(0,r)),r>=e.length&&clearInterval(i)},t);return()=>clearInterval(i)},[e,t,o]),i}("Embedded Systems and IOT Developer",50,!e),[k,T]=(0,r.useState)(null),[E,D]=(0,r.useState)(null),[A,P]=(0,r.useState)(!1),H=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e,t=1,r=0,o=()=>{1===t?r<41?(s(e=>e+"// CONNECTING TO DIGITAL SYSTEM FRAMEWORK".charAt(r)),r++,e=setTimeout(o,15)):(t=2,r=0,e=setTimeout(o,150)):2===t?r<52?(g(e=>e+"// LOADING REPOSITORIES AND CIRCUIT ARCHITECTURES...".charAt(r)),r++,e=setTimeout(o,15)):(t=3,r=0,e=setTimeout(o,150)):3===t?r<51?(h(e=>e+"// ARCHITECTURE VALIDATED: AT 100% RESPONSIVE VIEW.".charAt(r)),r++,e=setTimeout(o,15)):(t=4,r=0,e=setTimeout(o,150)):4===t&&(r<33?(u(e=>e+"// WELCOME TO THE CORE PORTFOLIO.".charAt(r)),r++,e=setTimeout(o,15)):y(!0))};return e=setTimeout(o,100),()=>clearTimeout(e)},[]),(0,r.useEffect)(()=>{if(!b)return;let e=setInterval(()=>{n(t=>t>=100?(clearInterval(e),100):t+1)},8);return()=>clearInterval(e)},[b]),(0,r.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(P(!0),e.unobserve(t.target))},{threshold:.15}),t=H.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]),(0,t.jsxs)("div",{style:{background:"radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%)",minHeight:"100vh",position:"relative",paddingBottom:"120px"},className:"w-full select-none min-h-screen",children:[(0,t.jsx)(x,{}),(0,t.jsx)(O,{}),e&&(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%)",zIndex:9999,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"24px",fontFamily:"'Space Mono', monospace",color:"#00d2ff"},className:"select-none",children:(0,t.jsxs)("div",{className:"glass",style:{width:"100%",maxWidth:"650px",padding:"40px",background:"rgba(15, 23, 42, 0.95)",borderColor:"rgba(0, 210, 255, 0.2)",boxShadow:"0 0 40px rgba(0, 210, 255, 0.15)",boxSizing:"border-box"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"25px",borderBottom:"1px solid rgba(0, 210, 255, 0.2)",paddingBottom:"15px"},children:[(0,t.jsx)(c,{size:20,color:"#00d2ff"}),(0,t.jsx)("span",{style:{fontSize:"14px",fontWeight:700,letterSpacing:"1.5px"},children:"BOOT_LOADER // TERMINAL_ENTRANCE"})]}),(0,t.jsxs)("div",{style:{minHeight:"130px",display:"flex",flexDirection:"column"},className:"mb-14 text-left font-mono text-xs sm:text-sm text-[#00d2ff]",children:[a&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:a}),l&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:l}),m&&(0,t.jsx)("div",{style:{paddingBottom:"16px",lineHeight:"1.8"},children:m}),f&&(0,t.jsx)("div",{style:{lineHeight:"1.8"},children:f})]}),(0,t.jsx)("div",{className:"h-10 w-full","aria-hidden":"true"}),(0,t.jsx)("div",{className:"w-full flex justify-center",children:i<100?(0,t.jsxs)("div",{className:"w-full h-12 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 h-full bg-[#00d2ff]/20",style:{width:`${i}%`}}),(0,t.jsxs)("span",{className:"font-mono text-xs text-[#00d2ff] relative z-10",children:[i,"%"]})]}):(0,t.jsx)("button",{onClick:()=>o(!1),className:"w-full h-12 bg-transparent text-[#00d2ff] border border-[#00d2ff] font-mono font-bold rounded-lg tracking-widest text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:bg-[#00d2ff] hover:text-[#0B0B0C] flex items-center justify-center cursor-pointer",children:"ENTER PORTFOLIO //"})})]})}),(0,t.jsx)("nav",{className:"fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/10 px-6 py-4",style:{position:"fixed",top:0,left:0,width:"100%",zIndex:50,background:"rgba(11, 15, 25, 0.8)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",padding:"16px 24px"},children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"16px",width:"100%"},children:[(0,t.jsx)("button",{onClick:()=>v(!w),"aria-label":"Toggle Menu",style:{background:"transparent",border:"none",color:"#22d3ee",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",outline:"none"},children:w?(0,t.jsx)(p,{size:24}):(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),(0,t.jsx)("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),(0,t.jsx)("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),(0,t.jsx)("div",{style:{fontFamily:"'Space Mono', monospace",fontWeight:700,color:"#22d3ee",letterSpacing:"1.5px",fontSize:"16px"},children:"Ricardo_Lopez//"})]})}),w&&(0,t.jsxs)("div",{className:"fixed left-0 w-full glass",style:{position:"fixed",left:0,width:"100%",top:"57px",zIndex:49,background:"rgba(11, 15, 25, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(34, 211, 238, 0.3)",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.5)",padding:"24px",display:"flex",flexDirection:"column",gap:"20px"},children:[R.map(e=>{let r=j===e.toLowerCase();return(0,t.jsx)("a",{href:"#"+e.toLowerCase(),onClick:()=>v(!1),className:`nav-link ${r?"nav-active":""}`,style:{fontSize:"16px",fontWeight:600,letterSpacing:"2px",padding:"8px 0",width:"100%",textAlign:"left",display:"block"},children:e.toUpperCase()},e)}),(0,t.jsx)("a",{href:"/Ricardo.Resume.pdf",download:"Ricardo_Lopez_Resume.pdf",onClick:()=>v(!1),style:{textDecoration:"none",width:"100%",marginTop:"10px"},children:(0,t.jsx)("button",{style:{width:"100%",background:"rgba(34, 211, 238, 0.1)",border:"1px solid #22d3ee",color:"#22d3ee",padding:"12px 24px",borderRadius:"8px",fontSize:"14px",fontWeight:"700",cursor:"pointer",fontFamily:"'Space Mono', monospace",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(34, 211, 238, 0.1)",e.currentTarget.style.color="#22d3ee"},children:"DOWNLOAD RESUME"})})]}),(0,t.jsx)("main",{className:"w-full block px-0",style:{position:"relative",zIndex:2},children:(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("section",{id:"about",className:"scroll-mt-24 pt-28",style:{paddingTop:"112px",paddingBottom:"35px"},children:[(0,t.jsxs)("div",{className:"flex justify-between items-center w-full mb-8",style:{paddingLeft:"32px",paddingRight:"55px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",boxSizing:"border-box"},children:[(0,t.jsx)("div",{className:"glass rounded-xl ml-0 pl-0",style:{width:"220px",height:"260px",display:"block",borderRadius:"12px",overflow:"hidden",border:"2px solid rgba(34, 211, 238, 0.35)",boxShadow:"0 0 15px rgba(34, 211, 238, 0.15)",background:"rgba(15, 23, 42, 0.7)",backdropFilter:"blur(10px)",marginLeft:0,paddingLeft:0},children:(0,t.jsx)("img",{src:"/Gemini_Generated_Image_5y7vhi5y7vhi5y7v.jpg",alt:"Ricardo Lopez",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"12px"},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.08)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1)"})}),(0,t.jsx)("div",{className:"flex flex-col gap-2",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{Icon:z,url:"https://www.linkedin.com/in/ricardo-alvaro-lopez",border:"#0077b5",text:"#0077b5",bg:"rgba(0, 119, 181, 0.1)",hoverBg:"#0077b5",hoverText:"#ffffff"},{Icon:C,url:"https://github.com/ricardo-lopez-codes",border:"#6e5494",text:"#fafafa",bg:"rgba(110, 84, 148, 0.1)",hoverBg:"#6e5494",hoverText:"#fafafa"},{Icon:d,url:"https://leetcode.com/u/ricardo_lopez/",border:"#ffa116",text:"#ffa116",bg:"rgba(255, 161, 22, 0.1)",hoverBg:"#ffa116",hoverText:"#020617"},{Icon:I,url:"https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit",border:"#2f8d46",text:"#2f8d46",bg:"rgba(47, 141, 70, 0.1)",hoverBg:"#2f8d46",hoverText:"#ffffff"}].map((e,r)=>{let o=e.Icon;return(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"44px",height:"44px",background:e.bg,backdropFilter:"blur(10px)",border:`1px solid ${e.border}`,borderRadius:"8px",color:e.text,transition:"all 0.3s ease",boxShadow:`0 0 8px ${e.border}1a`},onMouseEnter:t=>{t.currentTarget.style.background=e.hoverBg,t.currentTarget.style.color=e.hoverText,t.currentTarget.style.boxShadow=`0 0 15px ${e.border}`},onMouseLeave:t=>{t.currentTarget.style.background=e.bg,t.currentTarget.style.color=e.text,t.currentTarget.style.boxShadow=`0 0 8px ${e.border}1a`},children:(0,t.jsx)(o,{size:20})},r)})})]}),(0,t.jsxs)("div",{style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box",marginTop:"24px"},children:[(0,t.jsx)("h1",{style:{fontSize:"3.2rem",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",color:"#fff",letterSpacing:"-1.5px",lineHeight:"1.0",margin:"0 0 12px 0"},children:"RICARDO LOPEZ"}),(0,t.jsx)("div",{style:{minHeight:"35px",marginBottom:"12px"},children:(0,t.jsx)("p",{style:{fontSize:"1.1rem",color:"#22d3ee",fontFamily:"'Space Mono', monospace",fontWeight:600,letterSpacing:"1px"},children:S})}),(0,t.jsx)("p",{className:"text-justify text-base text-zinc-300 leading-relaxed mt-4",style:{color:"#cbd5e1",fontSize:"15.5px",lineHeight:"1.625rem",textAlign:"justify",textJustify:"inter-word",marginBottom:"0"},children:"I'm Ricardo Lopez, an Electronics and Communication Engineering student passionate about building intelligent systems that solve real-world problems. I specialize in IoT, Embedded Systems, AI, and Computer Vision, creating projects that combine hardware and software innovation. My work ranges from smart EV health monitoring and accident prediction systems to energy and automation solutions. I enjoy turning ideas into practical technology through hands-on development, teamwork, and continuous learning."}),(0,t.jsx)("div",{className:"h-6 w-full","aria-hidden":"true"}),(0,t.jsx)("div",{className:"w-full px-4 mt-10 mb-10 flex justify-center",children:(0,t.jsxs)("a",{href:"/Ricardo_Lopez_Resume.pdf",download:"Ricardo_Lopez_Resume.pdf",className:"w-full h-12 bg-transparent text-[#00d2ff] border border-[#00d2ff]/40 font-mono text-xs font-bold rounded-xl tracking-widest transition-all duration-200 hover:bg-[#00d2ff]/10 hover:border-[#00d2ff] active:scale-[0.98] active:bg-[#00d2ff]/20 shadow-[0_0_10px_rgba(0,210,255,0.1)] active:shadow-[0_0_25px_rgba(0,210,255,0.45)] flex items-center justify-center gap-3 cursor-pointer",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"DOWNLOAD RESUME //"]})})]})]}),(0,t.jsxs)("section",{style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"achievements",className:"scroll-mt-24",style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box",fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"//Achievement"}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box"},children:N.map((e,r)=>(0,t.jsx)(B,{ach:e},r))})]}),(0,t.jsxs)("section",{style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"projects",className:"scroll-mt-24",style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box",fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"//Projects"}),(0,t.jsx)("div",{className:"projects-grid space-y-6",style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box"},children:L.map((e,r)=>{let o=k===r;return(0,t.jsxs)("div",{className:"glass project-card w-full mb-6",onClick:()=>D(e),onMouseEnter:()=>T(r),onMouseLeave:()=>T(null),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"350px",borderColor:o?e.color:"rgba(34, 211, 238, 0.3)",boxShadow:o?`0 0 20px ${e.color}44`:"none",transform:o?"translateY(-4px)":"none",transition:"all 0.3s ease",marginBottom:"24px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{style:{fontSize:"1.5rem",color:e.color,fontWeight:"bold",fontFamily:"'Orbitron', sans-serif",marginBottom:"10px",minWidth:"190px",width:"190px",display:"inline-block"},children:e.title}),(0,t.jsx)("h4",{style:{fontSize:"1.1rem",color:"#fff",fontFamily:"'Space Mono', monospace",marginBottom:"15px"},children:e.tag}),(0,t.jsx)("p",{style:{color:"#94a3b8",fontSize:"1rem",lineHeight:"1.6"},children:e.desc})]}),(0,t.jsx)("div",{style:{marginTop:"25px",display:"flex",justifyContent:"center"},children:(0,t.jsx)("button",{onClick:t=>{t.stopPropagation(),D(e)},style:{background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",padding:"12px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700",fontFamily:"'Orbitron', sans-serif",letterSpacing:"2px",transition:"all 0.3s ease",width:"100%",boxShadow:"none"},onMouseEnter:t=>{t.stopPropagation(),t.currentTarget.style.borderColor=e.color,t.currentTarget.style.color=e.color,t.currentTarget.style.boxShadow=`0 0 15px ${e.color}`},onMouseLeave:e=>{e.stopPropagation(),e.currentTarget.style.borderColor="rgba(255, 255, 255, 0.15)",e.currentTarget.style.color="#fff",e.currentTarget.style.boxShadow="none"},children:"DETAILS"})})]},r)})})]}),(0,t.jsxs)("section",{ref:H,style:{padding:"55px 0"},children:[(0,t.jsx)("h2",{id:"skills",className:"scroll-mt-24",style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box",fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",marginBottom:"40px",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"// TECHNICAL SKILLS"}),(0,t.jsx)("div",{style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box"},children:(0,t.jsxs)("div",{className:`terminal-screen ${A?"boot-active":""}`,children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#ef4444"}}),(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#eab308"}}),(0,t.jsx)("div",{className:"terminal-circle",style:{backgroundColor:"#22c55e"}}),(0,t.jsx)("span",{style:{fontSize:"13px",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#22d3ee",letterSpacing:"1.5px",marginLeft:"15px",fontWeight:"600"},children:"TECHNICAL_STACK // SYSTEM_DASHBOARD"})]}),(0,t.jsx)("div",{className:"terminal-stream-grid",children:Object.entries(F).map(([e,r],o)=>(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)("h3",{style:{fontSize:"1.2rem",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#22d3ee",fontWeight:"700",marginBottom:"25px",display:"flex",alignItems:"center",letterSpacing:"1.5px"},children:[M[e]||e.toUpperCase(),(0,t.jsx)("span",{style:{color:"#22d3ee",animation:"blink 1.2s step-end infinite",marginLeft:"4px",fontWeight:"bold"},children:"_"})]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:r.map((e,r)=>{let i=6*o+r;return(0,t.jsxs)("div",{className:"terminal-stream-item",style:{animationDelay:`${40*i}ms`},children:[(0,t.jsx)("span",{style:{color:"rgba(34, 211, 238, 0.4)",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",fontWeight:"bold"},children:">>>"}),(0,t.jsx)("span",{style:{fontWeight:"600",fontFamily:"'Space Mono', 'Courier New', 'Fira Code', monospace",color:"#e2e8f0"},children:e})]},r)})})]},o))})]})})]}),(0,t.jsx)("section",{style:{padding:"55px 0 20px 0"},children:(0,t.jsxs)("div",{style:{display:"block",width:"84%",marginLeft:"8%",marginRight:"8%",boxSizing:"border-box"},children:[(0,t.jsx)("h2",{id:"contact",className:"scroll-mt-24",style:{fontSize:"2.2rem",fontFamily:"'Orbitron', sans-serif",color:"#fff",letterSpacing:"1.5px",marginBottom:"20px",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"15px"},children:"CONTACT ME"}),(0,t.jsx)("p",{style:{color:"#cbd5e1",fontSize:"1.05rem",lineHeight:"1.7",marginBottom:"28px"},children:"I am open to discussing new opportunities, collaborations, or technical projects. Feel free to reach out via email or connect with me on my professional social profiles."}),(0,t.jsx)("a",{href:"mailto:rl6930@srmist.edu.in",style:{textDecoration:"none",display:"block",width:"100%",marginBottom:"20px"},children:(0,t.jsx)("button",{style:{width:"100%",background:"transparent",border:"2px solid #22d3ee",color:"#22d3ee",padding:"16px 28px",borderRadius:"10px",fontSize:"15px",fontWeight:"700",cursor:"pointer",fontFamily:"'Orbitron', sans-serif",letterSpacing:"1.5px",transition:"all 0.3s ease",boxShadow:"0 0 15px rgba(34, 211, 238, 0.15)",textAlign:"center"},onMouseEnter:e=>{e.currentTarget.style.background="#22d3ee",e.currentTarget.style.color="#020617",e.currentTarget.style.boxShadow="0 0 25px #22d3ee"},onMouseLeave:e=>{e.currentTarget.style.background="transparent",e.currentTarget.style.color="#22d3ee",e.currentTarget.style.boxShadow="0 0 15px rgba(34, 211, 238, 0.15)"},children:"✉ SEND EMAIL — rl6930@srmist.edu.in"})}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[{title:"LinkedIn",url:"https://www.linkedin.com/in/ricardo-alvaro-lopez",Icon:z,border:"#0077b5",text:"#0077b5",bg:"rgba(0, 119, 181, 0.08)",hoverBg:"#0077b5",hoverText:"#ffffff"},{title:"GitHub",url:"https://github.com/ricardo-lopez-codes",Icon:C,border:"#6e5494",text:"#fafafa",bg:"rgba(110, 84, 148, 0.08)",hoverBg:"#6e5494",hoverText:"#fafafa"},{title:"LeetCode",url:"https://leetcode.com/u/ricardo_lopez/",Icon:d,border:"#ffa116",text:"#ffa116",bg:"rgba(255, 161, 22, 0.08)",hoverBg:"#ffa116",hoverText:"#020617"},{title:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/profile/rl69d0d6?from=edit",Icon:I,border:"#2f8d46",text:"#2f8d46",bg:"rgba(47, 141, 70, 0.08)",hoverBg:"#2f8d46",hoverText:"#ffffff"}].map((e,r)=>{let o=e.Icon;return(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",display:"block",width:"100%"},children:(0,t.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px",borderRadius:"10px",border:`1px solid ${e.border}`,background:e.bg,color:e.text,fontFamily:"'Orbitron', sans-serif",fontSize:"13px",fontWeight:"700",letterSpacing:"1px",cursor:"pointer",transition:"all 0.3s ease",boxSizing:"border-box",boxShadow:`0 0 8px ${e.border}22`},onMouseEnter:t=>{t.currentTarget.style.background=e.hoverBg,t.currentTarget.style.color=e.hoverText,t.currentTarget.style.boxShadow=`0 0 18px ${e.border}`},onMouseLeave:t=>{t.currentTarget.style.background=e.bg,t.currentTarget.style.color=e.text,t.currentTarget.style.boxShadow=`0 0 8px ${e.border}22`},children:[(0,t.jsx)("span",{children:e.title}),(0,t.jsx)(o,{size:20})]})},r)})})]})})]})}),E&&(0,t.jsx)(W,{project:E,onClose:()=>D(null)})]})}e.s(["default",0,function(){let[e,o]=(0,r.useState)(null);return((0,r.useEffect)(()=>{let e=()=>{o(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),null===e)?(0,t.jsx)("div",{style:{background:"#020617",minHeight:"100vh",width:"100%"}}):e?(0,t.jsx)(D,{}):(0,t.jsx)(E,{})}],52683)}]);