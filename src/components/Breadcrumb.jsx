import { Link } from 'react-router-dom';

/** trail: [{ label, path }] — the last item is the current page. */
export default function Breadcrumb({ trail = [] }) {
  const items = [{ label: 'Home', path: '/' }, ...trail];

  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <div className="shell">
        <ol>
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path + item.label}>
                {last ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <>
                    <Link to={item.path}>{item.label}</Link>
                    <span className="crumbs__sep" aria-hidden="true">
                      {' / '}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
