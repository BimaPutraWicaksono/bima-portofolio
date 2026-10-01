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
import { portfolio } from "@/data/portfolio";
import { portfolioImages } from "@/data/portfolio-images";

const education = portfolio.education.map((item, index) => ({
  ...item,
  images: portfolioImages.education[index] ?? [],
}));

const experience = portfolio.experience.map((item, index) => ({
  ...item,
  images: portfolioImages.experience[index] ?? [],
}));

const projects = portfolio.projects.map((item, index) => ({
  ...item,
  images: portfolioImages.projects[index] ?? [],
}));

const organizations = portfolio.organizations.map((item, index) => ({
  ...item,
  images: portfolioImages.organizations[index] ?? [],
}));

export default function Home() {
  return (
    <div className="min-h-screen text-[#4a4453]">
      <Navbar
        brand={portfolio.identity.brand}
        items={portfolio.navigation}
        themeLabels={portfolio.themeLabels}
        navigationLabel={portfolio.labels.mainNavigation}
      />

      <main>
        <Hero
          identity={portfolio.identity}
          content={portfolio.hero}
          labels={portfolio.labels}
          profileImage={portfolioImages.profile}
        />
        <About content={portfolio.about} labels={portfolio.labels} />
        <Education
          items={education}
          sectionLabel={portfolio.labels.educationSection}
          documentationLabel={portfolio.labels.educationDocumentation}
          thesisLabel={portfolio.labels.educationThesis}
          areasLabel={portfolio.labels.educationAreas}
          gpaLabel={portfolio.labels.gpaPrefix}
        />
        <Experience
          items={experience}
          sectionLabel={portfolio.labels.experienceSection}
          documentationLabel={portfolio.labels.experienceDocumentation}
        />
        <Projects
          projects={projects}
          sectionLabel={portfolio.labels.projectsSection}
          badgeLabel={portfolio.labels.projectBadge}
          focusLabel={portfolio.labels.projectFocus}
        />
        <Skills groups={portfolio.skills} sectionLabel={portfolio.labels.skillsSection} />
        <AdditionalExperience
          items={organizations}
          sectionLabel={portfolio.labels.organizationSection}
          documentationLabel={portfolio.labels.organizationDocumentation}
        />
        <Contact
          identity={portfolio.identity}
          content={portfolio.contact}
          label={portfolio.labels.contactSection}
          eyebrow={portfolio.labels.contactEyebrow}
          headline={portfolio.labels.contactHeadline}
        />
      </main>

      <Footer name={portfolio.identity.name} field={portfolio.identity.field} />
    </div>
  );
}