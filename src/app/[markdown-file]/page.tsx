import './page.style.css';
import React from 'react';
import { fetchMarkdown } from '@/utils/fetchMarkdown';
import { MarkdownMetaData } from '@/types/metadata.type';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import rehypeKatex from 'rehype-katex';
import remarkGemoji from 'remark-gemoji';
import remarkDefinitionList, {
  defListHastHandlers,
} from 'remark-definition-list';
import remarkExtendedTable, {
  extendedTableHandlers,
} from 'remark-extended-table';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
// @ts-expect-error this is a js file, cannot use --save-dev
import remarkTypograf from '@mavrin/remark-typograf';
import remarkFootnotesExtra from 'remark-footnotes-extra';

import '@catppuccin/highlightjs/css/catppuccin-variables.css';

import { Blockquotes } from '@/components/markdown-components/blockquotes/blockquotes.component';
import { CodeBlock } from '@/components/markdown-components/codeblock/codeblock.component';
import { Table } from '@/components/markdown-components/table/table.component';
import { Images } from '@/components/markdown-components/images/images.component';
import { Hline } from '@/components/markdown-components/hline/hline.component';

import { FiCalendar, FiTag } from 'react-icons/fi';
import { MdPerson } from 'react-icons/md';
import { BackButton } from '@/components/markdown-components/settings/back-button/back-button.component';
import { Scroll } from '@/components/markdown-components/settings/scroll/scroll.component';
import { FontSizeSettings } from '@/components/markdown-components/settings/settings-menu/settings-menu.component';
import Image from 'next/image';

interface Props {
  params: Promise<{ 'markdown-file': string }>;
}

export const dynamicParams = true

export default async function MarkdownPage({ params }: Props) {
  const { 'markdown-file': markdownFile } = await params;

  let metadata: MarkdownMetaData = {
    author: 'Dominik Boczkowski',
    title: '',
    charset: 'UTF-8',
  };
  let content = '';

  try {
    const parsed = await fetchMarkdown(markdownFile);
    metadata = parsed.metadata;
    content = parsed.content;
  } catch (error) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <article>
      <header className="article-header">
        <h1 className="article-title">{metadata.title || 'Brak tytułu'}</h1>
        <p className="article-author">
          <MdPerson /> {metadata.author || 'Nieznany'}
        </p>
        <p className="article-data">
          <FiCalendar /> {metadata.date || 'Brak daty'}
        </p>
        {metadata.tags && (
          <div className="article-tags">
            <FiTag className={'article-tags-icon'} />
            {(metadata.tags as string[]).map(tag => (
              <div className="article-tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        )}
        <Image
          className={'thumbnail_image'}
          src={`/posts/${markdownFile}/${markdownFile}.jpg`}
          alt={'thumbnail'}
          width={0}
          height={0}
          sizes={'100vw'}
        />
        <div className="cover" />
      </header>
      <div className="article-settings">
        <BackButton />
        <FontSizeSettings />
      </div>
      <div className="article-content">
        <Markdown
          remarkPlugins={[
            remarkParse,
            remarkGfm,
            remarkMath,
            remarkGemoji,
            remarkDefinitionList,
            remarkExtendedTable,
            remarkTypograf,
            remarkFootnotesExtra,
          ]}
          rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeSlug, rehypeToc]}
          remarkRehypeOptions={{
            handlers: { ...defListHastHandlers, ...extendedTableHandlers },
          }}
          components={{
            hr: Hline,
            blockquote: Blockquotes,
            code: CodeBlock,
            table: Table,
            // @ts-expect-error nie wiem jaki typ dac dla img
            img: Images,
          }}
        >
          {content || ''}
        </Markdown>
      </div>
      <Scroll />
    </article>
  );
}
