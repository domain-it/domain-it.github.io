import { MarkdownMetaData } from '@/types/metadata.type';

export async function fetchPosts(): Promise<MarkdownMetaData[]> {
  const res = await fetch('/posts.json');
  if (!res.ok) {
    throw new Error('Nie udało się pobrać listy artykułów');
  }
  return await res.json();
}
