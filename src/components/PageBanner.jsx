export default function PageBanner({ title, lead }) {
  return (
    <section className="page-banner">
      <div className="shell">
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
      </div>
    </section>
  );
}
