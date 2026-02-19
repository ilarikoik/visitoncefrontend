import { useNavigate, Navigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex items-center justify-center p-10">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            You found it
          </p>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            The One-Time Vault
          </h1>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed">
          This page exists for a single visit. Once you leave, the door closes —
          unless you prove you're worthy. Answer{" "}
          <span className="text-white font-semibold">3 trivia questions</span>{" "}
          correctly to earn one final return. After that, it's gone forever.
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-3xl font-bold">1</p>
            <p className="text-slate-400 text-sm mt-1">Visit allowed</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-3xl font-bold">3</p>
            <p className="text-slate-400 text-sm mt-1">Questions to answer</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-3xl font-bold">∞</p>
            <p className="text-slate-400 text-sm mt-1">Regret if you fail</p>
          </div>
        </div>

        <p className="text-slate-500 text-sm">
          Your IP has been logged. The clock is ticking.
        </p>
        <button
          // onClick={() => navigate("/youalreadyvisitedthiswebsite")}
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-slate-200 text-gray-900 font-semibold rounded-lg hover:bg-slate-400 transition-colors duration-200"
        >
          Refresh
        </button>
      </div>
    </main>
  );
}

export default Content;
