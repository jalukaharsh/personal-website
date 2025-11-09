#!/usr/bin/env node

/**
 * Link Validation Script
 * Checks for broken internal links in the built site
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = resolve(__dirname, '../dist');
const errors = [];
const warnings = [];

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Extract all internal links from HTML content
 */
function extractInternalLinks(html, filePath) {
  const links = [];
  
  // Match href attributes in anchor tags
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  
  while ((match = hrefRegex.exec(html)) !== null) {
    const href = match[1];
    
    // Skip external links, anchors, and special protocols
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href.startsWith('javascript:')
    ) {
      continue;
    }
    
    links.push({
      href,
      sourceFile: relative(DIST_DIR, filePath)
    });
  }
  
  return links;
}

/**
 * Resolve a link relative to the source file
 */
function resolveLinkPath(link, sourceFilePath) {
  // Remove hash/query from link
  const cleanLink = link.split('#')[0].split('?')[0];
  
  if (!cleanLink) {
    return null; // Just a hash or query, no path to validate
  }
  
  let targetPath;
  
  // Handle absolute paths (starting with /)
  if (cleanLink.startsWith('/')) {
    // Absolute path from site root
    targetPath = join(DIST_DIR, cleanLink);
  } else {
    // Relative path from source file
    const sourceDir = dirname(sourceFilePath);
    targetPath = resolve(sourceDir, cleanLink);
  }
  
  // Skip non-HTML resources (CSS, JS, images, etc.)
  const ext = targetPath.split('.').pop().toLowerCase();
  if (['css', 'js', 'svg', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'ico', 'woff', 'woff2', 'ttf', 'eot'].includes(ext)) {
    return null;
  }
  
  // If it's a directory path, look for index.html
  if (!targetPath.endsWith('.html')) {
    if (targetPath.endsWith('/')) {
      targetPath = join(targetPath, 'index.html');
    } else {
      // Try both with and without index.html
      const withIndex = join(targetPath, 'index.html');
      const withHtml = targetPath + '.html';
      
      // Check which one exists
      try {
        statSync(withIndex);
        targetPath = withIndex;
      } catch {
        try {
          statSync(withHtml);
          targetPath = withHtml;
        } catch {
          targetPath = withIndex; // Default to index.html for error reporting
        }
      }
    }
  }
  
  return targetPath;
}

/**
 * Check if a file exists
 */
function fileExists(filePath) {
  try {
    statSync(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate all links in the built site
 */
function validateLinks() {
  console.log('🔍 Validating internal links...\n');
  
  const htmlFiles = findHtmlFiles(DIST_DIR);
  console.log(`Found ${htmlFiles.length} HTML files to check\n`);
  
  const allLinks = [];
  
  // Extract all links from all files
  htmlFiles.forEach(filePath => {
    const html = readFileSync(filePath, 'utf-8');
    const links = extractInternalLinks(html, filePath);
    allLinks.push(...links);
  });
  
  console.log(`Found ${allLinks.length} internal links to validate\n`);
  
  // Validate each link
  allLinks.forEach(({ href, sourceFile }) => {
    const sourceFilePath = join(DIST_DIR, sourceFile);
    const targetPath = resolveLinkPath(href, sourceFilePath);
    
    if (!targetPath) {
      return; // Skip hash-only or query-only links
    }
    
    if (!fileExists(targetPath)) {
      errors.push({
        sourceFile,
        link: href,
        resolvedPath: relative(DIST_DIR, targetPath),
        message: `Broken link: "${href}" in ${sourceFile} -> ${relative(DIST_DIR, targetPath)} not found`
      });
    }
  });
  
  return { errors, warnings };
}

/**
 * Main execution
 */
function main() {
  try {
    // Check if dist directory exists
    if (!fileExists(DIST_DIR)) {
      console.error('❌ Error: dist/ directory not found. Run "npm run build" first.');
      process.exit(1);
    }
    
    const { errors, warnings } = validateLinks();
    
    // Report results
    if (errors.length > 0) {
      console.error('❌ Link validation failed!\n');
      console.error(`Found ${errors.length} broken link(s):\n`);
      
      errors.forEach(error => {
        console.error(`  • ${error.message}`);
      });
      
      console.error('\n');
      process.exit(1);
    }
    
    if (warnings.length > 0) {
      console.warn('⚠️  Warnings:\n');
      warnings.forEach(warning => {
        console.warn(`  • ${warning}`);
      });
      console.warn('\n');
    }
    
    console.log('✅ All internal links are valid!\n');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error during link validation:', error.message);
    process.exit(1);
  }
}

main();
