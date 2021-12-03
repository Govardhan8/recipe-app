const recipe = ({ name, image }) => {
	return (
		<div>
			<img className='recipe-image' src={image} alt={name} />
			<p className='recipe-name'>{name}</p>
		</div>
	)
}

export default recipe
