import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">내 이름은 박성우야</h1>
      <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 First Deploy - v0.2 Update</h1>
      <p>안녕하세요! Sammual의 Next.js 첫 배포 실습입니다.</p>
      <p>이 내용은 feature/0.2-update 브랜치에서 수정되었습니다 🎉</p>
    </main>
    </div>
  );
}

