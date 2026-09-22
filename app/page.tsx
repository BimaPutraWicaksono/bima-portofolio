import { About } from "@/components/About";
import { AdditionalExperience } from "@/components/AdditionalExperience";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const experiences = [
  {
    company: "Koperasi Simpan Pinjam Mitra Azzahwa",
    location: "Pasuruan",
    period: "February 2026 – Present",
    role: "Admin Keuangan & Pengolahan Data | IT System Development",
    details: [
      "Analyzes operational and data requirements.",
      "Designs system structure, processes, interfaces, and administrative features using Laravel, React, Inertia.js, MySQL, and Tailwind CSS.",
      "Develops modules for members, savings, loans, installments, deposits, and cash management.",
      "Implements CRUD operations, database management, validation, roles, and permissions.",
      "Performs testing and feature evaluation.",
      "Standardizes Excel-based data and supports administrative, bookkeeping, and data digitalization processes.",
    ],
  },
  {
    company: "Material Requirement Planning Website",
    location: "Mojokerto",
    period: "January – July 2025",
    role: "Software Developer / Web Developer",
    details: [
      "Analyzed and designed an MRP system for automotive wiring harness procurement.",
      "Analyzed business flows and functional requirements involving 7 user roles.",
      "Developed procurement workflow using Python, Django, and PostgreSQL.",
      "Workflow includes Purchase Request, approval, Purchase Order, supplier confirmation, delivery, and order status.",
      "Integrated part requirements with production data.",
      "Performed testing, UAT, deployment, and evaluation.",
      "SUS score: 87.61.",
    ],
  },
  {
    company: "PT Surabaya Autocomp Indonesia",
    location: "Mojokerto",
    period: "July – December 2024",
    role: "Web Developer – Maintenance & IT Intern",
    details: [
      "Developed CML, EIN, and Area Control applications through analysis, design, implementation, testing, and deployment.",
      "CML uses Python, Django, and PostgreSQL to calculate spare-part requirements based on production and machine loading data, including Excel import and dashboard functionality.",
      "EIN uses PHP, Laravel, and MySQL to automate production data processing and visualize machine activity.",
      "Area Control digitizes area inspections and problem logging.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Cooperative Information System",
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    description:
      "A web-based cooperative information system focused on managing members, savings, loans, installments, deposits, and cash.",
    focus: [
      "Member management",
      "Savings management",
      "Loan and installment management",
      "Deposit management",
      "Cash management",
      "Role and permission management",
      "Data validation",
    ],
  },
  {
    title: "Material Requirement Planning System",
    technologies: ["Python", "Django", "PostgreSQL"],
    description:
      "A web-based MRP system designed to support procurement and material planning processes for an automotive wiring harness manufacturing environment.",
    focus: [
      "7 user roles",
      "Procurement workflow",
      "Production data integration",
      "Purchase Request",
      "Approval",
      "Purchase Order",
      "Supplier confirmation",
      "Delivery tracking",
      "Order status",
      "UAT",
      "SUS 87.61",
    ],
  },
  {
    title: "CML – Spare Part Requirement Calculation System",
    technologies: ["Python", "Django", "PostgreSQL"],
    description:
      "A system for calculating spare-part requirements using production and machine loading data.",
    focus: [
      "Production data",
      "Machine loading",
      "Spare-part requirement calculation",
      "Excel import",
      "Dashboard",
      "Data processing",
    ],
  },
  {
    title: "Engineering Integration Network (EIN)",
    technologies: ["PHP", "Laravel", "MySQL"],
    description:
      "A production data application designed to automate data processing and visualize machine activity.",
    focus: [
      "Production data automation",
      "Machine activity",
      "Data visualization",
      "Web-based information system",
    ],
  },
];

const education = [
  {
    school: "Politeknik Negeri Malang",
    degree: "D4 Teknik Informatika",
    period: "August 2021 – July 2025",
    gpa: "3.65/4.00",
    thesis: '"Pengembangan Sistem Material Requirement Planning Berbasis Web di PT XYZ Indonesia"',
    relevantAreas: [
      "Database Management",
      "Data Analytics",
      "Web Programming",
      "Algorithms & Data Structures",
      "Operating Systems",
      "UI Design",
      "Critical Thinking & Problem Solving",
      "Software Development with AI",
    ],
  },
];

const additionalExperience = [
  {
    title: "Zaafarani Perfume",
    location: "Batu",
    period: "July 2020 – January 2026",
    role: "Owner – Operational / Production / Marketing",
    details: [
      "Managed operations, production, stock, sales, administration, finance, and suppliers.",
      "Managed 10–15 product variants.",
      "Monitored sales trends, cash flow, procurement, and supplier negotiations.",
    ],
  },
  {
    title: "HMTI Polinema",
    location: "Malang",
    period: "March 2023 – February 2024",
    role: "Head of External Affairs – Steering Committee",
    details: [
      "Led 2 programs and 8 agendas.",
      "Participated in 5+ committees.",
      "Conducted a student aspiration survey involving 1,662 students, with 68% participation.",
    ],
  },
  {
    title: "HMTI Polinema",
    location: "Malang",
    period: "March 2022 – February 2023",
    role: "Organizing Committee",
    details: [
      "Chief organizer of Dialog Dosen Mahasiswa involving 70+ students, 35+ lecturers, and 80+ committee members.",
      "Field coordinator for Malam Keakraban involving 195+ participants and 80+ committee members.",
    ],
  },
  {
    title: "Family Gathering PT Surabaya Autocomp Indonesia",
    location: "Batu",
    period: "December 2024 – January 2025",
    role: "MC",
    details: [
      "Hosted the event for 7,000+ attendees.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[#4a4453]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience items={experiences} />
        <Projects projects={featuredProjects} />
        <Skills />
        <Education items={education} />
        <AdditionalExperience items={additionalExperience} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
