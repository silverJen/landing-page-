export default function UseCases() {
  const useCases = [
    {
      persona: "전략기획자 박지훈",
      scenario: "주간 보고 초안을 위해 노트북을 열기 싫어서, 퇴근길 지하철에서 10분 정도 이번 주 이슈와 인사이트를 말로 쏟아냅니다.",
      result: "집에 도착했을 때 이미 '문제/현황/원인/시사점/다음 액션'으로 구조화된 글 초안이 준비되어 있습니다. 숫자와 표현만 조금 다듬고 곧바로 상사에게 공유합니다.",
      icon: "👔",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      persona: "크리에이터 김나래",
      scenario: "산책하며 오늘 클라이언트 세션에서 나온 인사이트, 내 생각, 이후 글감 아이디어를 15분 정도 떠듭니다.",
      result: "'콘텐츠 아이디어 → 포스트/뉴스레터 카드' 템플릿을 선택하면, 말이 끝난 후 '훅/스토리/인사이트/CTA' 섹션으로 나뉜 여러 카드 초안이 생성됩니다. 그중 2~3개를 골라 바로 인스타/블로그 초안으로 붙여넣습니다.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      persona: "글로벌 직장인 린",
      scenario: "중요한 클라이언트에게 보낼 이메일이 부담스러워, 출근길 택시에서 중국어와 영어를 섞어가며 상황과 요구사항을 말로 정리합니다.",
      result: "'비즈니스 이메일' 템플릿과 '정중하지만 단호한 톤'을 선택하면, 앱은 이를 자연스러운 비즈니스 영어 이메일 초안으로 만들어줍니다. 몇 개 표현만 수정하고 바로 Outlook에 붙여 넣습니다.",
      icon: "🌍",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              사용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              실제 사용자들이 바이브라이팅을 어떻게 활용하는지
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent hover:-translate-y-1 overflow-hidden"
              >
                {/* 그라데이션 배경 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* 아이콘 */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-4xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {useCase.icon}
                    </div>
                    
                    {/* 내용 */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {useCase.persona}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                              상황
                            </p>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {useCase.scenario}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                              결과
                            </p>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {useCase.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 호버 시 장식선 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
