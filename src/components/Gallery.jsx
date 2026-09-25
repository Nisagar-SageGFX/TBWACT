import { useEffect, useState } from 'react';
import galleryItems, { galleryCategories } from '../data/gallery';
import Picture from './Picture';

export default function Gallery({ items = galleryItems, showFilters = true }) {
  const [category, setCategory] = useState('All');
  const [active, setActive] = useState(null);

  const visible =
    category === 'All' ? items : items.filter((i) => i.category === category);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      {showFilters ? (
        <div className="filters" role="group" aria-label="Filter the gallery">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter${c === category ? ' is-active' : ''}`}
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      ) : null}

      <div className="gallery-grid">
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            className="gallery-item"
            onClick={() => setActive(item)}
          >
            {/* `ratio` overrides the default 3/4 thumbnail frame for images
                whose own shape would otherwise be cropped away. */}
            <Picture
              src={item.src}
              webp={item.webp}
              alt={item.alt}
              style={item.ratio ? { aspectRatio: item.ratio } : undefined}
            />
            <figcaption>{item.caption}</figcaption>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActive(null)}
            autoFocus
          >
            &times;
            <span className="visually-hidden">Close image</span>
          </button>
          <figure onClick={(e) => e.stopPropagation()} style={{ margin: 0 }}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
