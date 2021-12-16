import { GlobalStateStore } from "../../stores"
import { NextPage } from 'next'
import { ProductPage } from "../../components/pages/product"
import { ProductGrid } from "../../components/ui/product-grid/product-grid"



const Product: NextPage<{ id: any }> = ({ id }) => {
	const state = GlobalStateStore.useContainer()
	return (
		<div>
			{!!state.data.length ?
				!!state.getOne(id) ? <div className='container mx-auto'>
					<ProductPage data={state.getOne(id)} />
					<div className='text-xl bolder'>Similar Products</div>
					<ProductGrid data={state.filterItemsBasedOnKey("brand", `${state.getOne(id)?.brand}`)} />
				</div>
					: <div>
						404 not fund
					</div> : <div>
					loading...
				</div>}
		</div>
	)
}

Product.getInitialProps = (ctx) => {
	return { id: ctx.query.id }
}

export default Product