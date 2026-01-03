document.addEventListener('DOMContentLoaded', () => {
  const setSelect = document.getElementById('setSelect');
  const startBtn = document.getElementById('startBtn');
  const questionBox = document.getElementById('questionBox');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const resultsBox = document.getElementById('results');
  const restartBtn = document.getElementById('restartBtn');

  // populate select
  const sets = Object.keys(window.ALL_SETS || {});
  if (!sets.length) {
    questionBox.innerHTML = '<p class="small">No question sets found. Make sure <code>questions.js</code> is loaded.</p>';
    startBtn.disabled = true;
    return;
  }
  sets.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = `Set ${i+1} (${s})`;
    setSelect.appendChild(opt);
  });

  // Reset UI on selection change (only when not in an active quiz)
  setSelect.addEventListener('change', () => {
    if (setSelect.disabled) return; // ignore changes while quiz is running
    questionBox.innerHTML = 'Choose a set and click Start Quiz to begin.';
    resultsBox.innerHTML = '';
  });

  let currentSet = null;
  let currentIndex = 0;
  let userAnswers = [];

  function renderQuestion() {
    if (!currentSet) {
      questionBox.innerHTML = '<p class="small">Please select a set and click Start Quiz.</p>';
      return;
    }
    const q = currentSet[currentIndex];
    questionBox.innerHTML = '';
    const qnum = document.createElement('div'); qnum.className = 'q-num'; qnum.textContent = `Question ${currentIndex+1} / ${currentSet.length} — ${q.unit}`;
    const qtext = document.createElement('div'); qtext.className = 'q-text'; qtext.textContent = q.q;
    const opts = document.createElement('div'); opts.className = 'options';
    q.options.forEach((option, idx) => {
      const div = document.createElement('div'); div.className = 'option';
      const id = `opt-${currentIndex}-${idx}`;
      const input = document.createElement('input'); input.type = 'radio'; input.name = 'option'; input.id = id; input.value = idx;
      if (userAnswers[currentIndex] === idx) input.checked = true;
      input.addEventListener('change', () => {
        userAnswers[currentIndex] = idx;
        updateProgress();
        highlightPalette();
        // visually mark selected option
        const labels = opts.querySelectorAll('label');
        labels.forEach((l, li) => l.classList.toggle('selected', li === idx));
      });
      const label = document.createElement('label');
      label.htmlFor = id;
      label.appendChild(input);
      const span = document.createElement('span'); span.textContent = option;
      label.appendChild(span);
      div.appendChild(label);
      opts.appendChild(div);
      // mark selected state initially
      if (userAnswers[currentIndex] === idx) label.classList.add('selected');
    });
    questionBox.appendChild(qnum);
    questionBox.appendChild(qtext);
    questionBox.appendChild(opts);

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentSet.length - 1;
  }

  startBtn.addEventListener('click', () => {
    const sel = setSelect.value;
    currentSet = window.ALL_SETS[sel];
    if (!currentSet || !Array.isArray(currentSet) || currentSet.length === 0) {
      alert('Selected set is empty or invalid. Choose another set.');
      return;
    }
    currentIndex = 0;
    userAnswers = Array(currentSet.length).fill(null);
    resultsBox.innerHTML = '';
    renderQuestion();
    buildPalette();
    updateProgress();
    document.getElementById('quizControls').style.display = 'block';
    document.getElementById('palette').style.display = 'flex';
    // disable controls to avoid rapid dropdown/start interactions causing errors
    setSelect.disabled = true;
    startBtn.disabled = true;
  });

  // Build question palette (navigator)
  function buildPalette() {
    if (!currentSet) return;
    const list = document.getElementById('paletteList');
    list.innerHTML = '';
    currentSet.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.className = 'p-item';
      btn.textContent = i+1;
      btn.dataset.index = i;
      btn.title = `${i+1}: ${q.unit}`;
      btn.addEventListener('click', () => { currentIndex = i; renderQuestion(); highlightPalette(); centerPaletteItem(btn); });
      list.appendChild(btn);
    });
    document.getElementById('totalCount').textContent = currentSet.length;
    highlightPalette();
  }

  function highlightPalette() {
    const list = document.getElementById('paletteList');
    const items = list.querySelectorAll('.p-item');
    items.forEach((btn, idx) => {
      btn.classList.remove('current','answered','correct','wrong');
      if (idx === currentIndex) btn.classList.add('current');
      if (userAnswers[idx] !== null) btn.classList.add('answered');
    });
    document.getElementById('answeredCount').textContent = userAnswers.filter(v => v !== null).length;
  }

  function centerPaletteItem(btn){
    // smooth scroll so the clicked item is visible
    if (!btn) return; // guard against null when UI hasn't built the palette yet
    btn.scrollIntoView({behavior:'smooth',inline:'center', block:'nearest'});
  }

  function updateProgress(){
    const p = document.getElementById('progressBar');
    const percent = Math.round((userAnswers.filter(v=>v!==null).length / currentSet.length) * 100);
    p.style.width = percent + '%';
  }


  prevBtn.addEventListener('click', () => {
    if (!currentSet) return; // guard against fast clicks before quiz starts
    if (currentIndex > 0) { currentIndex--; renderQuestion(); }
  });
  nextBtn.addEventListener('click', () => {
    if (!currentSet) return; // guard against fast clicks before quiz starts
    if (currentIndex < currentSet.length - 1) { currentIndex++; renderQuestion(); centerPaletteItem(document.querySelector(`.p-item[data-index="${currentIndex}"]`)); }
  });

  // keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!currentSet) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'Home') { currentIndex = 0; renderQuestion(); }
    if (e.key === 'End') { currentIndex = currentSet.length-1; renderQuestion(); }
  });

  submitBtn.addEventListener('click', () => {
    if (!currentSet) return; // nothing to submit
    const answered = userAnswers.filter(v => v !== null).length;
    if (answered !== currentSet.length && !confirm(`You answered ${answered}/${currentSet.length}. Submit anyway?`)) return;
    let score = 0;
    const details = [];
    currentSet.forEach((q, i) => {
      const correct = q.answer;
      const given = userAnswers[i];
      if (given === correct) score++;
      details.push({i, q, given});
    });
    resultsBox.innerHTML = `<div class="results"><strong>Score:</strong> ${score} / ${currentSet.length}</div>`;

    // mark palette items with result
    const items = document.querySelectorAll('.p-item');
    items.forEach((it, idx) => {
      it.classList.remove('correct','wrong');
      if (userAnswers[idx] === null) return;
      if (userAnswers[idx] === currentSet[idx].answer) it.classList.add('correct');
      else it.classList.add('wrong');
    });

    const list = document.createElement('div');
    list.className = 'result-list';
    details.forEach(d => {
      const el = document.createElement('div');
      el.className = 'row';
      const givenText = d.given === null ? '<em>Not answered</em>' : d.q.options[d.given];
      const correctText = d.q.options[d.q.answer];
      el.innerHTML = `<strong>Q${d.i+1}:</strong> ${d.q.q}<br><strong>Your answer:</strong> ${givenText} <span style="color:#6b7785"> — correct: ${correctText}</span>`;
      list.appendChild(el);
    });
    resultsBox.appendChild(list);
  });

  restartBtn.addEventListener('click', () => {
    document.getElementById('quizControls').style.display = 'none';
    document.getElementById('palette').style.display = 'none';
    questionBox.innerHTML = '';
    resultsBox.innerHTML = '';
    userAnswers = [];
    currentSet = null;
    currentIndex = 0;
    // re-enable controls
    setSelect.disabled = false;
    startBtn.disabled = false;
  });

  // show results button in palette
  document.getElementById('showResultsBtn').addEventListener('click', () => {
    submitBtn.click();
    document.getElementById('results').scrollIntoView({behavior:'smooth'});
  });

});