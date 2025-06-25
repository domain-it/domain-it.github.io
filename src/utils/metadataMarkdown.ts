import { MarkdownMetaData } from '@/types/metadata.type';

export interface ParsedMarkdown {
  metadata: MarkdownMetaData;
  content: string;
}

export function parseMarkdown(markdown: string): ParsedMarkdown {
  const regex = /^---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(regex);

  let metadata = {} as Partial<MarkdownMetaData>;
  let content = markdown;

  if (match) {
    const yamlContent = match[1];
    content = markdown.slice(match[0].length).trimStart();

    metadata = yamlContent.split('\n').reduce((acc, line) => {
      const [key, ...rest] = line.split(':');
      if (!key) return acc;

      let value: string = rest.join(':').trim();

      // Obsługa listy tags (linie zaczynające się od '-')
      if (value === '') {
        // Możliwe, że to lista w kolejnych liniach
        const lines = yamlContent.split('\n');
        const startIndex = lines.indexOf(line);
        const listItems = [];
        for (let i = startIndex + 1; i < lines.length; i++) {
          const l = lines[i].trim();
          if (l.startsWith('-')) {
            listItems.push(l.substring(1).trim());
          } else {
            break;
          }
        }
        // @ts-expect-error tutaj nie wiem, jaki będzie typ

        acc[key.trim()] = listItems;
        return acc;
      }

      // Parsowanie boolean
      // @ts-expect-error tutaj nie wiem, jaki będzie typ
      if (value.toLowerCase() === 'true') value = true;
      // @ts-expect-error tutaj nie wiem, jaki będzie typ
      else if (value.toLowerCase() === 'false') value = false;

      // Jeśli klucz to charset, wymuś pasowanie do typu (można też dodać walidację)
      if (key.trim() === 'charset') {
        value = value as MarkdownMetaData['charset'];
      }
      // @ts-expect-error tutaj nie wiem, jaki będzie typ
      acc[key.trim() as keyof MarkdownMetaData] = value;

      return acc;
    }, {} as Partial<MarkdownMetaData>);
  }

  // Sprawdź wymagane pola i ustaw domyślne, jeśli potrzebujesz
  if (!metadata.author) metadata.author = 'Nieznany autor';
  if (!metadata.title) metadata.title = 'Brak tytułu';
  if (!metadata.charset) metadata.charset = 'UTF-8'; // domyślny charset

  return {
    metadata: metadata as MarkdownMetaData,
    content,
  };
}
