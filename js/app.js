// Simple client-side random joke fetcher
const button = document.getElementById('getJoke');
const setupEl = document.getElementById('setup');
const punchEl = document.getElementById('punchline');
const auto = document.getElementById('autoPlay');
let timer = null;

async function fetchJoke() {
  try {
    setupEl.textContent = 'Loading…';
    punchEl.textContent = '';

    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = await res.json();

    setupEl.textContent = j.setup || '';
    punchEl.textContent = j.punchline || '';
  } catch (err) {
    setupEl.textContent = 'Failed to load a joke.';
    punchEl.textContent = err.message || String(err);
  }
}

button.addEventListener('click', fetchJoke);

auto.addEventListener('change', (e) => {
  if (e.target.checked) {
    fetchJoke();
    timer = setInterval(fetchJoke, 10000);
  } else {
    clearInterval(timer);
    timer = null;
  }
});
