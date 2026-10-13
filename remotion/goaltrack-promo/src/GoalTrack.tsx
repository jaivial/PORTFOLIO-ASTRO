import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BG = "#0a0a0a";
const TEXT = "#f4f4f5";
const MUTED = "#a1a1aa";
const EMERALD = "#34d399";

type Goal = {
  name: string;
  color: string;
  streak: number | null;
  meta: string;
};

const GOALS: Goal[] = [
  { name: "Meditar 10 minutos", color: "#60a5fa", streak: 41, meta: "Every day" },
  { name: "Beber 2L de agua", color: "#38bdf8", streak: 16, meta: "Every day" },
  { name: "Escribir en el diario", color: "#fbbf24", streak: 5, meta: "5× per week" },
  { name: "Dormir antes de las 23h", color: "#f472b6", streak: 4, meta: "Every day" },
  { name: "Entrenar 30 minutos", color: "#f87171", streak: null, meta: "3× per week" },
  { name: "Estudiar inglés 15 min", color: "#a78bfa", streak: null, meta: "Every day" },
];

const CheckIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ display: "block" }}
  >
    <path
      d="M5 13 L10 18 L19 7"
      stroke={BG}
      strokeWidth={3.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badge = spring({ frame, fps, config: { damping: 200 } });
  const title = spring({ frame: frame - 5, fps, config: { damping: 200 } });
  const tagline = spring({ frame: frame - 14, fps, config: { damping: 200 } });
  const exit = interpolate(frame, [85, 105], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(title, [0, 1], [60, 0]);
  const tagY = interpolate(tagline, [0, 1], [30, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, opacity: exit, justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          transform: `translateY(${exit * -30}px)`,
        }}
      >
        <div
          style={{
            opacity: badge,
            transform: `scale(${0.8 + badge * 0.2})`,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: EMERALD,
            border: `2px solid rgba(52, 211, 153, 0.45)`,
            borderRadius: 999,
            padding: "12px 30px",
          }}
        >
          New project
        </div>
        <h1
          style={{
            opacity: title,
            transform: `translateY(${titleY}px)`,
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: TEXT,
            margin: 0,
          }}
        >
          GoalTrack
        </h1>
        <p
          style={{
            opacity: tagline,
            transform: `translateY(${tagY}px)`,
            fontSize: 44,
            fontWeight: 500,
            color: MUTED,
            margin: 0,
          }}
        >
          Every day, one square.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const MosaicScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const exit = interpolate(frame, [100, 118], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: "center", alignItems: "center", opacity: exit }}>
      <div style={{ width: 880, display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#71717a" }}>
            Today
          </span>
          <span style={{ fontSize: 28, fontWeight: 600, color: MUTED }}>4 of 6 done</span>
        </div>
        {GOALS.map((g, i) => {
          const enter = spring({ frame: frame - 8 - i * 7, fps, config: { damping: 200 } });
          const fill = spring({ frame: frame - 50 - i * 7, fps, config: { damping: 12, stiffness: 160 } });
          const checked = g.streak !== null;
          const boxBackground = checked
            ? interpolate(fill, [0, 1], [0, 1]) > 0
              ? g.color
              : "rgba(0,0,0,0)"
            : "rgba(0,0,0,0)";
          const opacity = checked ? fill : 0;
          const borderColor = checked && fill > 0 ? g.color : "#3f3f46";
          const streak = g.streak ?? 0;
          const shownStreak = Math.round(interpolate(fill, [0, 1], [0, streak]));
          return (
            <div
              key={g.name}
              style={{
                opacity: enter,
                transform: `translateY(${(1 - enter) * 46}px) scale(${0.96 + enter * 0.04})`,
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "#17171a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 24,
                padding: "20px 28px",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 17,
                  border: `3px solid ${borderColor}`,
                  background: boxBackground,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {checked ? (
                  <div style={{ opacity }}>
                    <CheckIcon size={34} />
                  </div>
                ) : null}
              </div>
              <span style={{ fontSize: 32, fontWeight: 600, color: TEXT, letterSpacing: "-0.01em" }}>{g.name}</span>
              <span style={{ marginLeft: "auto", fontSize: 24, fontWeight: 600, color: MUTED, whiteSpace: "nowrap" }}>
                {checked ? `🔥 ${shownStreak} days` : g.meta}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // frame is already sequence-local here (Sequence from={150}); the scene lasts 90 frames
  const local = frame;

  const flame = spring({ frame: local, fps, config: { damping: 10, stiffness: 120 } });
  const countSpring = spring({ frame: local - 6, fps, config: { damping: 200 } });
  const num = Math.round(interpolate(countSpring, [0, 1], [0, 41]));
  const pill = spring({ frame: local - 24, fps, config: { damping: 200 } });
  const sub = interpolate(local - 34, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [76, 89], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, justifyContent: "center", alignItems: "center", opacity: fadeOut }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <div style={{ fontSize: 120, lineHeight: 1, opacity: flame, transform: `scale(${0.3 + flame * 0.7})` }}>🔥</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span style={{ fontSize: 200, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: EMERALD, fontVariantNumeric: "tabular-nums" }}>
            {num}
          </span>
          <span style={{ fontSize: 52, fontWeight: 600, color: TEXT }}>day streak</span>
        </div>
        <div
          style={{
            opacity: pill,
            transform: `translateY(${(1 - pill) * 34}px)`,
            fontSize: 40,
            fontWeight: 700,
            color: BG,
            background: EMERALD,
            borderRadius: 999,
            padding: "20px 48px",
            letterSpacing: "-0.01em",
          }}
        >
          goaltrack.menustudioai.com
        </div>
        <p style={{ opacity: sub, fontSize: 32, color: MUTED, margin: 0 }}>Start today. One square at a time.</p>
      </div>
    </AbsoluteFill>
  );
};

export const GoalTrackPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG, fontFamily: "system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={100}>
        <TitleScene />
      </Sequence>
      <Sequence from={85} durationInFrames={125}>
        <MosaicScene />
      </Sequence>
      <Sequence from={200}>
        <CtaScene />
      </Sequence>
    </AbsoluteFill>
  );
};
