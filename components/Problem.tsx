export default function Problem() {
  const problems = [
    {
      title: "두 번 일하게 됨",
      description: "Otter, AudioPen, Descript 등으로 전사/요약까지는 되지만, 실제 보고서/논문/이메일/스크립트로 쓰기 위해 구조/톤/포맷을 전부 다시 잡아야 합니다.",
      quote: "차라리 처음부터 내가 쓰는 게 낫다.",
    },
    {
      title: "도메인별 구조화 실패",
      description: "결과물은 대부분 '에세이형 문단 텍스트'입니다. 실제로 필요한 것은 전략 보고서(문제/원인/인사이트/제안), 논문(IMRaD 구조), 이메일(상황/요청/근거/톤) 등 도메인별 구조인데, 이를 사람이 다시 만들어야 합니다.",
    },
    {
      title: "개인/조직 톤 미반영",
      description: "결과물이 '툴의 톤'이지 '나/우리 팀의 톤'이 아닙니다. 퍼스널 브랜딩/채널/회사 문체와 어울리지 않아 결국 커스터마이징 작업이 필요합니다.",
    },
    {
      title: "핵심 메시지 손상",
      description: "말할 때 분명히 있었던 핵심 주장, SO WHAT, 숫자/데이터 포인트가 결과물에서 희석되거나 묻힙니다.",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            기존 방식의 문제점
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            전사/요약 툴을 사용해도 결국 다시 구조를 잡아야 하는 이유
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                {problem.quote && (
                  <blockquote className="border-l-4 border-red-400 pl-4 italic text-gray-600">
                    "{problem.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

