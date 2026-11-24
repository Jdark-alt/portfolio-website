const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ARROW =
  '<svg class="arw" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg><span class="sr-only"> to </span>';

/**
 * Turns copy from the content files into safe inline HTML:
 * **bold** becomes <strong>, and "→" becomes an SVG arrow (the site's fonts have no arrow glyph).
 */
export function inline(text: string): string {
  return escape(text.trim())
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\s?→\s?/g, ` ${ARROW} `);
}
