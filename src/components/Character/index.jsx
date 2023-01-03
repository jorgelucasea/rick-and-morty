import './style.css'

export default function Character({ character }) {
  return (
    <div className='character'>
      	<img src={character.image} alt={character.name} />
        <div className='info'>
          <h3>{character.name}</h3>
          <p className='status'>
            {character.status} - {character.species}
          </p>
          <div className='last-seen'>
            <p>Last Seen:</p>
            <p className='title'>{character.location.name}</p>
          </div>
        </div>

    </div>
  )
}
