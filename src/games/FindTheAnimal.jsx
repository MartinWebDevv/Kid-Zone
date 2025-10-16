// src/games/FindTheAnimal.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ANIMALS = [
  { name: "cow", emoji: "🐮" },
  { name: "dog", emoji: "🐶" },
  { name: "cat", emoji: "🐱" },
  { name: "sheep", emoji: "🐑" },
  { name: "duck", emoji: "🦆" },
  { name: "pig", emoji: "🐷" },
];

const SOUND_MAP = {
  cow: "/sounds/animals/cow.mp3",
  dog: "/sounds/animals/dog.mp3",
  cat: "/sounds/animals/cat.mp3",
  sheep: "/sounds/animals/sheep.mp3",
  duck: "/sounds/animals/duck.mp3",
  pig: "/sounds/animals/pig.mp3",
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function speak(text, { rate = 0.9, pitch = 1.5 } = {}) {
  // Web Speech API (works best after a user gesture)
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = rate;
  utter.pitch = pitch;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function playSound(name) {
  const url = SOUND_MAP[name];
  if (!url) return;
  // simple: one-off playback (ensure Start was clicked first)
  const audio = new Audio(url);
  audio.play().catch(() => {});
}

export default function FindTheAnimal() {
  const { id, subject } = useParams();
  const [round, setRound] = useState(1);
  const [choices, setChoices] = useState([]);
  const [target, setTarget] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | asking | waiting | correct | wrong
  const [feedback, setFeedback] = useState("");
  const startedRef = useRef(false); // ensures audio is triggered after a click

  // Make a new round
  function newRound() {
    const three = shuffle(ANIMALS).slice(0, 3);
    const nextTarget = three[Math.floor(Math.random() * three.length)];
    setChoices(three);
    setTarget(nextTarget);
    setStatus("asking");
    setFeedback("");

    // ask after slight delay for smoother UX
    setTimeout(() => {
      if (startedRef.current) {
        speak(`What animal makes this sound?`);
        // wait 1.5 seconds before playing the sound
        setTimeout(() => playSound(nextTarget.name), 1500);
      }
      setStatus("waiting");
    }, 250);
  }

  // First mount: create initial choices (no speech until Start is clicked)
  useEffect(() => {
    newRound(); /* eslint-disable-next-line */
  }, []);

  function handleStart() {
    if (!startedRef.current) {
      startedRef.current = true;
    }

    speak(`Match the animal sound you hear to the correct animal`);
    // play sound after short delay (about 1.8s)
    setTimeout(() => playSound(target.name), 3000);

    setStatus("waiting");
  }

  function handlePick(animal) {
    if (status !== "waiting") return;

    if (animal.name === target.name) {
      setStatus("correct");
      setFeedback(`Yes! Correct!`);

      // Speak first
      speak(`Yes! ${animal.name}!`, { rate: 0.9, pitch: 1.5 });
      // Then play sound after a short delay
      // setTimeout(() => playSound(animal.name), 800);

      // Next round after short celebration
      setTimeout(() => {
        setRound((r) => r + 1);
        newRound();
      }, 1500);
    } else {
      setStatus("wrong");
      setFeedback(`That’s not the ${target.name}. Try again!`);

      // Voice first
      speak(`That's not the right animal. Try again.`, { rate: 0.9 });
      // Then replay the target sound after delay
      setTimeout(() => speak(`What animal makes this sound?`), 3000)
      setTimeout(() => playSound(target.name), 5000);

      // Allow retry
      setTimeout(() => setStatus("waiting"), 350);
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">
          Find the Animal — {subject?.toUpperCase()} — {id}
        </h1>
        <div className="text-sm text-ink-700">Round {round}</div>
      </header>

      {/* Instruction / Start */}
      <section className="k-card bg-paper-100">
        {status === "idle" || !startedRef.current ? (
          <div className="flex items-center justify-between gap-3">
            <p className="text-ink-700">
              Tap <strong>Start</strong> and listen carefully to the
              instructions.
            </p>
            <button onClick={handleStart} className="k-cta">
              Start
            </button>
          </div>
        ) : (
          <p className="text-ink-700">
            {target ? `Can you find the ${target.name}?` : "Listen…"}
          </p>
        )}
      </section>

      {/* Choices */}
      <section className="grid gap-4 sm:grid-cols-3">
        {choices.map((a) => (
          <button
            key={a.name}
            onClick={() => handlePick(a)}
            className={[
              "k-card h-32 flex flex-col items-center justify-center text-center select-none",
              status === "correct" && a.name === target?.name
                ? "animate-pop ring-2 ring-brand-500"
                : "",
              status === "wrong" && a.name !== target?.name ? "" : "",
              "hover:brightness-95",
            ].join(" ")}
            aria-label={`Choose ${a.name}`}
          >
            <span className="text-5xl">{a.emoji}</span>
            <span className="mt-2 font-semibold capitalize">{a.name}</span>
          </button>
        ))}
      </section>

      {/* Feedback */}
      <section aria-live="polite" className="min-h-[2rem]">
        {feedback && (
          <div
            className={`inline-block rounded-xl px-3 py-1 text-sm ${
              status === "correct"
                ? "bg-brand-500 text-white"
                : "bg-paper-200 text-ink-700"
            }`}
          >
            {feedback}
          </div>
        )}
      </section>

      {/* Replay instruction if needed */}
      {startedRef.current && (
        <button
          className="k-cta"
          onClick={() => target && speak(`Can you find the ${target.name}?`)
        
        }
        >
          Repeat the instruction
        </button>
      )}

      {/* Note to self: later we’ll replace spoken sounds with real MP3s */}
      <p className="text-xs text-ink-500">
        Tip: we’re using the browser’s voice for now. Later, drop real sounds in
        <code className="ml-1 rounded bg-paper-200 px-1">
          /public/sounds/animals/
        </code>
        and play them on correct answers.
      </p>
    </div>
  );
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
