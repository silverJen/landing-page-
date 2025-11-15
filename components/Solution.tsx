export default function Solution() {
  const solutions = [
    {
      title: "도메인별 구조화된 초안",
      description: "전략 메모, 콘텐츠 아이디어, 이메일 등 도메인에 맞는 템플릿으로 자동 구조화합니다.",
      icon: "📋",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "70-80% 완성도",
      description: "말이 끝났을 때 이미 '쓸 만한 초안'이 준비되어 있습니다. 다 갈아엎는 것이 아니라, 20~30%만 다듬으면 됩니다.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "두 번 일하지 않게",
      description: "한 번 말하면, 한 번의 클릭/짧은 편집으로 실사용 가능합니다. 전사 후 다시 구조 잡는 작업이 필요 없습니다.",
      icon: "🚀",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-700">해결책</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              바이브라이팅의 해결 방식
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "전사/요약 툴"이 아니라, "말하는 순간부터 구조화된 초안을 함께 만드는 코파일럿"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* 그라데이션 배경 (호버 시) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* 아이콘 */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <span className="text-4xl">{solution.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* 호버 시 장식선 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
          
          {/* 워크플로우 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              간단한 워크플로우
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <span className="text-4xl">🎤</span>
                </div>
                <p className="font-bold text-lg text-gray-900">말하기</p>
                <p className="text-sm text-gray-600 mt-1">음성 입력</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <span className="text-4xl">🤖</span>
                </div>
                <p className="font-bold text-lg text-gray-900">구조화</p>
                <p className="text-sm text-gray-600 mt-1">AI 처리</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <span className="text-4xl">📝</span>
                </div>
                <p className="font-bold text-lg text-gray-900">초안 완성</p>
                <p className="text-sm text-gray-600 mt-1">바로 사용</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
