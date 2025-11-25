import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const oldPath = path.join(distDir, 'sitemap-index.xml');
const newPath = path.join(distDir, 'sitemap.xml');

// Check if sitemap-index.xml exists and rename it
if (fs.existsSync(oldPath)) {
  // Remove existing sitemap.xml if it exists
  if (fs.existsSync(newPath)) {
    fs.unlinkSync(newPath);
  }

  // Rename sitemap-index.xml to sitemap.xml
  fs.renameSync(oldPath, newPath);
  console.log('✓ Renamed sitemap-index.xml to sitemap.xml');
} else {
  console.log('⚠ sitemap-index.xml not found, skipping rename');
}