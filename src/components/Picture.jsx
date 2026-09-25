/** Serves WebP with a JPEG fallback and lazy-loads by default. */
export default function Picture({
  src,
  webp,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
  sizes,
  style
}) {
  return (
    <picture>
      {webp ? <source srcSet={webp} type="image/webp" sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        style={style}
      />
    </picture>
  );
}
