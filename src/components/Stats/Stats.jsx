export const Stats = ({
  numberOfCharacters,
  twitterCharactersLeft,
  metaCharactersLeft,
  numberOfWords,
}) => {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={twitterCharactersLeft} label="Twitter / X" />
      <Stat number={metaCharactersLeft} label="Instagram / Facebook" />
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  )
}
