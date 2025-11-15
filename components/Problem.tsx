export default function Problem() {
  const problems = [
    {
      title: "두 번 일하게 됨",
      description: "Otter, AudioPen, Descript 등으로 전사/요약까지는 되지만, 실제 보고서/논문/이메일/스크립트로 쓰기 위해 구조/톤/포맷을 전부 다시 잡아야 합니다.",
      quote: "차라리 처음부터 내가 쓰는 게 낫다.",
      icon: "🔄",
      color: "red",
    },
    {
      title: "도메인별 구조화 실패",
      description: "결과물은 대부분 '에세이형 문단 텍스트'입니다. 실제로 필요한 것은 전략 보고서(문제/원인/인사이트/제안), 논문(IMRaD 구조), 이메일(상황/요청/근거/톤) 등 도메인별 구조인데, 이를 사람이 다시 만들어야 합니다.",
      icon: "📄",
      color: "orange",
    },
    {
      title: "개인/조직 톤 미반영",
      description: "결과물이 '툴의 톤'이지 '나/우리 팀의 톤'이 아닙니다. 퍼스널 브랜딩/채널/회사 문체와 어울리지 않아 결국 커스터마이징 작업이 필요합니다.",
      icon: "🎭",
      color: "yellow",
    },
    {
      title: "핵심 메시지 손상",
      description: "말할 때 분명히 있었던 핵심 주장, SO WHAT, 숫자/데이터 포인트가 결과물에서 희석되거나 묻힙니다.",
      icon: "💔",
      color: "pink",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-sm font-medium text-red-700">문제점</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              기존 방식의 문제점
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전사/요약 툴을 사용해도 결국 다시 구조를 잡아야 하는 이유
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* 번호 배지 */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* 아이콘 */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {problem.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed pl-18">
                  {problem.description}
                </p>
                
                {problem.quote && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-400">
                    <blockquote className="italic text-gray-700 font-medium">
                      "{problem.quote}"
                    </blockquote>
                  </div>
                )}
                
                {/* 호버 시 장식 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
