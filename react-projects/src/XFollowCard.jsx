export function XFollowCard({ username, name }) {
  const img = `https://unavatar.io/twitter/${username}`;
  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img className="tw-followcard-avatar" src={img} />
        <div className="tw-followcard-info">
          <strong>{name}</strong>
          <span>{username}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followcard-button">Seguir</button>
      </aside>
    </article>
  );
}
