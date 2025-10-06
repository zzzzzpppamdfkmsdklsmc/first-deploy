import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 font-sans text-center">
      <h1 className="text-4xl font-bold mb-2">박성우 / PARK SEONG WOO</h1>
      <p className="text-lg text-gray-600 mb-6">좌우명 넣자~</p>

      <main className="mb-10">
        <h2 className="text-2xl font-semibold">🚀 First Deploy - v0.2 Update</h2>
        <p>안녕하세요! Sammual의 Next.js 첫 배포 실습입니다.</p>
        <p>이 내용은 feature/0.2-update 브랜치에서 수정되었습니다 🎉</p>
      </main>

      <div className="max-w-2xl text-left space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">👥 프로젝트 경험</h2>
          <ul className="list-disc list-inside">
            <li>
              <b>멀티 기능성 옷걸이 설계 (2022)</b> – 팀 리더, 시장조사·경제성 분석, 손익분기점 계산
            </li>
            <li>
              <b>기업가정신과 행동 (2023)</b> – 아이들 식습관 개선 게임형 솔루션, 팀장, 시장조사·BM 수립
            </li>
            <li>
              <b>데이터베이스 설계 (2023)</b> – 카카오톡 선물하기 DB 설계 및 구현, 팀장
            </li>
            <li>
              <b>인간공학 프로젝트 (2023)</b> – 트리플 앱 UX 문제 분석 및 개선안 제시, 팀장
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🏆 공모전</h2>
          <p>LH, 아이디어 유니버시아드, 제조 데이터 해커톤, 숭실 데이터톤 등 다수</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">💼 아르바이트 경험</h2>
          <p>투썸플레이스 (2022~2025) – 카운터·조리·발주 관리</p>
        </section>

        <section className="text-center">
          <p>📩 frank8817@naver.com</p>
          <p>🎓 (4학년, 졸업 예정)</p>
          <p>📜 SAP Certified Associate - ABAP Cloud</p>
        </section>
      </div>
    </div>
  );
}
