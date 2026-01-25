## Troubleshooting

### Build Fails with Link Validation Errors

If you have broken internal links, the build will fail. To build without validation:

```sh
npm run build:skip-validation
```

Then fix the broken links and run the full build again.

### Development Server Not Updating

Clear the Astro cache and restart:

```sh
rm -rf .astro
npm run dev
```

### TypeScript Errors

Run the Astro type checker:

```sh
npm run astro check
```
