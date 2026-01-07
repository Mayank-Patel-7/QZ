const fs = require('fs');
const files = ['questions.js.bak', 'QZ/questions.js'];
const allSets = {}; // {setNum: [{source, block}]}

const pattern = /(set(\d+))\s*:\s*\[/ig;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const s = fs.readFileSync(file, 'utf8');
  const matches = [...s.matchAll(pattern)];
  for (let i = 0; i < matches.length; i++) {
    const setNum = parseInt(matches[i][2], 10);
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : s.length;
    const block = s.slice(start, end);
    if (!allSets[setNum]) allSets[setNum] = [];
    allSets[setNum].push({ source: file, block });
  }
}

function normalize(q) {
  return q.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '');
}

const qmap = {};
for (const setNumStr of Object.keys(allSets).sort((a,b)=>a-b)) {
  const setNum = parseInt(setNumStr,10);
  if (setNum < 9 || setNum > 34) continue;
  const entries = allSets[setNum];
  for (const e of entries) {
    const block = e.block;
    const qre = /q\s*:\s*"([^"]+)"/ig;
    const qs = [...block.matchAll(qre)].map(m => m[1]);
    qs.forEach((q, idx) => {
      const k = normalize(q);
      if (!qmap[k]) qmap[k] = [];
      qmap[k].push({ set: setNum, idx, q, source: e.source });
    });
  }
}

const dups = Object.entries(qmap).filter(([k,v]) => v.length > 1);

const report = {
  sets_found: Object.keys(allSets).filter(n => n>=9 && n<=34).map(Number).sort((a,b)=>a-b),
  total_sets_in_range: Object.keys(allSets).filter(n => n>=9 && n<=34).length,
  total_unique_questions: Object.keys(qmap).length,
  duplicate_count: dups.length,
  examples: dups.slice(0,20).map(([k,v]) => ({ normalized: k, occurrences: v }))
};

console.log(JSON.stringify(report, null, 2));
