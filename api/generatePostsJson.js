const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'public/posts');
const outputFile = path.join(process.cwd(), 'public/posts.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return null;

  const yamlContent = match[1];
  const lines = yamlContent.split('\n');

  const data = {};
  let currentKey = null;
  let isArray = false;
  let arrayValues = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (/^[a-zA-Z0-9_-]+:\s*$/.test(line)) {
      if (currentKey && isArray) {
        data[currentKey] = arrayValues;
      }
      currentKey = line.replace(/:$/, '');
      isArray = true;
      arrayValues = [];
    } else if (/^[a-zA-Z0-9_-]+:\s*(.+)$/.test(line)) {
      if (currentKey && isArray) {
        data[currentKey] = arrayValues;
        currentKey = null;
        isArray = false;
        arrayValues = [];
      }
      const [, key, value] = line.match(/^([a-zA-Z0-9_-]+):\s*(.+)$/);
      data[key] = parseValue(value);
    } else if (isArray && /^-\s*(.+)$/.test(line)) {
      const [, val] = line.match(/^-\s*(.+)$/);
      arrayValues.push(parseValue(val));
    }
  }

  if (currentKey && isArray) {
    data[currentKey] = arrayValues;
  }

  return data;
}

function parseValue(value) {
  value = value.trim();
  if (value.toLowerCase() === 'true') return true;
  if (value.toLowerCase() === 'false') return false;
  if (!isNaN(value)) return Number(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return value.replace(/^["']|["']$/g, '');
}

function getAllPostsMetadata() {
  const folderNames = fs
    .readdirSync(postsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const posts = folderNames
    .map(folderName => {
      const folderPath = path.join(postsDir, folderName);

      // Ignorujemy podfolder attachments
      const files = fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => {
          return !(dirent.isDirectory() && dirent.name === 'attachments');
        })
        .map(dirent => dirent.name);

      // Szukamy pliku markdown (zakładamy, że jest dokładnie jeden)
      const mdFiles = files.filter(f => f.endsWith('.md'));
      if (mdFiles.length === 0) {
        console.warn(`Brak pliku .md w folderze: ${folderName}`);
        return null;
      }
      if (mdFiles.length > 1) {
        console.warn(
          `Więcej niż jeden plik .md w folderze: ${folderName}, użyję pierwszego.`
        );
      }
      const mdFilePath = path.join(folderPath, mdFiles[0]);
      const fileContents = fs.readFileSync(mdFilePath, 'utf8');
      const data = parseFrontmatter(fileContents);
      if (!data) {
        console.warn(
          `Brak frontmatter w pliku: ${mdFiles[0]} w folderze ${folderName}`
        );
        return null;
      }

      // Szukamy thumbnail - plik graficzny w folderze (pomijamy attachments i pliki .md)
      // Załóżmy rozszerzenia obrazów: jpg, jpeg, png, gif, webp
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const imageFiles = files.filter(f => {
        const ext = path.extname(f).toLowerCase();
        return imageExtensions.includes(ext);
      });

      let thumbnailPath = null;
      if (imageFiles.length > 0) {
        // Jeśli w metadanych jest image, to szukamy go na liście, jeśli nie, bierzemy pierwszy obrazek
        if (data.image && imageFiles.includes(data.image)) {
          thumbnailPath = path.posix.join('/posts', folderName, data.image);
        } else {
          thumbnailPath = path.posix.join('/posts', folderName, imageFiles[0]);
        }
      }

      return {
        slug: folderName,
        ...data,
        thumbnail: thumbnailPath,
        url: `/${folderName}`,
      };
    })
    .filter(Boolean);

  // Sortowanie po dacie malejąco
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB - dateA;
  });

  return posts;
}

function savePostsJson(posts) {
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf8');
  console.log(
    `Wygenerowano plik JSON z ${posts.length} artykułami: ${outputFile}`
  );
}

const posts = getAllPostsMetadata();
savePostsJson(posts);
