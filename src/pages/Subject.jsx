import { useParams, useSearchParams, Link } from "react-router-dom";

export default function Subject() {
  const { id, subject } = useParams();
  const [query] = useSearchParams();
  const skill = query.get("skill"); // e.g., ?skill=addition

  return (
    <div className="space-y-3">
      <h1 className="font-display text-2xl font-bold">
        {subject?.toUpperCase()} — {id} Grade
      </h1>
      {skill && (
        <p className="text-sm text-ink-700">Filtering for skill: {skill}</p>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Later: map real games from data */}
        <Link
          to={`/grade/${encodeURIComponent(id)}/${subject}/find-animal`}
          className="k-card h-28 text-left bg-sun-400 text-white hover:brightness-95"
        >
          <div className="text-lg font-semibold drop-shadow">
            Find the Animal
          </div>
          <p className="text-sm opacity-90">Listen & choose the right animal</p>
        </Link>
        <div className="k-card">Game card placeholder</div>
        <div className="k-card">Game card placeholder</div>
      </div>
    </div>
  );
}
