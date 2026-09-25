const initials = (name) =>
  name
    .replace(/^(Dr\.|Thiru|Tmt\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export default function TrusteeCard({ trustee }) {
  const { name, designation, professionalDesignation, image, focus, bio } = trustee;

  return (
    <article className="trustee">
      {image ? (
        <img
          className="trustee__photo"
          src={image}
          alt={designation ? `${name}, ${designation} of TBWACT` : name}
          loading="lazy"
          decoding="async"
          // The supplied photographs are landscape and the card crops them, so
          // a trustee whose face sits off-centre is corrected from the data.
          style={focus ? { objectPosition: focus } : undefined}
        />
      ) : (
        <div className="trustee__monogram" role="img" aria-label={name}>
          {initials(name)}
        </div>
      )}
      <div className="trustee__body">
        <h3 className="trustee__name">{name}</h3>
        {designation ? (
          <p className="trustee__role">{designation}</p>
        ) : (
          <p className="trustee__role trustee__role--pending">
            [Designation to be added]
          </p>
        )}
        {professionalDesignation ? (
          <p className="trustee__prof">{professionalDesignation}</p>
        ) : null}
        {bio ? <p className="trustee__bio">{bio}</p> : null}
      </div>
    </article>
  );
}
