#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver. Google does not
 * participate).
 *
 * Deliberately NOT wired into `npm run build`. IndexNow is for pages that
 * actually changed; resubmitting all 38 URLs on every deploy is the behaviour
 * that gets a host throttled or ignored, and most deploys here touch nothing
 * a search engine cares about.
 *
 *   npm run indexnow                          submit everything in the sitemap
 *   npm run indexnow -- /work/ /about/        submit specific paths
 *   npm run indexnow -- --dry-run             show what would be sent
 */

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'ristotoldsep.eu';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

async function findKey() {
  const { readdir } = await import('node:fs/promises');
  const files = await readdir(join(ROOT, 'public'));
  const keyFile = files.find((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f));
  if (!keyFile) throw new Error('No IndexNow key file found in public/');
  return keyFile.replace(/\.txt$/, '');
}

async function urlsFromSitemap() {
  const xml = await readFile(join(ROOT, 'dist', 'sitemap-0.xml'), 'utf8').catch(() => {
    throw new Error('dist/sitemap-0.xml not found. Run `npm run build` first.');
  });
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const paths = args.filter((a) => !a.startsWith('--'));

const key = await findKey();
const urlList = paths.length
  ? paths.map((p) => new URL(p, ORIGIN).href)
  : await urlsFromSitemap();

if (!urlList.length) {
  console.error('Nothing to submit.');
  process.exit(1);
}

const payload = { host: HOST, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList };

console.log(`IndexNow: ${urlList.length} URL(s) via ${payload.keyLocation}`);
for (const u of urlList) console.log('  ' + u);

if (dryRun) {
  console.log('\n--dry-run, nothing sent.');
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

// 200 accepted, 202 accepted but key still being validated
if (res.status === 200 || res.status === 202) {
  console.log(`\nAccepted (HTTP ${res.status}).`);
} else {
  console.error(`\nFailed: HTTP ${res.status} ${res.statusText}`);
  console.error(await res.text().catch(() => ''));
  process.exit(1);
}
