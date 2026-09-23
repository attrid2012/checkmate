'use client'

import { useState } from 'react'

const pieces = ['♜','♞','♝','♛','♚','♝','♞','♜','♟','♟','♟','♟','♟','♟','♟','♟','','','','','','','','','', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '','', '', '', '', '', '', '', '','', '', '', '', '', '', '', '','', '', '', '', '', '', '', '♙','♙','♙','♙','♙','♙','♙','♙','♖','♘','♗','♕','♔','♗','♘','♖']

export default function Page() {
  const [active, setActive] = useState('Learn')
  const [selected, setSelected] = useState<number | null>(null)
  const [completed, setCompleted] = useState(false)

  return (
    <main className="min-h-screen bg-[#fffdf7] text-[#263238]">
      <header className="border-b border-[#e8e5dc] bg-white/80 px-4 backdrop-blur md:px-8">
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between">
          <div className="flex items-center gap-2.5"><div className="brand-mark">♞</div><span className="text-xl font-extrabold tracking-tight text-[#303b40]">chesslingo</span></div>
          <nav className="hidden items-center gap-1 md:flex">{['Learn','Practice','Play'].map((item) => <button key={item} onClick={() => setActive(item)} className={`nav-item ${active === item ? 'active' : ''}`}>{item}</button>)}</nav>
          <div className="flex items-center gap-5"><div className="stat fire">♨ <b>7</b></div><div className="stat gem">◆ <b>320</b></div><button className="avatar">M</button></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-7 md:grid-cols-[1fr_300px] md:px-8">
        <section>
          <div className="mb-8 flex items-center justify-between"><div><p className="eyebrow">YOUR JOURNEY</p><h1 className="mt-1 text-3xl font-extrabold tracking-tight">Learn chess, one move at a time.</h1></div><div className="level-pill"><span>Level 3</span><div className="level-track"><i /></div><b>420 / 500 XP</b></div></div>
          <div className="lesson-card"><div className="flex items-center justify-between"><div className="lesson-icon">♟</div><span className="lesson-tag">IN PROGRESS</span></div><div className="mt-5 max-w-md"><h2 className="text-2xl font-extrabold">The knight&apos;s tour</h2><p className="mt-2 text-sm leading-6 text-[#617078]">Learn how the knight moves and master its sneaky L-shaped jumps.</p></div><div className="mt-6 flex items-center gap-4"><button className="primary-button" onClick={() => setCompleted(!completed)}>{completed ? 'Lesson complete' : 'Continue lesson'} <span>→</span></button><span className="text-xs font-bold text-[#879196]">+20 XP</span></div><div className="lesson-progress"><span style={{ width: completed ? '100%' : '65%' }} /></div><p className="mt-2 text-xs font-semibold text-[#839096]">{completed ? '100% complete' : '3 of 5 exercises complete'}</p></div>

          <div className="mt-9 mb-4 flex items-center justify-between"><h2 className="section-title">Your path</h2><button className="link-button">View all <span>→</span></button></div>
          <div className="path-grid"><div className="path-card done"><div className="path-symbol">✓</div><p>Chess basics</p><small>Completed</small></div><div className="path-card current"><div className="path-symbol">♞</div><p>Piece movement</p><small>In progress</small></div><div className="path-card locked"><div className="path-symbol">♜</div><p>Opening moves</p><small>Locked</small></div></div>
        </section>

        <aside className="space-y-5"><div className="side-card"><div className="flex items-center justify-between"><div><p className="eyebrow">WEEKLY GOAL</p><h3 className="mt-1 text-lg font-extrabold">Keep your streak alive</h3></div><div className="goal-ring">4<span>/7</span></div></div><div className="week-dots">{['M','T','W','T','F','S','S'].map((d, i) => <div key={`${d}-${i}`}><span className={i < 4 ? 'filled' : ''}>{i < 4 ? '✓' : ''}</span><small>{d}</small></div>)}</div><div className="goal-bar"><i /></div><p className="mt-2 text-xs font-semibold text-[#879196]">3 days to go</p></div><div className="side-card"><p className="eyebrow">QUICK PLAY</p><h3 className="mt-1 text-lg font-extrabold">Ready for a challenge?</h3><p className="mt-2 text-sm leading-5 text-[#708087]">Put your skills to the test against a friendly bot.</p><button className="outline-button mt-5" onClick={() => setActive('Play')}>Play a game <span>→</span></button></div><div className="side-card tip-card"><div className="tip-badge">TIP</div><p className="mt-3 text-sm font-bold leading-6">Knights are the only pieces that can jump over others.</p><button className="tip-link">Got it</button></div></aside>
      </div>

      <section className="game-section"><div className="mx-auto max-w-[1180px] px-4 md:px-8"><div className="mb-5 flex items-end justify-between"><div><p className="eyebrow">PRACTICE BOARD</p><h2 className="mt-1 text-2xl font-extrabold">Warm up your skills</h2></div><span className="text-sm font-bold text-[#7a8589]">White to move</span></div><div className="board-wrap"><div className="board">{pieces.map((piece, i) => <button key={i} onClick={() => setSelected(i)} className={`square ${(Math.floor(i/8)+i)%2 ? 'dark-square' : 'light-square'} ${selected === i ? 'selected-square' : ''}`} aria-label={`Square ${i + 1}`}>{piece && <span className={piece.charCodeAt(0) < 1000 ? 'black-piece' : 'white-piece'}>{piece}</span>}</button>)}</div><div className="board-info"><div className="board-avatar">♞</div><div><p className="text-sm font-extrabold">Milo&apos;s challenge</p><p className="text-xs text-[#78858a]">Find the best move for White</p></div><button className="primary-button ml-auto" onClick={() => setSelected(selected === null ? 52 : null)}>{selected !== null ? 'Move selected' : 'Show hint'} <span>→</span></button></div></div></div></section>
    </main>
  )
}

