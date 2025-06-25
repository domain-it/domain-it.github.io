import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((name) => ({
    markdownFile: name.replace(/\.md$/, ''),
  }));
}
