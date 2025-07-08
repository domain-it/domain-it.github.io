import React from 'react';
import { MarkdownMetaData } from '@/types/metadata.type';
import './card.style.css';
import Link from 'next/link';
import Image from 'next/image';
import './card.style.css';
import { MdPerson } from 'react-icons/md';
import { FiCalendar, FiTag } from 'react-icons/fi';
import { BiRightArrow } from 'react-icons/bi';

interface ArticleCardProps {
  article: MarkdownMetaData;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description, author, date, tags, url, thumbnail } = article;
  console.log('article', article);
  return (
    <div className="card">
      {thumbnail ?
        <Image
          className="thumbnail"
          style={{ objectFit: 'cover' }}
          fill={true}
          src={thumbnail}
          alt={'test'}
        />
      : null}
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              <FiTag />
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="author chip">
        <MdPerson /> {author}
      </div>
      <div className="date chip">
        <FiCalendar /> {date}
      </div>
      <h3 className="title">{title}</h3>
      <p>
        <em>{description}</em>
      </p>
      {url ?
        <Link className="url" href={`article/${url}`}>
          <BiRightArrow />
        </Link>
      : null}
    </div>
  );
};
