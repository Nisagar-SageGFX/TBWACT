import { useEffect, useState } from 'react';
import { centreHouses } from '../data/programs';

/**
 * The Welfare & Service Centre drawn as a massing block.
 *
 * A line drawing rather than the render, because nothing is finished: a
 * drawing reads as intent, where a photorealistic render would claim the
 * building already exists. Deliberately a massing study with no floors or
 * openings — the trust has not published a design, so the drawing makes no
 * claim about where anything sits. All five annotations point at the same
 * single volume, which is the actual promise: one address for every programme.
 *
 * Wide layout keeps the annotations inside the SVG so the leader lines connect.
 * Under 900px they would be unreadable, so the viewBox crops to the block and
 * the same five labels render as an ordinary list underneath.
 */

const WIDE = '(min-width: 900px)';

// Leader anchors on the right face, top to bottom. Kept in one place so the
// dots, the rules and the labels cannot drift apart.
const ANCHORS = [118, 158, 198, 238, 278];

export default function Elevation() {
  const [wide, setWide] = useState(
    () => typeof window === 'undefined' || window.matchMedia(WIDE).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <figure className="elevation">
      <svg
        className="elevation__svg"
        viewBox={wide ? '0 0 700 470' : '0 0 420 470'}
        role="img"
        aria-labelledby="elevation-title elevation-desc"
      >
        <title id="elevation-title">
          The Welfare &amp; Service Centre, drawn as a single massing block
        </title>
        <desc id="elevation-desc">
          A schematic line drawing of one building volume sitting on a hatched
          foundation marked under development. Five labels annotate the same
          volume: {centreHouses.join(', ')}. The drawing is indicative and shows
          no floors, openings or layout.
        </desc>

        <defs>
          <pattern
            id="tbwact-hatch"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line className="el-hatch-line" x1="0" y1="0" x2="0" y2="8" />
          </pattern>
        </defs>

        {/* ground, then what is below it */}
        <line className="el-ground" x1="30" y1="360" x2="398" y2="360" />
        <rect x="70" y="360" width="230" height="34" fill="url(#tbwact-hatch)" />
        <rect className="el-hatch-edge" x="70" y="360" width="230" height="34" />

        {/* the volume: top and side first, front face over them */}
        <polygon className="el-face el-face--recede" points="70,130 128,88 358,88 300,130" />
        <polygon className="el-face el-face--recede" points="300,130 358,88 358,318 300,360" />
        <rect className="el-face el-face--front" x="70" y="130" width="230" height="230" />

        {/* the one orange mark on the page: where the work actually is */}
        <line className="el-tick" x1="120" y1="394" x2="120" y2="422" />
        <text className="el-note" x="120" y="440">
          Under development
        </text>

        {wide ? (
          <g>
            {ANCHORS.map((y, i) => (
              <g key={centreHouses[i]}>
                <circle className="el-dot" cx="358" cy={y} r="3.5" />
                <line className="el-leader" x1="358" y1={y} x2="408" y2={y} />
                <text className="el-label" x="418" y={y} dominantBaseline="middle">
                  {centreHouses[i]}
                </text>
              </g>
            ))}
          </g>
        ) : null}
      </svg>

      {wide ? null : (
        <ul className="elevation__list">
          {centreHouses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <figcaption className="elevation__caption">
        Indicative massing. The trust has not published a final design.
      </figcaption>
    </figure>
  );
}
