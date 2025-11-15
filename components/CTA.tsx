export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            지금 시작해보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            바이브라이팅으로 두 번 일하지 않는 경험을 해보세요.
            <br />
            프로젝트에 기여하거나 피드백을 남겨주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/silverJen/landing-page-"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              GitHub에서 보기
            </a>
            <a
              href="https://github.com/silverJen/landing-page-/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              피드백 남기기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

