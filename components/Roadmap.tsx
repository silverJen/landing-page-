export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Core MVP",
      status: "현재 진행 중",
      features: [
        "계정/세션/녹음/업로드",
        "전사 → 도메인별 구조화 초안 생성",
        "템플릿: 전략 메모, 콘텐츠 아이디어, 일반 메모",
        "초안 편집 UI + Markdown 복사",
        "기본 톤/언어 설정",
      ],
      color: "blue",
    },
    {
      phase: "Phase 2",
      title: "강화 MVP",
      status: "예정",
      features: [
        "사용자 스타일 프로필 (예시 텍스트 기반)",
        "아이디어 카드/섹션 분리/병합",
        "핵심 요약 블록",
        "추가 템플릿: 비즈니스 이메일, 스크립트, 논문 메모",
      ],
      color: "purple",
    },
    {
      phase: "Phase 3",
      title: "Differentiation",
      status: "예정",
      features: [
        "실시간 말하기 코파일럿",
        "장기 스타일 학습",
        "도메인별 고급 템플릿",
        "외부 툴 Export 템플릿",
      ],
      color: "green",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            로드맵
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            바이브라이팅의 개발 계획과 진행 상황
          </p>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase">
                      {phase.phase}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {phase.title}
                    </h3>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      phase.status === "현재 진행 중"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

