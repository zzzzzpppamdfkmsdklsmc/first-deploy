"use client";
import React, { useEffect, useState } from "react";

type General = {
  name: string;
  github: string;
  email?: string;
  intro: string;
  skills: string[];
  certificates: string[];
  career: string[];
};

type PortfolioItem = {
  title: string;
  intro: string;
  url: string;
  tech_stack: string[];
  status: string; // "🚀 진행" | "👍 완료" | "👀 도움 필요" 같은 이모지 상태
};

export default function Home() {
  const [general, setGeneral] = useState<General | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [resGeneral, resPortfolio] = await Promise.all([
          fetch(
            "https://raw.githubusercontent.com/zzzzzpppamdfkmsdklsmc/first-deploy/refs/heads/main/service/resume_general_info_service.json"
          ),
          fetch(
            "https://raw.githubusercontent.com/zzzzzpppamdfkmsdklsmc/first-deploy/refs/heads/main/service/resume_portfolio_service.json"
          ),
        ]);

        const generalData = (await resGeneral.json()) as General;
        const portfolioData = (await resPortfolio.json()) as PortfolioItem[];

        setGeneral(generalData);
        setPortfolio(portfolioData);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="p-10 text-center">⏳ 데이터 불러오는 중...</p>;
  if (!general) return <p className="p-10 text-center text-red-500">❌ 데이터 로드 실패</p>;

  return (
    <main className="p-10 font-sans">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold">{general.name}</h1>
        <p className="text-gray-600 mt-2">{general.intro}</p>
        <div className="mt-4">
          <a href={general.github} target="_blank" className="text-blue-600 underline">
            🔗 {general.github}
          </a>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">💡 Skills</h2>
          <p>{general.skills.join(", ")}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">🎓 Certificates</h2>
          <ul className="list-disc list-inside text-left inline-block">
            {general.certificates.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">📁 Portfolio</h2>
        <div className="space-y-6">
          {portfolio.map((p, i) => (
            <div key={i} className="border rounded-xl p-5 shadow-sm">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                {p.title} <span>{p.status}</span>
              </h3>
              <p className="text-gray-700 mt-2">{p.intro}</p>
              <a href={p.url} target="_blank" className="text-blue-600 underline">
                🔗 {p.url}
              </a>
              <div className="mt-3 text-sm text-gray-600">
                기술 스택: {p.tech_stack.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
