export default function Features() {
  const features = [
    {
      title: "도메인별 템플릿",
      description: "전략 메모, 콘텐츠 아이디어, 일반 메모, 비즈니스 이메일 등 다양한 도메인에 맞는 템플릿을 제공합니다.",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "실시간 구조화",
      description: "말하는 순간부터 도메인에 맞는 구조를 잡아, 말이 끝났을 때 이미 구조화된 초안이 준비되어 있습니다.",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "개인화된 톤 반영",
      description: "사용자의 예시 문서를 학습하여 개인/조직의 톤과 문체를 반영한 초안을 생성합니다.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "섹션별 편집 및 재생성",
      description: "각 섹션을 개별적으로 편집하거나 AI로 재작성할 수 있습니다. 톤 변경, 요약, 확장 등 다양한 옵션을 제공합니다.",
      icon: "✏️",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "핵심 메시지 보존",
      description: "말할 때 강조했던 핵심 주장, SO WHAT, 숫자/데이터 포인트를 초안에서도 명확히 유지합니다.",
      icon: "💎",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Markdown 지원",
      description: "결과물을 Markdown 형태로 복사/다운로드하여 바로 사용할 수 있습니다.",
      icon: "📄",
      gradient: "from-slate-500 to-gray-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              바이브라이팅이 제공하는 핵심 기능들
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* 그라데이션 배경 (호버 시) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* 아이콘 컨테이너 */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* 호버 시 나타나는 장식선 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
