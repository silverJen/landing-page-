export default function Solution() {
  const solutions = [
    {
      title: "도메인별 구조화된 초안",
      description: "전략 메모, 콘텐츠 아이디어, 이메일 등 도메인에 맞는 템플릿으로 자동 구조화합니다.",
      icon: "📋",
    },
    {
      title: "70-80% 완성도",
      description: "말이 끝났을 때 이미 '쓸 만한 초안'이 준비되어 있습니다. 다 갈아엎는 것이 아니라, 20~30%만 다듬으면 됩니다.",
      icon: "✨",
    },
    {
      title: "두 번 일하지 않게",
      description: "한 번 말하면, 한 번의 클릭/짧은 편집으로 실사용 가능합니다. 전사 후 다시 구조 잡는 작업이 필요 없습니다.",
      icon: "🚀",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            바이브라이팅의 해결 방식
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            "전사/요약 툴"이 아니라, "말하는 순간부터 구조화된 초안을 함께 만드는 코파일럿"
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              워크플로우
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎤</span>
                </div>
                <p className="font-semibold text-gray-900">말하기</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="font-semibold text-gray-900">구조화</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">📝</span>
                </div>
                <p className="font-semibold text-gray-900">초안 완성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

