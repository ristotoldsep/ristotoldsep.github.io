import type { APIRoute } from 'astro';
import { renderLlmsFull } from '../lib/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(renderLlmsFull('en', site ?? new URL('https://ristotoldsep.eu')), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
