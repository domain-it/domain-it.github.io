import { Article, Attributes } from '../types/article.ts';

function getMetadata(markdownText: string): Article {
  const regex = /^---\s*([\s\S]*?)\s*---/;

  const match = markdownText.match(regex);
  if (!match) {
    return {
      attributes: {
        title: '',
        robots: true,
        charset: 'UTF-8',
      } as Attributes,
      content: markdownText.trim(),
    };
  }

  const frontmatterText = match[1];
  const content = markdownText.replace(match[0], '').trim();

  const attributes: Attributes = {
    title: '',
    author: '',
    robots: true,
    charset: 'UTF-8',
  };

  const lines = frontmatterText.split('\n').filter(line => line.trim());

  let currentKey: keyof Attributes | null = null;
  let isArray = false;

  lines.forEach(line => {
    if (line.match(/^\w+:/)) {
      isArray = false;
      const [key, value] = line.split(':').map(part => part.trim());
      currentKey = key as keyof Attributes;

      if (!value) {
        if (currentKey === 'tags') {
          attributes[currentKey] = [];
          isArray = true;
        }
      } else {
        switch (currentKey) {
          case 'title':
            attributes[currentKey] = value;
            break;
          case 'author':
            attributes[currentKey] = value;
            break;
          case 'description':
            attributes[currentKey] = value;
            break;
          case 'date':
            attributes[currentKey] = value;
            break;
          case 'robots':
            attributes[currentKey] = value === 'true';
            break;
          case 'charset':
            attributes[currentKey] = value as typeof attributes.charset;
            break;
          case 'tags':
            attributes[currentKey] = [value];
            break;
        }
      }
    } else if (isArray && line.match(/^\s*-\s*/) && currentKey === 'tags') {
      const value = line.replace(/^\s*-\s*/, '').trim();
      (attributes[currentKey] as string[]).push(value);
    }
  });

  return {
    attributes,
    content,
  };
}

export default getMetadata;
