/* Tab bar icons drawn after SF Symbols, the way an iPhone tab bar shows them: an outline for a
   tab at rest, the filled version for the one you are on (native.css swaps the two on .is-active).

   app.js renders the tab bar with Lucide icons on every route change; this replaces them inside
   #tabbar only, keyed by the tab's link, so the website and every other icon stay as they are. */

const line = (body) => `<svg class="sf sf-line" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const fill = (body) => `<svg class="sf sf-fill" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${body}</svg>`;

// house / house.fill
const HOME = line('<path d="M3.8 10.6 12 3.7l8.2 6.9"/><path d="M5.9 9v10a2 2 0 0 0 2 2H10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h2.1a2 2 0 0 0 2-2V9"/>')
  + fill('<path d="M12.65 2.94a1 1 0 0 0-1.3 0L2.98 10a1 1 0 0 0 1.3 1.53L5 10.9V19a2.5 2.5 0 0 0 2.5 2.5H10V16a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.5h2.5A2.5 2.5 0 0 0 19 19v-8.1l.72.62A1 1 0 0 0 21.02 10z"/>');

// list.bullet.clipboard / .fill
const MISSIONS = line('<path d="M9 4.5H7.5A2.5 2.5 0 0 0 5 7v12a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7a2.5 2.5 0 0 0-2.5-2.5H15"/><rect x="9" y="2.75" width="6" height="3.5" rx="1.2"/><path d="M11.2 11h4.3M11.2 15h4.3"/><circle cx="8.6" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="8.6" cy="15" r="1" fill="currentColor" stroke="none"/>')
  + fill('<path fill-rule="evenodd" d="M7.5 4H9v.6c0 .9.7 1.6 1.6 1.6h2.8c.9 0 1.6-.7 1.6-1.6V4h1.5A2.5 2.5 0 0 1 19 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-13A2.5 2.5 0 0 1 7.5 4zM7.65 11a.95.95 0 1 0 1.9 0 .95.95 0 1 0-1.9 0zm0 4a.95.95 0 1 0 1.9 0 .95.95 0 1 0-1.9 0zm3.55-4.85h4.3a.85.85 0 0 1 0 1.7h-4.3a.85.85 0 0 1 0-1.7zm0 4h4.3a.85.85 0 0 1 0 1.7h-4.3a.85.85 0 0 1 0-1.7z"/><rect x="9.7" y="1.8" width="4.6" height="3.4" rx="1"/>');

// newspaper / newspaper.fill
const NEWS = line('<path d="M16 19V6.5A2.5 2.5 0 0 0 13.5 4h-8A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20H18a2 2 0 0 0 2-2v-7.5A1.5 1.5 0 0 0 18.5 9H16"/><rect x="6" y="7.2" width="4" height="3.6" rx=".6"/><path d="M12.6 7.8h.4M12.6 10.3h.4M6.2 14h6.6M6.2 17h6.6"/>')
  + fill('<path fill-rule="evenodd" d="M5.5 3.5h8A2.5 2.5 0 0 1 16 6v12.5a2 2 0 0 0 2 2H5.5A2.5 2.5 0 0 1 3 18V6a2.5 2.5 0 0 1 2.5-2.5zM6.6 7h3.3a.7.7 0 0 1 .7.7v2.6a.7.7 0 0 1-.7.7H6.6a.7.7 0 0 1-.7-.7V7.7a.7.7 0 0 1 .7-.7zm0 6.1h6.3a.85.85 0 0 1 0 1.7H6.6a.85.85 0 0 1 0-1.7zm0 3h6.3a.85.85 0 0 1 0 1.7H6.6a.85.85 0 0 1 0-1.7zm5.8-9h.6a.85.85 0 0 1 0 1.7h-.6a.85.85 0 0 1 0-1.7zm0 2.9h.6a.85.85 0 0 1 0 1.7h-.6a.85.85 0 0 1 0-1.7z"/><path d="M17.3 8.5h1.7a1.5 1.5 0 0 1 1.5 1.5v8.5a1.75 1.75 0 0 1-3.5 0V8.8a.3.3 0 0 1 .3-.3z"/>');

// trophy / trophy.fill
const RATING = line('<path d="M7.5 4h9v5.5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 6H5.2a.7.7 0 0 0-.7.7v.8a3 3 0 0 0 3 3h.2M16.5 6h2.3a.7.7 0 0 1 .7.7v.8a3 3 0 0 1-3 3h-.2M12 14v3.5M8.5 20.5h7M10 17.5h4v3h-4z"/>')
  + fill('<path d="M7 3.5h10a.5.5 0 0 1 .5.5v5.5a5.5 5.5 0 0 1-11 0V4a.5.5 0 0 1 .5-.5z"/><rect x="11" y="13.5" width="2" height="4.5"/><rect x="8" y="17.5" width="8" height="3.6" rx="1"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M6.8 6H5.2a.7.7 0 0 0-.7.7v.8a3 3 0 0 0 3 3M17.2 6h1.6a.7.7 0 0 1 .7.7v.8a3 3 0 0 1-3 3"/>');

// gift / gift.fill
const REWARDS = line('<rect x="3.5" y="8" width="17" height="4" rx="1.2"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M12 8v13M12 8S10.8 3.5 8.2 3.5a2.25 2.25 0 0 0 0 4.5M12 8s1.2-4.5 3.8-4.5a2.25 2.25 0 0 1 0 4.5"/>')
  + fill('<path d="M4.7 7.5h6.55v5H3.7a.7.7 0 0 1-.7-.7V8.7a1.2 1.2 0 0 1 1.2-1.2zm8.05 0h6.55A1.2 1.2 0 0 1 20.5 8.7v3.1a.7.7 0 0 1-.7.7h-7.05zM4.7 13.8h6.55V21.5H7a2.3 2.3 0 0 1-2.3-2.3zm8.05 0h6.55v5.4a2.3 2.3 0 0 1-2.3 2.3h-4.25z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 7.5S10.8 3.3 8.2 3.3a2.1 2.1 0 0 0 0 4.2M12 7.5s1.2-4.2 3.8-4.2a2.1 2.1 0 0 1 0 4.2"/>');

const ICONS = { '#/': HOME, '#/missions': MISSIONS, '#/news': NEWS, '#/rating': RATING, '#/rewards': REWARDS };

function swap(bar) {
  bar.querySelectorAll('.tab-item:not(.tab-me)').forEach((tab) => {
    const art = ICONS[tab.getAttribute('href')];
    if (!art || tab.querySelector(':scope > .sf-icon')) return;
    const old = tab.querySelector(':scope > svg, :scope > i[data-lucide]');
    const icon = document.createElement('span');
    icon.className = 'sf-icon';
    icon.innerHTML = art;
    if (old) old.replaceWith(icon); else tab.prepend(icon);
  });
}

function watch() {
  const bar = document.getElementById('tabbar');
  if (!bar) return;
  swap(bar);
  // Only the bar's own children: each route change rewrites it
  new MutationObserver(() => swap(bar)).observe(bar, { childList: true, subtree: true });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
else watch();
