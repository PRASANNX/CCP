import fs from 'fs';
import path from 'path';

const brandsDir = path.join(process.cwd(), 'public', 'images', 'brands');
const brandsFile = path.join(process.cwd(), 'src', 'data', 'brands.ts');

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp']);

function generateBrandsTs() {
  const files = fs.readdirSync(brandsDir);
  const brandLogos = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.has(ext);
  });

  const brands = brandLogos.map((file, index) => {
    // Generate a readable name from the filename
    // 1. Remove extension
    // 2. Remove "logo" or "Logo"
    // 3. Replace dashes and underscores with spaces
    // 4. Trim spaces
    let name = path.parse(file).name;
    name = name.replace(/logo/ig, '').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!name) name = `Brand ${index + 1}`; // fallback

    return {
      id: `brand-${index + 1}`,
      name: name,
      logoSrc: `/images/brands/${file}`
    };
  });

  let tsContent = `export type Brand = {
  id: string;
  name: string;
  logoSrc?: string;
  website?: string;
  category?: string;
};

export const brands: Brand[] = [\n`;

  brands.forEach(brand => {
    tsContent += `  { id: "${brand.id}", name: "${brand.name}", logoSrc: "${brand.logoSrc}" },\n`;
  });

  tsContent += `];\n`;

  fs.writeFileSync(brandsFile, tsContent);
  console.log(`Generated brands.ts with ${brands.length} logos.`);
}

generateBrandsTs();
