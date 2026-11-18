import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Terminal,
  GitBranch,
  Cpu,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Download,
  Menu,
  X,
  ArrowUp,
  ChevronRight,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Workflow,
  Server,
  Sparkles,
  Globe,
  Calendar,
  Building2,
  MapPin,
  Copy,
  Check,
  FileText,
  Printer,
  Share2,
  ArrowRight
} from 'lucide-react';

// ============================================================================
// DATA SOURCE OF TRUTH (STRICTLY FROM PROVIDED RESUME CONTENT)
// ============================================================================

const PROFILE = {
  name: "Chhavi Adlakkha",
  role: "Salesforce Developer | Platform Developer II",
  tagline: "Building Scalable Salesforce Solutions. Engineering Better Experiences.",
  intro:
    "Salesforce Developer with 3 years of experience designing, developing, and implementing scalable enterprise solutions across Sales Cloud, Service Cloud, Experience Cloud, and custom managed packages. Proven ability to drive greenfield implementations, develop reusable components, optimize application performance, and deliver enterprise solutions in Agile environments.",
  email: "chhavisalesforcedev@gmail.com",
  phone: "+91 8949837375",
  linkedin: "https://linkedin.com/in/chhavi-adlakkha-28a0a3208",
  location: "Jaipur, India",
  heroBadges: [
    "Apex & Lightning Web Components",
    "Managed Package Development",
    "Salesforce Architecture",
    "REST / SOAP API Integrations",
    "Salesforce Data Cloud",
    "Agentforce"
  ]
};

const EXPERIENCE = [
  {
    id: "asymbl",
    role: "Salesforce Developer",
    company: "Asymbl Technologies",
    period: "July 2025 – Present",
    location: "Jaipur, India",
    current: true,
    summary:
      "Contributed to 7+ enterprise Salesforce projects across Sales Cloud, Service Cloud, and Experience Cloud, delivering scalable custom solutions, platform enhancements, and end-to-end business process automation.",
    highlights: [
      "Co-developed and extended core functionality for recruitment-focused managed packages, including ATS, Timesheet, Search, and related products.",
      "Developed end-to-end recruitment lifecycle solutions covering job applications, candidate management, interview scheduling, offer management, onboarding, and candidate placement.",
      "Implemented dynamic Rate Card and Timesheet functionality with automated rate inheritance and bulk rate updates.",
      "Designed and implemented integrated recruitment workflows using Daxtra for candidate search and resume parsing, Reddot for job distribution, Onboarded for offer documentation and onboarding paperwork, and InterAgree for digital contract creation and signing.",
      "Architected and delivered a greenfield Resource Management solution, owning requirements analysis, solution design, data modeling, and end-to-end implementation.",
      "Developed reusable, responsive Lightning Web Components (LWC) using SLDS for resource allocation, project management dashboards, and timeline-based interfaces.",
      "Developed reusable Apex frameworks and established SFDMU-based data migration processes for multi-org deployments.",
      "Maintained code quality through PMD standards, automated test coverage, package integrity, and upgrade compatibility while contributing to technical guidance and AI-assisted development practices."
    ]
  },
  {
    id: "anavclouds",
    role: "Associate Salesforce Developer",
    company: "Anavclouds Software Solutions",
    period: "December 2023 – June 2025",
    location: "Jaipur, India",
    current: false,
    highlights: [
      "Developed and maintained multi-tenant Salesforce applications using Apex, Lightning Web Components, Salesforce Flows, and Asynchronous Apex, reducing processing latency by 30% and manual administrative tasks by 40%.",
      "Built custom Experience Cloud portals and modular managed packages, implementing reusable components and scalable application functionality.",
      "Designed and implemented asynchronous integrations using Batch Apex and Queueable Apex with retry mechanisms and error handling, alongside secure REST API integrations for external data exchange.",
      "Maintained 85%+ Apex test coverage across managed package development and implemented Git/GitHub-based version control and release workflows across the full SDLC."
    ]
  },
  {
    id: "celebal",
    role: "SQL Intern",
    company: "Celebal Technologies",
    period: "May 2023 – July 2023",
    location: "Jaipur, India",
    current: false,
    highlights: [
      "Developed, tested, and optimized complex SQL queries on relational databases to extract business insights, improving query retrieval performance by 30%."
    ]
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Salesforce Development",
    icon: Code2,
    accent: "text-blue-400",
    bgAccent: "bg-blue-500/10 border-blue-500/20",
    skills: [
      "Apex",
      "Apex Triggers",
      "Asynchronous Apex",
      "Lightning Web Components (LWC)",
      "Aura Components",
      "Visualforce",
      "SOQL",
      "SOSL",
      "Salesforce Flows",
      "Platform Events",
      "Salesforce Integrations",
      "Managed Package Development",
      "Salesforce Security Model",
      "Data Modeling"
    ]
  },
  {
    title: "Salesforce Platforms",
    icon: Cloud,
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Salesforce Data Cloud",
      "Agentforce",
      "Experience Builder"
    ]
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    accent: "text-sky-400",
    bgAccent: "bg-sky-500/10 border-sky-500/20",
    skills: [
      "Git",
      "GitHub",
      "Gearset",
      "Salesforce CLI",
      "SFDMU",
      "CI/CD",
      "VS Code",
      "Postman",
      "Jira",
      "Developer Console",
      "Data Loader"
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    accent: "text-purple-400",
    bgAccent: "bg-purple-500/10 border-purple-500/20",
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Salesforce Lightning Design System (SLDS)",
      "Responsive UI Development"
    ]
  }
];

const PROJECTS = [
  {
    id: "recruitment-platform",
    number: "01",
    category: "Asymbl • Managed Packages & Enterprise ATS",
    title: "End-to-End Recruitment Lifecycle Management Platform",
    description:
      "Engineered end-to-end recruitment workflows covering job requisition creation, external job portal applications, candidate screening, interview scheduling, offer management, onboarding, and candidate placement.",
    contributions: [
      "Engineered end-to-end recruitment workflows covering job requisition creation, external job portal applications, candidate screening, interview scheduling, offer management, onboarding, and candidate placement.",
      "Extended ATS, Search, and Timesheet managed package modules, implementing dynamic Rate Card inheritance and bulk candidate rate updates to streamline recruitment operations.",
      "Integrated Daxtra for AI-powered resume parsing, candidate search, and job matching; Reddot for automated multi-board job distribution; Onboarded for offer documentation and onboarding paperwork; and InterAgree for digital contract generation and signing."
    ],
    technologies: ["Apex", "LWC", "Managed Packages", "Daxtra", "Reddot", "Onboarded", "InterAgree"],
    architecture: {
      nodes: [
        { label: "Daxtra AI & Reddot", type: "external" },
        { label: "ATS / Search / Rate Card", type: "core" },
        { label: "Onboarded & InterAgree", type: "external" }
      ],
      flow: "Requisition & Job Board Sync → AI Resume Parsing → Rate Inheritance → Digital Onboarding"
    }
  },
  {
    id: "resource-management",
    number: "02",
    category: "Asymbl • Greenfield Architecture & Workforce Utilization",
    title: "Resource Management Solution",
    description:
      "A greenfield Salesforce Resource Management solution designed for workforce utilization tracking, resource allocation, timesheet management, and project delivery visibility.",
    contributions: [
      "Collaborated with the development team in designing and implementing a greenfield Resource Management solution, contributing to solution architecture, requirements analysis, and data modeling.",
      "Developed reusable Lightning Web Components (LWC) for resource allocation, workforce utilization tracking, timesheet management, allocation matrices, and project management dashboards, contributing to scalable and responsive user experiences."
    ],
    technologies: ["Apex", "LWC", "SLDS", "Data Modeling", "Solution Architecture"],
    architecture: {
      nodes: [
        { label: "Allocation Matrix LWC", type: "ui" },
        { label: "Utilization & Project Model", type: "core" },
        { label: "Timesheet & Dashboards", type: "ui" }
      ],
      flow: "Capacity Planning → Allocation Matrix → Timesheet Tracking → Utilization Analytics"
    }
  },
  {
    id: "student-coach-portal",
    number: "03",
    category: "Experience Cloud & Scheduling",
    title: "Experience Cloud – Student Coach Learning Portal",
    description:
      "A custom Experience Cloud portal enabling student self-registration, automated user provisioning, Outlook Calendar synchronization, and timezone-aware coach matching.",
    contributions: [
      "Built a custom Experience Cloud portal using LWC and Visualforce with self-registration, automated user provisioning, Outlook Calendar integration, and a timezone-aware coach-matching algorithm (reducing heap utilization by 20%)."
    ],
    technologies: ["Experience Cloud", "LWC", "Visualforce", "Apex", "Outlook Calendar"],
    architecture: {
      nodes: [
        { label: "Experience Portal", type: "ui" },
        { label: "Timezone Match Engine (-20% Heap)", type: "core" },
        { label: "Outlook Calendar API", type: "external" }
      ],
      flow: "Self-Registration → Automated Provisioning → Timezone Coach Match → Outlook Sync"
    }
  },
  {
    id: "marketing-two-way-sync",
    number: "04",
    category: "Managed Package & Async Integration",
    title: "Managed Package – Salesforce Marketing Two-Way Synchronization",
    description:
      "An asynchronous two-way synchronization framework connecting Salesforce CRM objects with external marketing platforms for multi-org managed package deployments.",
    contributions: [
      "Built an asynchronous two-way sync framework (Batch/Queueable Apex) for Contacts, Campaigns, and Campaign Members with fault-tolerant retry logic, refactoring legacy Apex to eliminate PMD violations and support multi-org managed package releases."
    ],
    technologies: ["Apex", "Queueable Apex", "Batch Apex", "REST APIs", "Managed Packages", "PMD"],
    architecture: {
      nodes: [
        { label: "Contacts & Campaigns", type: "core" },
        { label: "Batch / Queueable Retry Engine", type: "core" },
        { label: "External Marketing Sync", type: "external" }
      ],
      flow: "Bi-Directional Delta Sync → Fault-Tolerant Retry Queue → Multi-Org Package Release"
    }
  }
];

const CERTIFICATIONS = [
  {
    name: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    code: "AGENT",
    tier: "AI & Autonomous Agents",
    accent: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30"
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    code: "AI",
    tier: "Artificial Intelligence",
    accent: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    code: "DATA",
    tier: "Data & AI Foundation",
    accent: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
  },
  {
    name: "Salesforce Certified Platform Developer II",
    issuer: "Salesforce",
    code: "PD2",
    tier: "Advanced Developer",
    accent: "from-violet-500/20 to-blue-500/20 border-violet-500/30"
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    code: "PD1",
    tier: "Core Developer",
    accent: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
  },
  {
    name: "Salesforce Certified JavaScript Developer I",
    issuer: "Salesforce",
    code: "JS1",
    tier: "Frontend & LWC",
    accent: "from-sky-500/20 to-blue-500/20 border-sky-500/30"
  },
  {
    name: "Zoho CRM Administrator",
    issuer: "Zoho",
    code: "CRM",
    tier: "CRM Administration",
    accent: "from-slate-500/20 to-blue-500/20 border-slate-500/30"
  }
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "CIITM College, Rajasthan Technical University, Jaipur",
    timeline: "July 2024 – Present",
    score: "CGPA: 9.48/10",
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Poornima University, Jaipur",
    timeline: "July 2021 – July 2024",
    score: "CGPA: 9.18/10",
    icon: GraduationCap
  }
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

// ============================================================================
// REAL BINARY PDF RESUME GENERATOR (CREATES A VALID .PDF FILE IN BROWSER)
// ============================================================================

const downloadResumePdf = () => {
  const escapePdfText = (str) =>
    String(str)
      .replace(/[^\x20-\x7E]/g, (ch) => {
        if (ch === "–" || ch === "—") return "-";
        if (ch === "•") return "*";
        if (ch === "’" || ch === "‘") return "'";
        if (ch === "“" || ch === "”") return '"';
        return " ";
      })
      .replace(/\\/g, "\\\\")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)");

  const wrapLines = (text, maxChars = 94) => {
    const words = String(text).split(/\s+/);
    const lines = [];
    let current = "";
    for (const word of words) {
      if (!current) {
        current = word;
      } else if (current.length + 1 + word.length <= maxChars) {
        current += " " + word;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  // Build structured document entries: { text, font: 'F1'|'F2', size, indent, spaceBefore, color, ruleAfter }
  const entries = [];
  const addLine = (text, opts = {}) => {
    const {
      font = "F1",
      size = 9.5,
      indent = 0,
      spaceBefore = 0,
      color = "0.1 0.12 0.18",
      wrap = 96,
      ruleAfter = false
    } = opts;
    const wrapped = wrapLines(text, wrap);
    wrapped.forEach((line, idx) => {
      entries.push({
        text: (idx > 0 && indent > 0 ? "  " : "") + line,
        font,
        size,
        indent,
        spaceBefore: idx === 0 ? spaceBefore : 0,
        color,
        ruleAfter: idx === wrapped.length - 1 ? ruleAfter : false
      });
    });
  };

  // Header
  addLine("CHHAVI ADLAKKHA", { font: "F2", size: 17, color: "0.04 0.08 0.16", wrap: 80 });
  addLine("Salesforce Developer | Platform Developer II", { font: "F2", size: 10.5, spaceBefore: 2, color: "0.02 0.35 0.65", wrap: 90 });
  addLine(
    `${PROFILE.location} | ${PROFILE.phone} | ${PROFILE.email} | linkedin.com/in/chhavi-adlakkha-28a0a3208`,
    { size: 8.5, spaceBefore: 3, color: "0.28 0.33 0.41", wrap: 110, ruleAfter: true }
  );

  // Summary
  addLine("PROFESSIONAL SUMMARY", { font: "F2", size: 10, spaceBefore: 11, color: "0.02 0.35 0.65", ruleAfter: true });
  addLine(
    `${PROFILE.intro} Strong technical expertise in Apex, Lightning Web Components (LWC), Asynchronous Apex, Salesforce Flows, SOQL, and REST/SOAP API integrations. Hands-on experience with Salesforce Data Cloud, Agentforce, and AI-assisted development workflows.`,
    { size: 9, spaceBefore: 4, wrap: 102 }
  );

  // Technical Skills
  addLine("TECHNICAL SKILLS", { font: "F2", size: 10, spaceBefore: 10, color: "0.02 0.35 0.65", ruleAfter: true });
  SKILL_CATEGORIES.forEach((cat) => {
    addLine(`${cat.title}: ${cat.skills.join(", ")}`, { size: 8.8, spaceBefore: 3.5, wrap: 104 });
  });

  // Certifications
  addLine("CERTIFICATIONS & ENABLEMENT", { font: "F2", size: 10, spaceBefore: 10, color: "0.02 0.35 0.65", ruleAfter: true });
  addLine(
    "Core Developer & Architecture: Salesforce Certified Platform Developer II (PD2), Platform Developer I (PD1), JavaScript Developer I, Zoho CRM Administrator",
    { size: 8.8, spaceBefore: 3.5, wrap: 104 }
  );
  addLine(
    "AI, Data & Ecosystem: Salesforce Certified Data Cloud Consultant, Agentforce Specialist, AI Associate, Agentforce FDE Ready - Prerequisite Completed",
    { size: 8.8, spaceBefore: 2.5, wrap: 104 }
  );

  // Experience
  addLine("PROFESSIONAL EXPERIENCE", { font: "F2", size: 10, spaceBefore: 10, color: "0.02 0.35 0.65", ruleAfter: true });
  EXPERIENCE.forEach((exp) => {
    addLine(`${exp.role} | ${exp.company} (${exp.period} | ${exp.location})`, {
      font: "F2",
      size: 9.3,
      spaceBefore: 5,
      wrap: 98
    });
    if (exp.summary) {
      addLine(exp.summary, { size: 8.8, spaceBefore: 2.5, wrap: 102 });
    }
    exp.highlights.forEach((h) => {
      addLine(`* ${h}`, { size: 8.7, indent: 8, spaceBefore: 2, wrap: 98 });
    });
  });

  // Projects
  addLine("PROJECTS", { font: "F2", size: 10, spaceBefore: 10, color: "0.02 0.35 0.65", ruleAfter: true });
  PROJECTS.forEach((proj, idx) => {
    addLine(`${idx + 1}. ${proj.title}`, { font: "F2", size: 9.2, spaceBefore: 4.5, wrap: 98 });
    proj.contributions.forEach((c) => {
      addLine(`* ${c}`, { size: 8.7, indent: 8, spaceBefore: 2, wrap: 98 });
    });
  });

  // Education
  addLine("EDUCATION", { font: "F2", size: 10, spaceBefore: 10, color: "0.02 0.35 0.65", ruleAfter: true });
  EDUCATION.forEach((edu) => {
    addLine(`${edu.degree} - ${edu.institution} (${edu.timeline} | ${edu.score})`, {
      size: 8.8,
      spaceBefore: 3.5,
      wrap: 104
    });
  });

  // Paginate onto Letter pages (612 x 792 pt)
  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 44;
  const topY = 748;
  const bottomY = 44;

  const pages = [[]];
  let y = topY;

  for (const item of entries) {
    const extraRuleSpace = item.ruleAfter ? 4 : 0;
    const lineHeight = item.size * 1.35 + extraRuleSpace;
    if (y - item.spaceBefore - lineHeight < bottomY) {
      pages.push([]);
      y = topY;
    }
    y -= item.spaceBefore;
    pages[pages.length - 1].push({
      ...item,
      x: marginX + item.indent,
      y
    });
    y -= lineHeight;
  }

  // Assemble valid PDF 1.4 structure
  const objects = [];
  const addObj = (content) => {
    objects.push(content);
    return objects.length;
  };

  const catalogId = addObj(""); // placeholder 1
  const pagesId = addObj(""); // placeholder 2
  const fontRegularId = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBoldId = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  pages.forEach((pageLines, pIdx) => {
    let stream = "BT\n";
    const rules = [];
    pageLines.forEach((ln) => {
      stream += `${ln.color} rg /${ln.font} ${ln.size.toFixed(1)} Tf 1 0 0 1 ${ln.x.toFixed(1)} ${ln.y.toFixed(1)} Tm (${escapePdfText(ln.text)}) Tj\n`;
      if (ln.ruleAfter) {
        rules.push(ln.y - 3.5);
      }
    });
    // Footer page number
    stream += `0.45 0.5 0.58 rg /F1 8 Tf 1 0 0 1 275 26 Tm (Page ${pIdx + 1} of ${pages.length}) Tj\n`;
    stream += "ET\n";
    if (rules.length > 0) {
      stream += "0.78 0.83 0.90 RG 0.6 w\n";
      rules.forEach((ry) => {
        stream += `${marginX} ${ry.toFixed(1)} m ${pageWidth - marginX} ${ry.toFixed(1)} l S\n`;
      });
    }

    const contentId = addObj(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    const pageId = addObj(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  });

  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Chhavi_Adlakkha_Salesforce_Developer_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
};

// ============================================================================
// REUSABLE UI COMPONENTS
// ============================================================================

const SalesforceCloudLogo = ({ className = "w-6 h-6" }) => {
  const gradId = React.useId();
  return (
    <svg
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="64" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="55%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M26.8 9.2C29.1 6.7 32.5 5.2 36.2 5.2C42.2 5.2 47.3 9.3 48.7 14.9C50.1 14.3 51.7 14 53.3 14C59.2 14 64 18.8 64 24.7C64 30.6 59.2 35.4 53.3 35.4H14.2C7.5 35.4 2 29.9 2 23.2C2 17.2 6.4 12.2 12.2 11.2C14.1 6.4 18.8 3 24.3 3C25.2 3 26.1 3.1 26.9 3.3"
        fill={`url(#${gradId})`}
      />
      <text
        x="33"
        y="25.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="9.5"
        letterSpacing="-0.2"
      >
        salesforce
      </text>
    </svg>
  );
};

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="max-w-3xl mb-10 sm:mb-14"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-mono uppercase tracking-wider mb-3.5">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      {eyebrow}
    </div>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 leading-[1.2]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Set page SEO metadata & custom SVG favicon on mount
  useEffect(() => {
    document.title = "Chhavi Adlakkha | Salesforce Developer & Technical Consultant";

    const metaDesc = document.querySelector('meta[name="description"]');
    const descriptionText =
      "Portfolio of Chhavi Adlakkha, Salesforce Developer with 3 years of enterprise experience in Apex, LWC, Managed Packages, Data Cloud, Agentforce, and REST API integrations.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descriptionText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }

    // Custom Salesforce-inspired Cloud SVG Favicon
    const svgFavicon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00A1E0"/>
            <stop offset="100%" stop-color="#7C3AED"/>
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#050814"/>
        <path d="M26 20c2.1-2.2 5-3.5 8.3-3.5 5.3 0 9.8 3.6 11 8.5 1.3-.5 2.7-.8 4.1-.8 5.2 0 9.4 4.2 9.4 9.4S54.6 43 49.4 43H15.2C9.3 43 4.5 38.2 4.5 32.3c0-5.3 3.9-9.7 9-10.6 1.7-4.2 5.8-7.2 10.6-7.2.8 0 1.6.1 2.3.3" fill="url(#g)"/>
        <text x="32" y="34" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="14">CA</text>
      </svg>
    `.trim();
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgFavicon)}`;
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  // Scroll listener for sticky navbar elevation & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(PROFILE.email);
      } else {
        const el = document.createElement("textarea");
        el.value = PROFILE.email;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
    } catch {
      // ignore fallback errors
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans antialiased overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Subtle Ambient Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-cyan-500/5 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      {/* =====================================================================
          A. STICKY NAVIGATION BAR
      ====================================================================== */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050814]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-4 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-10 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-600/20 border border-sky-400/35 flex items-center justify-center shadow-inner group-hover:border-cyan-400/70 transition-colors px-1.5">
              <SalesforceCloudLogo className="w-8 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-slate-100 tracking-tight leading-none">
                {PROFILE.name}
              </span>
              <span className="text-[11px] font-mono text-sky-400 mt-1 leading-none">
                {PROFILE.role}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-slate-800/70 border border-slate-700/70"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={downloadResumePdf}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm font-medium shadow-lg shadow-blue-600/25 border border-blue-400/20 transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#080D1E]/98 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 px-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      downloadResumePdf();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume (PDF)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        {/* ===================================================================
            B. HERO SECTION (BALANCED RESPONSIVE TYPOGRAPHY & VISUAL RHYTHM)
        ==================================================================== */}
        <section
          id="home"
          className="pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6 sm:space-y-8"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs sm:text-sm text-slate-300 shadow-sm">
              <SalesforceCloudLogo className="w-6 h-4 shrink-0" />
              <span className="leading-snug">
                Salesforce Developer • Platform Developer II • Data Cloud &amp; Agentforce
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15]">
              Building Scalable{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Salesforce Solutions.
              </span>{" "}
              Engineering Better Experiences.
            </h1>

            {/* Introduction */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed max-w-3xl">
              Hi, I&apos;m <strong className="text-white font-semibold">Chhavi Adlakkha</strong> — {PROFILE.intro}
            </p>

            {/* Highlighted Technical Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
              {PROFILE.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-slate-900/85 border border-slate-800/90 hover:border-blue-500/40 text-xs sm:text-[13px] font-medium text-slate-200 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-600/25 border border-blue-400/20 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={downloadResumePdf}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/40 text-sm sm:text-base font-medium transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ===================================================================
            C. ABOUT ME
        ==================================================================== */}
        <section
          id="about"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60 bg-[#070B19]/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="About Me"
              title="Enterprise Salesforce Engineering & Solution Architecture"
              subtitle="Focused on building resilient, maintainable, and scalable applications across the Salesforce ecosystem."
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl space-y-5 text-slate-300 text-base sm:text-[17px] leading-relaxed"
            >
              <p>
                I am a <strong className="text-white font-semibold">Salesforce Developer with 3 years of enterprise development experience</strong>, specializing in designing and delivering production-grade applications across <strong className="text-blue-300 font-medium">Sales Cloud, Service Cloud, and Experience Cloud</strong>.
              </p>
              <p>
                My engineering work spans end-to-end <strong className="text-white font-semibold">managed package development and multi-org architecture</strong>, as well as greenfield solution design and implementation—from initial requirements analysis and data modeling to custom Lightning Web Components and scalable backend services.
              </p>
              <p>
                I have hands-on experience architecting complex <strong className="text-cyan-300 font-medium">third-party REST API integrations and asynchronous Apex processing</strong> (Batch, Queueable, and Platform Events), alongside modern capabilities in <strong className="text-violet-300 font-medium">Salesforce Data Cloud and Agentforce</strong>.
              </p>

              {/* Core Competency Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {[
                  "Managed Package & Multi-Org Architecture",
                  "Greenfield Solution Design & Implementation",
                  "Third-Party Integrations & Async Processing",
                  "Salesforce Data Cloud & Agentforce Expertise"
                ].map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/75 border border-slate-800/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-sm text-slate-200 font-medium leading-snug">{pillar}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            D. PROFESSIONAL EXPERIENCE TIMELINE
        ==================================================================== */}
        <section
          id="experience"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Career Trajectory"
              title="Professional Experience"
              subtitle="Progressive hands-on engineering across enterprise Salesforce implementations, managed packages, and database optimization."
            />

            <div className="relative max-w-5xl">
              {/* Vertical Timeline Track */}
              <div className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-violet-500/60 to-slate-800" />

              <div className="space-y-8 sm:space-y-10">
                {EXPERIENCE.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-10 sm:pl-16"
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute left-1 sm:left-3.5 top-2 w-5 h-5 rounded-full flex items-center justify-center ${
                        item.current
                          ? "bg-blue-500/20 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                          : "bg-slate-900 border-2 border-violet-500/70"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.current ? "bg-cyan-300" : "bg-violet-400"
                        }`}
                      />
                    </div>

                    {/* Experience Card */}
                    <div className="p-5 sm:p-8 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800/80">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                              {item.role}
                            </h3>
                            {item.current && (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-blue-400 font-medium text-sm sm:text-base mt-1">
                            <Building2 className="w-4 h-4 shrink-0" />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap sm:flex-col sm:items-end text-xs sm:text-sm text-slate-400 font-mono gap-x-4 gap-y-1">
                          <span className="inline-flex items-center gap-1.5 text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                            {item.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {item.summary && (
                        <p className="mt-4 text-sm text-slate-300/95 leading-relaxed">
                          {item.summary}
                        </p>
                      )}

                      <ul className="mt-4 space-y-2.5">
                        {item.highlights.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            E. TECHNICAL SKILLS (CATEGORIZED CARDS & BADGES — NO SKILL BARS)
        ==================================================================== */}
        <section
          id="skills"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60 bg-[#070B19]/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Technical Stack"
              title="Core Competencies & Ecosystem Expertise"
              subtitle="Structured across Salesforce platform engineering, multi-tenant security architecture, integrations, and release automation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {SKILL_CATEGORIES.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/75 backdrop-blur-sm border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${category.bgAccent}`}
                        >
                          <IconComponent className={`w-5 h-5 ${category.accent}`} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-100">
                          {category.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 hover:border-blue-500/40 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            F. FEATURED PROJECTS
        ==================================================================== */}
        <section
          id="projects"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Enterprise Engineering"
              title="Featured Salesforce Projects"
              subtitle="Production architectures spanning recruitment lifecycle managed packages, greenfield resource management, Experience Cloud portals, and two-way synchronization frameworks."
            />

            <div className="space-y-7 sm:space-y-8">
              {PROJECTS.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group relative rounded-2xl bg-slate-900/75 backdrop-blur-md border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 overflow-hidden shadow-xl"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-xs font-mono font-bold text-blue-400">
                          PROJECT {project.number}
                        </span>
                        <span className="text-xs font-mono text-cyan-300/90">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                          Key Engineering Contributions
                        </h4>
                        <ul className="space-y-2.5">
                          {project.contributions.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Architecture Visual */}
                    <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800/90 rounded-xl p-4 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                        <span className="flex items-center gap-2 text-slate-200">
                          <Workflow className="w-4 h-4 text-violet-400 shrink-0" />
                          System Architecture
                        </span>
                        <span className="text-[11px] text-cyan-400">Enterprise Blueprint</span>
                      </div>

                      <div className="space-y-2.5 py-1.5">
                        {project.architecture.nodes.map((node, nIdx) => {
                          const badgeStyles =
                            node.type === "core"
                              ? "bg-blue-500/15 border-blue-500/40 text-blue-200"
                              : node.type === "external"
                              ? "bg-violet-500/15 border-violet-500/40 text-violet-200"
                              : "bg-cyan-500/15 border-cyan-500/40 text-cyan-200";
                          return (
                            <React.Fragment key={node.label}>
                              <div
                                className={`px-3.5 sm:px-4 py-3 rounded-lg border text-xs sm:text-sm font-medium flex items-center justify-between gap-2 ${badgeStyles}`}
                              >
                                <span className="truncate">{node.label}</span>
                                <span className="text-[10px] font-mono uppercase opacity-75 shrink-0">
                                  {node.type}
                                </span>
                              </div>
                              {nIdx < project.architecture.nodes.length - 1 && (
                                <div className="flex justify-center">
                                  <div className="h-3.5 w-px bg-slate-700" />
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-[11px] font-mono text-slate-400 leading-relaxed">
                        <span className="text-slate-200 font-semibold">Data Flow: </span>
                        {project.architecture.flow}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            G. CERTIFICATIONS & ENABLEMENT
        ==================================================================== */}
        <section
          id="certifications"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60 bg-[#070B19]/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Verified Credentials"
              title="Certifications & Enablement"
              subtitle="Industry-recognized Salesforce credentials spanning AI, Data Cloud, enterprise architecture, and application development."
            />

            {/* Featured First: Agentforce FDE Ready Prerequisite */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-6 sm:mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-violet-950/60 border border-indigo-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-indigo-950/30"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/35 flex items-center justify-center shrink-0 p-1.5">
                  <SalesforceCloudLogo className="w-9 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Agentforce FDE Ready – Prerequisite Completed
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                      Prerequisite Milestone
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Completed official Salesforce Agentforce Forward Deployed Engineer (FDE) readiness prerequisites.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Grid (Sorted: AI & Data -> Core Salesforce -> Zoho) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${cert.accent} bg-slate-900/80 border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {cert.issuer === "Salesforce" ? (
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-sky-500/30">
                          <SalesforceCloudLogo className="w-7 h-5" />
                          <span className="text-xs font-mono font-bold text-sky-300">
                            {cert.code}
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-700 text-xs font-mono font-bold text-slate-300">
                          <Award className="w-3.5 h-3.5 text-blue-400" />
                          {cert.code}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-300 text-right">
                        {cert.tier}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      {cert.issuer === "Salesforce" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      )}
                      Issued by {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Certified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            H. EDUCATION
        ==================================================================== */}
        <section
          id="education"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Academic Background"
              title="Education"
              subtitle="Strong computer science and software engineering academic foundation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl">
              {EDUCATION.map((edu, idx) => {
                const IconComponent = edu.icon;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="p-5 sm:p-7 rounded-2xl bg-slate-900/75 border border-slate-800/90 hover:border-blue-500/40 transition-all flex items-start gap-4"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="space-y-1.5 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-mono text-slate-400">
                          {edu.timeline}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            I. CONTACT SECTION
        ==================================================================== */}
        <section
          id="contact"
          className="py-16 sm:py-24 lg:py-28 border-t border-slate-800/60 bg-[#070B19]/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B1228] to-slate-950 border border-slate-800 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
              <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                    Get In Touch
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Have a Salesforce challenge or an interesting opportunity? Let&apos;s connect.
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                    Open to Salesforce Developer, Senior Salesforce Developer, and Salesforce Technical Consultant roles.
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 pt-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>

                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 transition-all"
                    >
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Direct Contact Cards */}
                <div className="lg:col-span-5 space-y-3.5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-slate-400">Email</div>
                        <a
                          href={`mailto:${PROFILE.email}`}
                          className="text-sm sm:text-base font-medium text-slate-100 hover:text-blue-400 truncate block transition-colors"
                        >
                          {PROFILE.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-slate-800 hover:border-slate-700 flex items-center gap-3.5 transition-colors block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Phone</div>
                      <div className="text-sm sm:text-base font-medium text-slate-100">
                        {PROFILE.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3.5 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                        <Linkedin className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                        <div className="text-sm font-medium text-slate-100 truncate">
                          linkedin.com/in/chhavi-adlakkha-28a0a3208
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-[#040711] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center px-1.5">
              <SalesforceCloudLogo className="w-8 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">{PROFILE.name}</div>
              <div className="text-xs font-mono text-sky-400 mt-0.5">
                {PROFILE.role}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-xs font-medium text-slate-200 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}