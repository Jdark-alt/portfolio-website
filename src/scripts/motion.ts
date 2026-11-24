/**
 * Site motion. One engine, three choreographies (one per visual direction).
 *
 * Rules this file keeps:
 *  - Content is complete without it: no-JS, reduced motion, or a failed load all show
 *    every element in its final state (see the motion gating rules in global.css).
 *  - Motion guides reading. Nothing loops, nothing blocks scrolling, and intros finish
 *    in under two seconds.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

declare global {
  interface Window { __jfMotion?: boolean; __jfLenis?: Lenis }
}

type Dir = 'a' | 'b' | 'c';
window.__jfMotion = true;
const root = document.documentElement;
const dir = (root.dataset.direction ?? 'a') as Dir;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => scope.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<T>(sel));

gsap.registerPlugin(ScrollTrigger, SplitText);

/** Per-direction feel. */
const FEEL = {
  a: { ease: 'expo.out', dur: 1.1, y: 28 },
  b: { ease: 'power3.out', dur: 1.25, y: 18 },
  c: { ease: 'power4.out', dur: 1.0, y: 20 },
}[dir];

function showEverything() {
  root.classList.remove('js');
  $$('[data-loop]').forEach((fig) => setLoop(fig, 6, false));
}

/* ---------------------------------------------------------------- header */
function initHeader(lenis?: Lenis) {
  const header = $('[data-header]');
  const menu = $<HTMLDetailsElement>('[data-menu]');
  if (menu) {
    menu.addEventListener('toggle', () => {
      if (menu.open) lenis?.stop(); else lenis?.start();
      header?.classList.remove('is-hidden');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary')?.focus(); }
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => (menu.open = false)));
  }
  if (!header || reduce) return;
  let last = 0;
  const onScroll = (y: number) => {
    const down = y > last;
    header.classList.toggle('is-hidden', down && y > 240 && !menu?.open);
    last = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }: { scroll: number }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
}

/* ---------------------------------------------------------------- loop figure (direction C) */
function setLoop(fig: Element, lit: number, animate = true) {
  const nodes = $$('[data-loop-node]', fig);
  const total = nodes.length || 6;
  nodes.forEach((n, i) => (i < lit ? n.setAttribute('data-on', 'true') : n.removeAttribute('data-on')));
  const live = $<SVGPathElement>('[data-loop-live]', fig);
  const target = 1 - Math.max(0, lit - 1) / total - (lit >= total ? 1 / total : 0);
  if (live) gsap.to(live, { strokeDashoffset: Math.max(0, target), duration: animate ? 0.9 : 0, ease: 'power3.inOut', overwrite: true });
  const label = `${lit} / ${total}`;
  $$('[data-loop-count], [data-loop-lit]', fig).forEach((el) => (el.textContent = label));
}

/* ---------------------------------------------------------------- text */
function splitLines(el: HTMLElement) {
  return SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'ln', aria: 'auto' });
}
function splitWords(el: HTMLElement) {
  return SplitText.create(el, { type: 'words', wordsClass: 'wd', aria: 'auto' });
}

/** Reveals a heading in the direction's voice. Returns a tween (for timelines). */
function headingTween(el: HTMLElement, delay = 0) {
  gsap.set(el, { autoAlpha: 1 });
  if (dir === 'b') {
    const s = splitWords(el);
    return gsap.from(s.words, {
      autoAlpha: 0, yPercent: 35, filter: 'blur(8px)', duration: FEEL.dur, ease: FEEL.ease,
      stagger: 0.045, delay, onComplete: () => { gsap.set(s.words, { clearProps: 'filter' }); s.revert(); },
    });
  }
  const s = splitLines(el);
  if (dir === 'c') {
    return gsap.from(s.lines, {
      clipPath: 'inset(0 100% 0 0)', duration: 1.05, ease: 'power4.inOut', stagger: 0.12, delay,
      onComplete: () => s.revert(),
    });
  }
  return gsap.from(s.lines, {
    yPercent: 110, duration: FEEL.dur + 0.1, ease: FEEL.ease, stagger: 0.085, delay,
    onComplete: () => s.revert(),
  });
}

/* ---------------------------------------------------------------- hero intros */
function heroIntro() {
  const hero = $('[data-hero]');
  if (!hero) return;
  const eyebrow = $('.eyebrow', hero);
  const h1 = $<HTMLElement>('h1', hero)!;
  const leadItems = $$('.lead-col [data-reveal]', hero);
  const tl = gsap.timeline({ defaults: { ease: FEEL.ease } });

  if (dir === 'a') {
    const lines = $$('[data-gridlines] span', hero);
    tl.from(lines, { scaleY: 0, duration: 1.6, stagger: 0.035, ease: 'power3.inOut' }, 0);
    if (eyebrow) tl.fromTo(eyebrow, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1);
    tl.add(headingTween(h1), 0.15);
    tl.fromTo(leadItems, { autoAlpha: 0, y: FEEL.y }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.09 }, 0.65);
    const rows = $$('.side-a .row', hero);
    const side = $('.side-a', hero);
    if (side) tl.set(side, { autoAlpha: 1 }, 0.7);
    tl.from(rows, { clipPath: 'inset(0 100% 0 0)', duration: 0.9, stagger: 0.07, ease: 'power3.inOut' }, 0.75);
  }

  if (dir === 'b') {
    if (eyebrow) tl.fromTo(eyebrow, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 0);
    tl.add(headingTween(h1), 0.1);
    tl.fromTo(leadItems, { autoAlpha: 0, y: FEEL.y }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.12 }, 0.9);
    const side = $('.side-b', hero);
    if (side) {
      tl.set(side, { autoAlpha: 1 }, 1);
      tl.from($$('li', side), { autoAlpha: 0, y: 14, duration: 1, stagger: 0.08 }, 1.05);
    }
  }

  if (dir === 'c') {
    if (eyebrow) tl.fromTo(eyebrow, { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0);
    tl.from($$('.crop', hero), { scale: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 0);
    tl.add(headingTween(h1), 0.1);
    tl.fromTo(leadItems, { autoAlpha: 0, y: FEEL.y }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.7);
    const side = $('.side-c', hero);
    const fig = side && $('[data-loop]', side);
    if (side && fig) {
      tl.fromTo(side, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.4);
      setLoop(fig, 0, false);
      const state = { lit: 0 };
      tl.to(state, {
        lit: 6, duration: 2.2, ease: 'power1.inOut',
        onUpdate: () => {
          const n = Math.round(state.lit);
          if (n !== Number(fig.getAttribute('data-lit'))) { fig.setAttribute('data-lit', String(n)); setLoop(fig, n); }
        },
      }, 0.8);
    }
  }
  // Anything in the hero the timeline didn't touch becomes visible.
  tl.add(() => $$('[data-reveal], [data-split]', hero).forEach((el) => gsap.set(el, { autoAlpha: 1 })), '>-0.6');
}

/* ---------------------------------------------------------------- scroll reveals */
function scrollReveals() {
  const hero = $('[data-hero]');
  const items = $$('[data-reveal]').filter((el) => !hero?.contains(el));
  ScrollTrigger.batch(items, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(batch, { autoAlpha: 0, y: FEEL.y }, { autoAlpha: 1, y: 0, duration: FEEL.dur, ease: FEEL.ease, stagger: 0.08, overwrite: true }),
  });
  $$('[data-split]').filter((el) => !hero?.contains(el)).forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => headingTween(el) });
  });
}

function countUps() {
  $$('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const state = { v: 0 };
    el.textContent = '0';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target, duration: target > 9 ? 1.6 : 0.9, ease: 'power2.out',
          onUpdate: () => (el.textContent = String(Math.round(state.v))),
        }),
    });
  });
}

function parallax() {
  $$('[data-parallax]').forEach((el) => {
    const f = Number(el.dataset.parallax) || 0.5;
    gsap.fromTo(el, { yPercent: 6 * f }, {
      yPercent: -6 * f, ease: 'none',
      scrollTrigger: { trigger: el.closest('figure') ?? el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    });
  });
  $$('[data-clip]').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'inset(10% 6% 10% 6%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/* ---------------------------------------------------------------- How I work */
function howIWork() {
  const section = $('[data-how]');
  if (!section) return;
  const steps = $$('.step', section);
  if (dir === 'a') {
    ScrollTrigger.create({
      trigger: $('.steps', section),
      start: 'top 70%',
      end: 'bottom 45%',
      onUpdate: (self) => {
        const lit = Math.min(steps.length, Math.floor(self.progress * (steps.length + 0.999)) + (self.progress > 0 ? 1 : 0));
        steps.forEach((s, i) => s.classList.toggle('is-on', i < lit));
      },
      onLeaveBack: () => steps.forEach((s) => s.classList.remove('is-on')),
    });
  }
  if (dir === 'c') {
    const fig = $('.how-fig [data-loop]', section);
    const wide = window.matchMedia('(min-width: 900px)').matches;
    if (fig) setLoop(fig, 0, false);
    steps.forEach((s, i) => {
      ScrollTrigger.create({
        trigger: s,
        start: wide ? 'top 55%' : 'top 80%',
        end: wide ? 'bottom 55%' : 'bottom 20%',
        onToggle: (self) => {
          if (self.isActive) {
            steps.forEach((x) => x.classList.toggle('is-on', x === s));
            if (fig) setLoop(fig, i + 1);
          }
        },
        onLeaveBack: () => { if (i === 0) { s.classList.remove('is-on'); if (fig) setLoop(fig, 0); } },
      });
    });
  }
}

/* ---------------------------------------------------------------- magnetic CTA */
function magnetic() {
  if (!finePointer) return;
  $$('[data-magnetic]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.18);
      y((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
    });
  });
}

/* ---------------------------------------------------------------- boot */
async function boot() {
  if (reduce) {
    showEverything();
    initHeader();
    return;
  }
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
    anchors: { offset: -88 },
  });
  window.__jfLenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  initHeader(lenis);
  // Measure lines only after the fonts have loaded (but never wait more than 1.2 s).
  await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1200))]);
  heroIntro();
  scrollReveals();
  countUps();
  parallax();
  howIWork();
  magnetic();
  ScrollTrigger.refresh();
}

boot().catch((err) => {
  console.error(err);
  showEverything();
});
