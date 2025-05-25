// Cloudflare R2 CDN Configuration
const CDN_BASE_URL = 'https://pub-94661d4712414aee81691cb54aea8b41.r2.dev';

export function cdn(path: string): string {
  // Remove leading slash and /assets/ prefix if present
  const cleanPath = path.replace(/^\/?(assets\/)?/, '');
  return `${CDN_BASE_URL}/${cleanPath}`;
}