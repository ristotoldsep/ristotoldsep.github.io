import type { APIRoute } from 'astro';
import { renderLlmsIndex } from '../lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(renderLlmsIndex('en', site ?? new URL('https://ristotoldsep.eu')), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
