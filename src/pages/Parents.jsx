export default function Parents() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">For Parents & Guardians</h1>
      <div className="k-card">
        <h2 className="font-semibold">Our Parent Pledge</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-ink-700 space-y-1">
          <li>No ads or external links.</li>
          <li>Clear alignment to Common Core & NGSS.</li>
          <li>Privacy-first (minimal data; you can request deletion).</li>
          <li>Age-appropriate visuals and language.</li>
        </ul>
      </div>
      <div className="k-card">
        <h2 className="font-semibold">How We Align</h2>
        <p className="mt-1 text-sm text-ink-700">
          Every game lists its learning goal with a standard code (e.g.,
          <code className="ml-1 rounded bg-paper-200 px-1">CCSS.MATH.CONTENT.2.NBT.A.2</code>).
        </p>
      </div>
    </div>
  );
}
