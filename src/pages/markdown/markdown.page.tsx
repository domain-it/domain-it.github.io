import { useEffect, useState } from 'react';
import getMetadata from '../../utils/getMetadata.ts';
import { Article } from '../../types/article.ts';
import './markdown.style.css';
import '@catppuccin/highlightjs/css/catppuccin-mocha.css';
import { MarkdownArticle } from '../../components/markdown/article.component.tsx';


export const MarkdownPage = () => {
  const [file, setFile] = useState<Article>({
    attributes: {
      title: '',
      description: undefined,
      tags: undefined,
      date: undefined,
      robots: true,
      charset: 'UTF-8',
      author: '',
    },
    content: '',
  });

  useEffect(() => {
    fetch('./article/lorem.md')
      .then(res => res.text())
      .then((text) => {
        setFile(getMetadata(text));
      });
  }, []);


  return (
    <div className="container markdown">
      <MarkdownArticle article={file} />
    </div>
  );
};
