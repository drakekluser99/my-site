import { floorPlans } from './content';
import styles from './page.module.css';

/**
 * The card visual: a drawn floor plan rather than a stand-in for a photo.
 * The agency has no photography, and a gradient rectangle pretending to be
 * one is the tell of an unfinished prototype — a plan is honest, on-theme,
 * and carries more information than a picture of a sofa would.
 *
 * Decorative: the real data is in the card text beside it.
 */
export default function FloorPlan({ variant }) {
  const rooms = floorPlans[variant] ?? floorPlans.bilocale;

  return (
    <svg viewBox="0 0 200 150" className={styles.plan} aria-hidden="true">
      {/* drawing grid */}
      <defs>
        <pattern id={`grid-${variant}`} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" className={styles.planGrid} />
        </pattern>
      </defs>
      <rect width="200" height="150" fill={`url(#grid-${variant})`} />

      {rooms.map((r) => (
        <g key={r.label}>
          <rect
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            className={r.open ? styles.planRoomOpen : styles.planRoom}
          />
          <text x={r.x + 5} y={r.y + 13} className={styles.planLabel}>
            {r.label}
          </text>
        </g>
      ))}

      {/* dimension line along the bottom, the detail that makes it read as a
          drawing rather than a diagram */}
      <g className={styles.planDim}>
        <line x1="5" y1="146" x2="195" y2="146" />
        <line x1="5" y1="142" x2="5" y2="150" />
        <line x1="195" y1="142" x2="195" y2="150" />
      </g>
    </svg>
  );
}
