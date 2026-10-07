import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('.', import.meta.url)));
import { mkdir, copyFile, cp, readFile, writeFile, rm } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html','styles.css','menu.js','locales.js','motion.js','app.js']) await copyFile(file, `dist/${file}`);
// The digital menu works independently of the optional original PDF.
try {
 await copyFile('cardapio.pdf', 'dist/cardapio.pdf');
} catch (error) {
 if (error.code !== 'ENOENT') throw error;
 await rm('dist/cardapio.pdf', { force: true });
 const html = await readFile('dist/index.html', 'utf8');
 await writeFile('dist/index.html', html.replace(/<a\b[^>]*href="cardapio\.pdf"[^>]*>[\s\S]*?<\/a>/g, ''));
 console.log('Optional cardapio.pdf absent; PDF download links omitted.');
}
await cp('assets', 'dist/assets', { recursive: true });
console.log('Static site built in dist/');
