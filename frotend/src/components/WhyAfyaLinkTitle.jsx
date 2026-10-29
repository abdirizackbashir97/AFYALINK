import { useEffect, useMemo, useRef, useState } from "react";

const COLORS = ["#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
const TYPING_MS = 60;
const PAUSE_MS = 1600;
const DELETING_MS = 30;

export default function WhyAfyaLinkTitle({ t }) {
  // Stable array — only recomputes when `t` (language) changes
  const phrases = useMemo(() => {
    const variants = t?.about?.whyTitleVariants;
    if (Array.isArray(variants) && variants.length > 0) return variants;
    return [t?.about?.whyTitle ?? "Why AfyaLink Matters"];
  }, [t]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  const [colorIndex, setColorIndex] = useState(0);
  const reduced = useRef(false);

  // Detect reduced motion once
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    if (mq.matches) setText(phrases[0] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset animation whenever language (phrases) changes
  useEffect(() => {
    setIndex(0);
    setText("");
    setPhase("typing");
    setColorIndex(0);
  }, [phrases]);

  // Typing loop
  useEffect(() => {
    if (reduced.current) return;
    if (phrases.length === 0) return;

    const current = phrases[index % phrases.length] ?? "";
    let timer;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPING_MS
        );
      } else {
        timer = setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), PAUSE_MS);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), DELETING_MS);
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % phrases.length);
          setColorIndex((c) => (c + 1) % COLORS.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, phrases]);

  const color = COLORS[colorIndex % COLORS.length];

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight min-h-[2.5em]">
      <span className="sr-only">{t?.about?.whyTitle ?? "Why AfyaLink Matters"}</span>

      <span
        aria-hidden="true"
        style={{ color, transition: "color 600ms ease" }}
      >
        {text}
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1.1em] ml-1 align-middle animate-pulse"
          style={{ backgroundColor: color }}
        />
      </span>
    </h2>
  );
}