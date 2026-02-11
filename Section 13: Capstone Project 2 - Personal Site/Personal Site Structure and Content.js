/**
 * Personal Site Structure and Content - Capstone Project 2
 * Data and structure reference for building a multi-page personal/portfolio site.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const personalSiteStructure = {
  overview: "A multi-page personal site showcasing your skills, projects, and contact info.",
  pages: [
    { name: "Home", path: "index.html", purpose: "Landing page with intro and highlights" },
    { name: "About", path: "about.html", purpose: "Bio, skills, education, experience" },
    { name: "Projects", path: "projects.html", purpose: "Portfolio or project list with links" },
    { name: "Contact", path: "contact.html", purpose: "Contact form or links (email, social)" },
  ],
  contentSections: {
    hero: "Headline, tagline, CTA button",
    about: "Short bio, skills list, timeline or resume summary",
    projects: "Cards or list: title, description, tech stack, link/repo",
    contact: "Form fields (name, email, message) or social links",
  },
  techStack: ["HTML5", "CSS3", "Responsive design (Flexbox/Grid)", "Optional: vanilla JS for interactivity"],
};

// Example: project entries for the portfolio section
const sampleProjects = [
  { title: "Project One", description: "Brief description.", tech: ["HTML", "CSS", "JS"], link: "#", repo: "#" },
  { title: "Project Two", description: "Another project.", tech: ["Node", "Express"], link: "#", repo: "#" },
];

// Helper: generate simple project HTML (for reference or server-side use)
function projectToHtml(project) {
  return `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><small>${project.tech.join(", ")}</small></p>
      <a href="${project.link}">View</a> | <a href="${project.repo}">Repo</a>
    </article>
  `.trim();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { personalSiteStructure, sampleProjects, projectToHtml };
}
