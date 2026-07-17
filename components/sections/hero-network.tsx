/*
 * A deliberate node-and-line topology (sources -> platform -> decisions),
 * not random particles. Positions are fixed; lines pulse slowly via CSS.
 */
const nodes = [
  // Source tier (left)
  { x: 60, y: 140 },
  { x: 40, y: 320 },
  { x: 80, y: 480 },
  // Platform tier (middle)
  { x: 300, y: 100 },
  { x: 340, y: 300 },
  { x: 290, y: 500 },
  // Decision tier (right)
  { x: 580, y: 180 },
  { x: 620, y: 400 },
  // Outcome (far right)
  { x: 780, y: 290 },
];

const edges: [number, number][] = [
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
  [6, 8],
  [7, 8],
];

export function HeroNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 840 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-y-0 end-0 hidden h-full w-[55%] opacity-[0.13] md:block rtl:-scale-x-100"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--accent)"
          strokeWidth="1"
          className="hero-network-line"
          style={{ animationDelay: `${(i % 5) * 1.6}s` }}
        />
      ))}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3.5"
          fill="var(--accent)"
        />
      ))}
    </svg>
  );
}
