import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the quotes.md file
const quotesPath = path.join(__dirname, '../src/content/quotes/quotes.md');
const outputPath = path.join(__dirname, '../src/content/quotes/all-quotes.json');

const content = fs.readFileSync(quotesPath, 'utf-8');

const lines = content.split('\n');
const quotes = [];

let currentQuote = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Skip empty lines
  if (!line) {
    continue;
  }
  
  // If line starts with "-", it's an author line
  if (line.startsWith('-')) {
    if (currentQuote.length > 0) {
      // We have a complete quote
      const text = currentQuote.join(' ').trim();
      const authorLine = line.substring(1).trim();
      
      // Check if there's a comma separating author and source
      let author = '';
      let source = '';
      
      if (authorLine.includes(',')) {
        const parts = authorLine.split(',');
        author = parts[0].trim();
        source = parts.slice(1).join(',').trim();
      } else {
        author = authorLine;
      }
      
      const quoteObj = {
        text: text,
        author: author,
        source: source || ''
      };
      
      quotes.push(quoteObj);
      currentQuote = [];
    }
  } else {
    // It's part of the quote text
    currentQuote.push(line);
  }
}

// Handle last quote if file doesn't end with empty line
if (currentQuote.length > 0) {
  const text = currentQuote.join(' ').trim();
  quotes.push({
    text: text,
    author: '',
    source: ''
  });
}

// Create the output JSON
const output = {
  quotes: quotes
};

// Write to file with pretty formatting
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log(`✓ Converted ${quotes.length} quotes from quotes.md to all-quotes.json`);
