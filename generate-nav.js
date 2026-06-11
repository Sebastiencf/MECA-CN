import fs from "fs";

// ===== CONFIG =====
const INPUT_FILE = "server.js";
const OUTPUT_FILE = "navigation.md";

// ===== LECTURE DU FICHIER =====
const content = fs.readFileSync(INPUT_FILE, "utf-8");
const lines = content.split("\n");

// ===== STRUCTURE =====
let sections = {};
let currentSection = "GENERAL";

// ===== PARSING =====
lines.forEach((line, index) => {
  const lineNumber = index + 1;

  // SECTION
  const sectionMatch = line.match(/\/\/\s*SECTION\s*-\s*(.+)/);

  if (sectionMatch) {
    currentSection = sectionMatch[1].trim();

    if (!sections[currentSection]) {
      sections[currentSection] = [];
    }
    return;
  }

  // ANCHOR
  const anchorMatch = line.match(/\/\/\s*ANCHOR:\s*(.+)/);

  if (anchorMatch) {
    const raw = anchorMatch[1].trim();

    const title = raw;

    if (!sections[currentSection]) {
      sections[currentSection] = [];
    }

    sections[currentSection].push({
      title,
      line: lineNumber,
    });
  }
});


// ===== GENERATION MARKDOWN =====
let md = `# Navigation du projet\n\n`;
md += `<br><br><br><br><br>\n\n`
Object.entries(sections).forEach(([section, items]) => {
  md += `## ${section}\n\n`;

  if (items.length === 0) {
    md += `_Aucun élément_\n\n`;
    return;
  }

  items.forEach((item) => {
    md += `### ${item.title}\n`;
    md += `- [Ouvrir dans le code](./${INPUT_FILE}#L${item.line}) (ligne ${item.line})\n\n`;
  });

  md += `<br><br><br>\n\n`
  
});

// ===== ÉCRITURE DU FICHIER =====
fs.writeFileSync(OUTPUT_FILE, md, "utf-8");

console.log(`${OUTPUT_FILE} généré avec succès`);
