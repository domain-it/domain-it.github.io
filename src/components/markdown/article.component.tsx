import Markdown from 'react-markdown';
import { ChangeEvent, useEffect } from 'react';
import { Article } from '../../types/article.ts';
import '@catppuccin/highlightjs/css/catppuccin-mocha.css';
import { FaTag } from 'react-icons/fa6';
import { Code } from './code/code.component.tsx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkGemoji from 'remark-gemoji';
import remarkToc from 'remark-toc';
import supersub from 'remark-supersub';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import rehypeToc from '@jsdevtools/rehype-toc';
import { CodeBlock } from './codeblock/codeblock.component.tsx';
import { Blockquote } from './blockquote/blockquote.component.tsx';
import { MarkdownLink } from './link/link.component.tsx';
import { MarkdownHeaders } from './headers/headers.component.tsx';
import { MarkdownToC } from './TableOfContent/TableOfContent.component.tsx';
import './article.style.css';
import { Dropdown } from '../inputs/dropdown/dropdown.component.tsx';
import { Switch } from '../inputs/switch/switch.component.tsx';
import { Table } from './table/table.component.tsx';
import { Divider } from './divider/divider.component.tsx';
import { MarkdownImage } from './markdownImage/markdownImage.component.tsx';
import { FiSettings } from 'react-icons/fi';
import remarkHtml from 'remark-html';

interface MarkdownArticleProps {
  article: Article;
}

export const MarkdownArticle = (props: MarkdownArticleProps) => {

  const { article } = props;

  useEffect(() => {
    document.title = `Domain.it Blog - ${article.attributes.title}`;
  }, [article]);

  const handleBgFill = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.querySelector('.markdown')?.classList.add('settings-solid');
    } else {
      document.querySelector('.markdown')?.classList.remove('settings-solid');
    }
  };

  const handleChangeFont = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case 'large':
        document.querySelector('.article-body')?.classList.add('settings-font-large');
        document.querySelector('.article-body')?.classList.remove('settings-font-small');

        break;
      case 'medium':
        document.querySelector('.article-body')?.classList.remove('settings-font-large');
        document.querySelector('.article-body')?.classList.remove('settings-font-small');
        break;
      case 'small':
        document.querySelector('.article-body')?.classList.remove('settings-font-large');
        document.querySelector('.article-body')?.classList.add('settings-font-small');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="article-meta">
        <div className="article-title">
          <h1>{article.attributes.title}</h1>
          <div className="article-details">
            <p className="article-small">{article.attributes.author}</p>
            <p className="article-small">{article.attributes.date}</p>
          </div>
        </div>

        <div className="article-tags">
          {article.attributes.tags?.map((tag, index) => (
            <p key={index} className="article-tag"><FaTag />{tag}</p>
          ))}
        </div>
      </div>
      <hr className="article-divider" />
      <div className="article-body">
        <div className="article-settings">
          <h3 className="article-settings-header">Settings <FiSettings /></h3>
          <label style={{ display: 'flex', justifyContent: 'space-between' }}>
            Font size
            <Dropdown
              onChange={event => handleChangeFont(event)}
              options={[{ label: 'large', value: 'large' }, { label: 'medium', value: 'medium' }, {
                label: 'small',
                value: 'small',
              }]}
              defaultValue={'medium'} />
          </label>
          <label style={{ display: 'flex', justifyContent: 'space-between' }}>
            Solid background
            <Switch onChange={(event) => handleBgFill(event)} />
          </label>

        </div>
        <div className="article-content">
          <Markdown remarkPlugins={[remarkGfm, remarkMath, remarkGemoji, remarkToc, supersub, remarkHtml]}
                    rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw, rehypeToc]}
                    children={article.content}
                    components={{
                      a: MarkdownLink,
                      blockquote: Blockquote,
                      code: Code,
                      hgroup: MarkdownHeaders,
                      hr: Divider,
                      img: MarkdownImage,
                      nav: MarkdownToC,
                      pre: CodeBlock,
                      table: Table,
                    }}
          />
        </div>
      </div>
    </div>
  );
};
