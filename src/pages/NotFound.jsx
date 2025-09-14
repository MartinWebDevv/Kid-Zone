import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="k-card text-center">
      <h1 className="font-display text-3xl font-bold">404</h1>
      <p className="mt-2 text-ink-700">We couldn’t find that page.</p>
      <Link to="/" className="k-cta mt-4 inline-block">Go Home</Link>
    </div>
  );
}
