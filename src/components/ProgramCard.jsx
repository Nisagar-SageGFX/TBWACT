import { Link } from 'react-router-dom';
import { programIcons } from './Icons';

export default function ProgramCard({ program }) {
  const Icon = programIcons[program.id];
  return (
    <article className="pillar">
      {Icon ? <Icon className="pillar__icon" /> : null}
      <h3>{program.title}</h3>
      <p>{program.summary}</p>
      <Link to={`/programs#${program.id}`} className="link-strong">
        About this programme
      </Link>
    </article>
  );
}
