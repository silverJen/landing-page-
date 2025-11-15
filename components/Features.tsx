export default function Features() {
  const features = [
    {
      title: "도메인별 템플릿",
      description: "전략 메모, 콘텐츠 아이디어, 일반 메모, 비즈니스 이메일 등 다양한 도메인에 맞는 템플릿을 제공합니다.",
      icon: "📚",
    },
    {
      title: "실시간 구조화",
      description: "말하는 순간부터 도메인에 맞는 구조를 잡아, 말이 끝났을 때 이미 구조화된 초안이 준비되어 있습니다.",
      icon: "⚡",
    },
    {
      title: "개인화된 톤 반영",
      description: "사용자의 예시 문서를 학습하여 개인/조직의 톤과 문체를 반영한 초안을 생성합니다.",
      icon: "🎨",
    },
    {
      title: "섹션별 편집 및 재생성",
      description: "각 섹션을 개별적으로 편집하거나 AI로 재작성할 수 있습니다. 톤 변경, 요약, 확장 등 다양한 옵션을 제공합니다.",
      icon: "✏️",
    },
    {
      title: "핵심 메시지 보존",
      description: "말할 때 강조했던 핵심 주장, SO WHAT, 숫자/데이터 포인트를 초안에서도 명확히 유지합니다.",
      icon: "💎",
    },
    {
      title: "Markdown 지원",
      description: "결과물을 Markdown 형태로 복사/다운로드하여 바로 사용할 수 있습니다.",
      icon: "📄",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            바이브라이팅이 제공하는 핵심 기능들
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

