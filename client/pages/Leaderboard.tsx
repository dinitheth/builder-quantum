import { Link } from "react-router-dom";

export default function Leaderboard() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(ellipse at top, #335476 0%, #31506e 11.1%, #304b67 22.2%, #2f4760 33.3%, #2d4359 44.4%, #2c3f51 55.6%, #2a3a4a 66.7%, #293643 77.8%, #28323d 88.9%, #262e36 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <Link
            to="/"
            className="text-white/90 hover:text-white underline-offset-4 hover:underline"
          >
            Back
          </Link>
        </div>
        <div className="flex items-center justify-center h-64 border border-white/10 rounded-md bg-black/20 text-white/60 text-xl font-semibold">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
