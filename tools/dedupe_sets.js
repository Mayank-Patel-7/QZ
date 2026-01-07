const fs = require('fs');
const path = 'questions.js.bak';
const s = fs.readFileSync(path, 'utf8');

const pattern = /(set(\d+))\s*:\s*\[/ig;
const matches = [...s.matchAll(pattern)];

const sets = {};
for (let i = 0; i < matches.length; i++) {
  const setName = matches[i][1];
  const setNum = parseInt(matches[i][2], 10);
  const start = matches[i].index + matches[i][0].length;
  const end = i + 1 < matches.length ? matches[i + 1].index : s.length;
  const block = s.slice(start, end);
  sets[setNum] = block;
}

function normalize(q) {
  return q.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '');
}

const qmap = {};
for (const setNumStr of Object.keys(sets).sort((a,b)=>a-b)) {
  const setNum = parseInt(setNumStr,10);
  if (setNum < 9 || setNum > 34) continue;
  const block = sets[setNum];
  const qre = /q\s*:\s*"([^"]+)"/ig;
  const qs = [...block.matchAll(qre)].map(m => m[1]);
  qs.forEach((q, idx) => {
    const k = normalize(q);
    if (!qmap[k]) qmap[k] = [];
    qmap[k].push({ set: setNum, idx, q });
  });
}

const dups = Object.entries(qmap).filter(([k,v]) => v.length > 1);

const report = {
  total_sets_in_range: Object.keys(sets).filter(n => n>=9 && n<=34).length,
  total_unique_questions: Object.keys(qmap).length,
  duplicate_count: dups.length,
  examples: dups.slice(0,10).map(([k,v]) => ({ normalized: k, occurrences: v }))
};

console.log(JSON.stringify(report, null, 2));
