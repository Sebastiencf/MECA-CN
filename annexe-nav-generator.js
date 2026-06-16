import fs from "fs";

// ===== CONFIG =====
const INPUT_FILE = "annexe.js";
const OUTPUT_FILE = "navigation-annexe.md";

// ===== LECTURE =====
const content = fs.readFileSync(INPUT_FILE, "utf-8");
const lines = content.split("\n");

// ===== STRUCTURE =====
let sections = {};
let currentSection = "GENERAL";

function ensureSection(name) {
  if (!sections[name]) {
    sections[name] = [];
  }
}

// initialise GENERAL
ensureSection(currentSection);

// ===== PARSING =====
lines.forEach((line, index) => {
  const lineNumber = index + 1;

  // =========================
  // SECTION DETECTION (robuste)
  // =========================
  const sectionMatch = line.match(/\/\/\s*SECTION\s*[-:]\s*(.+)/i);

  if (sectionMatch) {
    currentSection = sectionMatch[1].trim();
    ensureSection(currentSection);
    return;
  }

  // =========================
  // ANCHOR DETECTION
  // =========================
  const anchorMatch = line.match(/\/\/\s*ANCHOR:\s*(.+)/);

  if (anchorMatch) {
    const title = anchorMatch[1].trim();

    ensureSection(currentSection);

    sections[currentSection].push({
      title,
      line: lineNumber,
    });
  }
});

// ===== CLEAN EMPTY SECTIONS =====
Object.keys(sections).forEach((key) => {
  if (sections[key].length === 0) {
    delete sections[key];
  }
});

// ===== MARKDOWN GENERATION =====
let md = `# Navigation du projet\n\n`;
md += `<br><br><br><br><br>\n\n`;

Object.entries(sections).forEach(([section, items]) => {
  md += `## ${section}\n\n`;

  items.forEach((item) => {
    md += `### ${item.title}\n`;
    md += `- [Ouvrir dans le code](./${INPUT_FILE}#L${item.line}) (ligne ${item.line})\n\n`;
  });

  md += `<br><br><br>\n\n`;
});

// ===== OUTPUT =====
fs.writeFileSync(OUTPUT_FILE, md, "utf-8");

console.log(`${OUTPUT_FILE} généré avec succès`);