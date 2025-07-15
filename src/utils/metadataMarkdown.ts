import { MarkdownMetaData } from '@/types/metadata.type';

export interface ParsedMarkdown {
  metadata: MarkdownMetaData;
  content: string;
}

const charsetValues = new Set<MarkdownMetaData['charset']>([
  'US-ASCII',
  'UTF-8',
  'UTF-16',
  'UTF-16BE',
  'UTF-16LE',
  'UTF-32',
  'UTF-32BE',
  'UTF-32LE',
  'ISO-8859-1',
  'ISO-8859-2',
  'ISO-8859-3',
  'ISO-8859-4',
  'ISO-8859-5',
  'ISO-8859-6',
  'ISO-8859-7',
  'ISO-8859-8',
  'ISO-8859-9',
  'ISO-8859-10',
  'ISO-8859-13',
  'ISO-8859-14',
  'ISO-8859-15',
  'ISO-8859-16',
  'Windows-1250',
  'Windows-1251',
  'Windows-1252',
  'Windows-1253',
  'Windows-1254',
  'Windows-1255',
  'Windows-1256',
  'Windows-1257',
  'Windows-1258',
  'KOI8-R',
  'KOI8-U',
  'MacRoman',
  'MacCentralEurope',
  'MacCyrillic',
  'MacGreek',
  'MacTurkish',
  'MacHebrew',
  'MacArabic',
  'Shift_JIS',
  'EUC-JP',
  'ISO-2022-JP',
  'GB2312',
  'GBK',
  'GB18030',
  'Big5',
  'EUC-KR',
  'ISO-2022-KR',
  'TIS-620',
  'VISCII',
  'HZ-GB-2312',
]);

function assignValue<K extends keyof MarkdownMetaData>(
  obj: Partial<MarkdownMetaData>,
  key: K,
  value: MarkdownMetaData[K]
): void {
  obj[key] = value;
}

function parseValueForKey<K extends keyof MarkdownMetaData>(
  key: K,
  rawValue: string,
  yamlLines?: string[],
  currentLineIndex?: number
): MarkdownMetaData[K] | undefined {
  switch (key) {
    case 'author':
    case 'date':
    case 'description':
    case 'slug':
    case 'title':
    case 'thumbnail':
    case 'url':
      return rawValue as MarkdownMetaData[K];
    case 'charset':
      if (charsetValues.has(rawValue as MarkdownMetaData['charset'])) {
        return rawValue as MarkdownMetaData[K];
      }
      return 'UTF-8' as MarkdownMetaData[K];
    case 'robots':
      return (rawValue.toLowerCase() === 'true') as MarkdownMetaData[K];
    case 'tags':
      if (
        rawValue === '' &&
        yamlLines &&
        typeof currentLineIndex === 'number'
      ) {
        const listItems: string[] = [];
        for (let i = currentLineIndex + 1; i < yamlLines.length; i++) {
          const line = yamlLines[i].trim();
          if (line.startsWith('-')) {
            listItems.push(line.slice(1).trim());
          } else {
            break;
          }
        }
        return listItems.length > 0 ?
            (listItems as MarkdownMetaData[K])
          : undefined;
      }
      return rawValue.split(',').map(tag => tag.trim()) as MarkdownMetaData[K];
    default:
      return undefined;
  }
}

export function parseMarkdown(markdown: string): ParsedMarkdown {
  const regex = /^---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(regex);

  let metadata: Partial<MarkdownMetaData> = {};
  let content = markdown;

  if (match) {
    const yamlContent = match[1];
    content = markdown.slice(match[0].length).trimStart();

    const yamlLines = yamlContent.split('\n');

    metadata = yamlLines.reduce<Partial<MarkdownMetaData>>(
      (acc, line, index) => {
        if (!line.trim() || line.trim().startsWith('#')) return acc; // ignoruj puste linie i komentarze

        const [keyRaw, ...rest] = line.split(':');
        if (!keyRaw) return acc;

        const key = keyRaw.trim() as keyof MarkdownMetaData;
        const rawValue = rest.join(':').trim();

        const parsedValue = parseValueForKey(key, rawValue, yamlLines, index);
        if (parsedValue !== undefined) {
          assignValue(acc, key, parsedValue);
        }
        return acc;
      },
      {}
    );
  }

  // Wypełnij wymagane pola domyślnymi wartościami, jeśli nie zostały podane
  if (!metadata.author) metadata.author = 'Nieznany autor';
  if (!metadata.title) metadata.title = 'Brak tytułu';
  if (!metadata.charset) metadata.charset = 'UTF-8';

  return {
    metadata: metadata as MarkdownMetaData,
    content,
  };
}
