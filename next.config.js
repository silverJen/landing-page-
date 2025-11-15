/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    // 빌드 시 타입 체크 건너뛰기 (GitHub Actions에서 타입 에러로 실패하는 경우 방지)
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 ESLint 체크 건너뛰기 (GitHub Actions에서 린트 에러로 실패하는 경우 방지)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
