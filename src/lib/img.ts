/**
 * srcset helpers for the raster images in public/images.
 *
 * The widths here must match WIDTHS in scripts/responsive-images.mjs, which
 * generates the files this points at. A variant is only emitted when the
 * source is genuinely wider than the target, so `available` filters against
 * the image's real intrinsic width rather than assuming all three exist.
 */
export const WIDTHS = [480, 768, 1200] as const;

/**
 * Build a srcset for a /images/... path, plus the original as the widest
 * candidate so a large viewport still gets full quality.
 */
export function srcsetFor(src: string, intrinsicWidth?: number): string | undefined {
  if (!src.startsWith("/images/")) return undefined;
  const dot = src.lastIndexOf(".");
  if (dot < 0) return undefined;
  const stem = src.slice(0, dot);
  const ext = src.slice(dot);

  const candidates = WIDTHS
    .filter((w) => !intrinsicWidth || intrinsicWidth > w)
    .map((w) => `${stem}-${w}${ext} ${w}w`);

  if (intrinsicWidth) candidates.push(`${src} ${intrinsicWidth}w`);
  // Nothing to choose between means no srcset at all, not a one-entry one.
  return candidates.length > 1 ? candidates.join(", ") : undefined;
}
