/**
 * The portrait, in one place.
 *
 * Served as /risto-toldsep.jpg rather than /portrait.jpg so the file name
 * itself says whose face it is. Image search and the assistants that lean on
 * it (ChatGPT, Copilot) match a person's name against file names, alt text,
 * captions and structured data; a generic "portrait.jpg" gave them nothing,
 * and ChatGPT kept pairing the name with another Risto's photo from an
 * unrelated company's staff page. /portrait.jpg stays in public/ for old
 * links and caches.
 */
export const PORTRAIT = {
  path: '/risto-toldsep.jpg',
  width: 1200,
  height: 972,
  caption: {
    en: 'Risto Tõldsep, web developer and designer in Tallinn, Estonia',
    et: 'Risto Tõldsep, veebiarendaja ja disainer Tallinnas',
  },
} as const;
