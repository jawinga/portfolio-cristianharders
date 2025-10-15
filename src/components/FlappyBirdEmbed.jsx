"use client"

export default function FlappyBirdEmbed() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* 4:3 box that scales responsively */}
      <div className="w-full max-w-[960px] rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4 / 3" }}>
        <iframe
          src="/flappybird.html"
          title="Flappy Bird (Java)"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  )
}