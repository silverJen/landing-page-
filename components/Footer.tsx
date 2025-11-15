export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">바이브라이팅</h3>
              <p className="text-gray-400">
                말한 내용을 바로 써먹을 수 있는 문서로 바꾸는 AI 코파일럿
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">링크</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/silverJen/landing-page-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    기능
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="hover:text-white transition-colors"
                  >
                    로드맵
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">문의</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/silverJen/landing-page-/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/silverJen/landing-page-/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Discussions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 바이브라이팅. MIT License.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

