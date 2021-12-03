// import { recipe_data } from '../data'
import Recipe from './recipe'
import './index.css'
import { useState, useEffect } from 'react'

const API_URL = 'https://movies-g.herokuapp.com'

const Index = () => {
	const [data, setData] = useState([])
	const getData = async () => {
		const fullData = await fetch(`${API_URL}/recipes`)
		const jsonData = await fullData.json()
		setData(jsonData)
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='page-container'>
			{data &&
				data.map((r) => (
					<div className='recipe-container'>
						<Recipe name={r.name} image={r.image} />
					</div>
				))}
		</div>
	)
}

export default Index
