/**
 * @type {import('next').NextConfig}
 */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  output: 'export', // ou qualquer outra configuração de saída que você precise
  images: {
    unoptimized: true, // Garante que as imagens não otimizadas serão usadas como fallback
  },
};

module.exports = withOptimizedImages(nextConfig);
