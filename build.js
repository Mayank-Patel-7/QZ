const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'QZ');
const filesToCopy = ['index.html', 'quiz.js', 'questions.js', 'quiz.css'];

// ensure output directory exists and is empty
if (fs.existsSync(out)) {
  fs.rmSync(out, { recursive: true, force: true });
}
fs.mkdirSync(out, { recursive: true });

filesToCopy.forEach(f => {
  const src = path.join(__dirname, f);
  const dest = path.join(out, f);
  if (!fs.existsSync(src)) {
    console.warn(`Warning: ${f} not found, skipping`);
    return;
  }
  fs.copyFileSync(src, dest);
});

console.log('Build complete. Output directory:', out);
console.log('Contents:');
fs.readdirSync(out).forEach(f => console.log(' -', f));
