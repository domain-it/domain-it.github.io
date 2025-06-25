// lib/fetchMarkdown.ts
import fs from 'fs';
import path from 'path';
import { parseMarkdown, ParsedMarkdown } from './metadataMarkdown';

export async function fetchMarkdown(filename: string): Promise<ParsedMarkdown> {
  const filePath = path.join(
    process.cwd(),
    'public',
    'posts',
    `${filename}`,
    `${filename}.md`
  );
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    return parseMarkdown(fileContents);
  } catch (error) {
    throw new Error(`Nie znaleziono pliku: ${filename}.md, Powód:${error}`);
  }
}
