import { Link, useParams } from "react-router-dom";

const subjects = [
  { name: "Math", slug: "math", color: "bg-sun-400" },
  { name: "ELA", slug: "ela", color: "bg-berry-400" },
  { name: "Science", slug: "science", color: "bg-leaf-400" },
];

export default function Grade() {
  const { id } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-bold">{id} Grade</h1>
      <p className="text-ink-700">Choose a subject to start practicing:</p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {subjects.map((s) => (
          <Link
            key={s.slug}
            to={`/grade/${encodeURIComponent(id)}/${s.slug}`}
            className={`k-card h-28 text-left text-white ${s.color} hover:brightness-95`}
          >
            <div className="text-lg font-semibold drop-shadow">{s.name}</div>
            <p className="text-sm opacity-90">Aligned mini-games</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
