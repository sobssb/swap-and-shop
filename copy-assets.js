import fs from 'fs';
import path from 'path';

const srcDir = 'src/assets';
const destDir = 'public/assets';

// Read all files from src/assets
const files = fs.readdirSync(srcDir);

// Filter PNG files and copy them synchronously
files.forEach(file => {
  if (file.endsWith('.png')) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    
    try {
      fs.copyFileSync(srcFile, destFile);
      console.log(`✓ Copied ${file}`);
    } catch (err) {
      console.error(`✗ Error copying ${file}:`, err.message);
    }
  }
});

console.log('Done!');
