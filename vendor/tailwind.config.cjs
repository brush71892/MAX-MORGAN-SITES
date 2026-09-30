// Rebuild vendor/tailwind.css (run from the repo root) after adding new Tailwind classes to StealAMorgan.html:
//   npx tailwindcss@3.4.17 -c vendor/tailwind.config.cjs -i vendor/tailwind-input.css -o vendor/tailwind.css --minify
module.exports={content:['./StealAMorgan.html'],theme:{extend:{}},plugins:[]};
