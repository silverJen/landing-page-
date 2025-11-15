export default function UseCases() {
  const useCases = [
    {
      persona: "전략기획자 박지훈",
      scenario: "주간 보고 초안을 위해 노트북을 열기 싫어서, 퇴근길 지하철에서 10분 정도 이번 주 이슈와 인사이트를 말로 쏟아냅니다.",
      result: "집에 도착했을 때 이미 '문제/현황/원인/시사점/다음 액션'으로 구조화된 글 초안이 준비되어 있습니다. 숫자와 표현만 조금 다듬고 곧바로 상사에게 공유합니다.",
      icon: "👔",
      color: "blue",
    },
    {
      persona: "크리에이터 김나래",
      scenario: "산책하며 오늘 클라이언트 세션에서 나온 인사이트, 내 생각, 이후 글감 아이디어를 15분 정도 떠듭니다.",
      result: "'콘텐츠 아이디어 → 포스트/뉴스레터 카드' 템플릿을 선택하면, 말이 끝난 후 '훅/스토리/인사이트/CTA' 섹션으로 나뉜 여러 카드 초안이 생성됩니다. 그중 2~3개를 골라 바로 인스타/블로그 초안으로 붙여넣습니다.",
      icon: "🎨",
      color: "purple",
    },
    {
      persona: "글로벌 직장인 린",
      scenario: "중요한 클라이언트에게 보낼 이메일이 부담스러워, 출근길 택시에서 중국어와 영어를 섞어가며 상황과 요구사항을 말로 정리합니다.",
      result: "'비즈니스 이메일' 템플릿과 '정중하지만 단호한 톤'을 선택하면, 앱은 이를 자연스러운 비즈니스 영어 이메일 초안으로 만들어줍니다. 몇 개 표현만 수정하고 바로 Outlook에 붙여 넣습니다.",
      icon: "🌍",
      color: "green",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            사용 사례
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            실제 사용자들이 바이브라이팅을 어떻게 활용하는지
          </p>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{
                  borderLeftColor:
                    useCase.color === "blue"
                      ? "#3b82f6"
                      : useCase.color === "purple"
                      ? "#9333ea"
                      : "#10b981",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {useCase.persona}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                          상황
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {useCase.scenario}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                          결과
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {useCase.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

