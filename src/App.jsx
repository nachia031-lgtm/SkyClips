export default function SkyClipsUI() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-6 border border-zinc-800">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">SkyClips ID</h1>
          <p className="text-zinc-400 mt-2 text-sm">
            TikTok Downloader & YouTube Splitter
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Paste TikTok or YouTube link"
            className="w-full bg-zinc-800 rounded-2xl px-4 py-3 outline-none border border-zinc-700"
          />

          <div className="grid grid-cols-2 gap-3">
            <button
              className="bg-cyan-500 hover:bg-cyan-400 transition-all rounded-2xl py-3 font-semibold"
              onClick={() => {
                alert("Menjalankan mesin pengambil video TikTok...");
              }}
            >
              Ambil Video TikTok
            </button>

            <button
              className="bg-purple-500 hover:bg-purple-400 transition-all rounded-2xl py-3 font-semibold"
              onClick={() => {
                alert("Menjalankan mesin pemotong video YouTube...");
              }}
            >
              Potong Video YouTube
            </button>
          </div>
        </div>

        <div className="mt-8 bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
          <h2 className="text-lg font-semibold mb-3">Status Proses</h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between bg-zinc-900 rounded-xl px-3 py-2">
              <span>Menunggu perintah...</span>
              <span className="text-yellow-400">Idle</span>
            </div>

            <div className="flex items-center justify-between bg-zinc-900 rounded-xl px-3 py-2">
              <span>Proses berjalan...</span>
              <span className="text-cyan-400 animate-pulse">Processing</span>
            </div>

            <div className="flex items-center justify-between bg-zinc-900 rounded-xl px-3 py-2">
              <span>Proses selesai</span>
              <span className="text-green-400">Success</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-zinc-500">
          Engine dijalankan menggunakan Termux Python Scripts
        </div>
      </div>
    </div>
  )
}
