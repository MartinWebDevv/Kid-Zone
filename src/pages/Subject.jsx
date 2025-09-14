import { useParams, useSearchParams } from "react-router-dom";

export default function Subject() {
  const { id, subject } = useParams();
  const [query] = useSearchParams();
  const skill = query.get("skill"); // e.g., ?skill=addition

  return (
    <div className="space-y-3">
      <h1 className="font-display text-2xl font-bold">
        {subject?.toUpperCase()} — {id} Grade
      </h1>
      {skill && <p className="text-sm text-ink-700">Filtering for skill: {skill}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Later: map real games from data */}
        <div className="k-card">Game card placeholder</div>
        <div className="k-card">Game card placeholder</div>
        <div className="k-card">Game card placeholder</div>
      </div>
    </div>
  );
}
