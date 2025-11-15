export default function TechStack() {
  const techStack = [
    { name: "Next.js", description: "Frontend Framework", icon: "⚛️" },
    { name: "Supabase", description: "Database & Auth", icon: "🗄️" },
    { name: "OpenAI", description: "AI Processing", icon: "🤖" },
    { name: "TypeScript", description: "Type Safety", icon: "📘" },
    { name: "Tailwind CSS", description: "Styling", icon: "🎨" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            현대적이고 신뢰할 수 있는 기술로 구축되었습니다
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              아키텍처 개요
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-gray-900">Frontend</p>
                <p className="text-gray-600">Next.js + TypeScript</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-gray-900">Backend</p>
                <p className="text-gray-600">Next.js API Routes</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-gray-900">Database</p>
                <p className="text-gray-600">Supabase</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-gray-900">AI</p>
                <p className="text-gray-600">OpenAI API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

