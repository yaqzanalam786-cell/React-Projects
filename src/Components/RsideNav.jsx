import React from 'react'

function RsideNav() {
  return (
    <div className="fixed top-0 right-0 h-screen w-110 bg-black border border-white/40 border-y-0 border-r-0 text-white px-8 pt-4 space-y-4">
     <div className="mb-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent text-white placeholder:text-white/40 
               border border-white/60 rounded-full px-4 py-2 mb-12
               outline-none"
       />
    </div>


      {/* Card 1 – Live / Trending */}
      <div className="rounded-2xl border border-white/40 p-4 ">
        <h2 className="text-lg font-bold mb-3">Live on Y</h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              🔴 <span className="font-semibold">Breaking:</span> Massive Rally in Lahore
            </p>
            <span className="text-xs border border-pink-500 text-pink-400 rounded-full px-2 py-0.5">
              +42K
            </span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm">
              🎮 NFTs & Crypto Talk Live
            </p>
            <span className="text-xs border border-purple-500 text-purple-400 rounded-full px-2 py-0.5">
              +278
            </span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm">
              🔥 PSL Discussions Going Crazy
            </p>
            <span className="text-xs border border-blue-500 text-blue-400 rounded-full px-2 py-0.5">
              +129
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 – Breaking News */}
      <div className="rounded-2xl border border-white/40 p-4">
        <h2 className="text-lg font-bold mb-3">Breaking News</h2>

        <div className="space-y-3 text-sm">
          <p className="hover:bg-white/5 p-2 rounded-lg cursor-pointer">
            🇵🇰 Government announces new economic package
          </p>

          <p className="hover:bg-white/5 p-2 rounded-lg cursor-pointer">
            ⚽ Pakistan qualifies for Asia Cup semi-finals
          </p>

          <p className="hover:bg-white/5 p-2 rounded-lg cursor-pointer">
            🚧 Karachi traffic plan updated for weekend
          </p>
        </div>
      </div>

    </div>
  )
}

export default RsideNav