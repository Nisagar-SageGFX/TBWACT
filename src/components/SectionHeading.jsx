export default function SectionHeading({
  kicker,
  title,
  lead,
  align = 'left',
  as: Tag = 'h2',
  plain = false,
  id
}) {
  const classes = [
    'heading',
    align === 'center' ? 'heading--center' : '',
    plain ? 'heading--plain' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {kicker ? <span className="heading__kicker">{kicker}</span> : null}
      <Tag className="heading__title" id={id}>
        {title}
      </Tag>
      {lead ? <p className="heading__lead">{lead}</p> : null}
    </div>
  );
}
