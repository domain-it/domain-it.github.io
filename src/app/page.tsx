'use client';
import './page.style.css';
import { useEffect, useState } from 'react';
import { MarkdownMetaData } from '@/types/metadata.type';
import { fetchPosts } from '@/utils/fetchPosts';
import { ArticleCard } from '@/components/card/card.component';

export default function Home() {
  const [posts, setPosts] = useState<MarkdownMetaData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Błąd: {error}</p>;
  if (posts.length === 0)
    return (
      <div className="loading">
        Loading resources... <span className={'cursor'}>|</span>
      </div>
    );

  return (
    <div>
      <h1>Posts</h1>
      <div className={'article-list'}>
        {posts.map(post => (
          <ArticleCard key={post.slug} article={post} />
        ))}
      </div>
    </div>
  );
}
