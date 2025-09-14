export default function Home() {
  return (
    <div className="space-y-8">
      <section className="k-card bg-brand-50">
        <h1 className="font-display text-3xl font-bold">Learning that feels like play.</h1>
        <p className="mt-2 text-ink-700">
          Bite-sized games aligned to <strong>Common Core</strong> and <strong>NGSS</strong>,
          so kids grow skills—one joyful win at a time.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="k-chip">Math • ELA • Science</span>
          <span className="k-chip">Pre-K → 5th Grade</span>
          <span className="k-chip">5–10 minute sessions</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="k-card">
          <h3 className="font-semibold">Standards-aligned</h3>
          <p className="mt-1 text-sm text-ink-700">
            Each game targets specific <em>Common Core</em> or <em>NGSS</em> skills.
          </p>
        </div>
        <div className="k-card">
          <h3 className="font-semibold">Kid-safe by design</h3>
          <p className="mt-1 text-sm text-ink-700">No ads, no external links, privacy-first.</p>
        </div>
        <div className="k-card">
          <h3 className="font-semibold">Progress that motivates</h3>
          <p className="mt-1 text-sm text-ink-700">Badges, gentle streaks, printable progress.</p>
        </div>
      </section>
    </div>
  );
}
