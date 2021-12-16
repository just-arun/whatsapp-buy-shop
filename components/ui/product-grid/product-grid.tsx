import { FC } from 'react'
import { ProductCard, ProductCardProps } from '../card/product-card'

export const ProductGrid: FC<{ data: ProductCardProps[] }> = (_props) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-10 mx-auto">
				<div className="flex flex-wrap -m-4">
					{_props.data.map((e, i) =>
						<div className="lg:w-1/4 md:w-1/2 p-1 w-1/2" key={i}>
							<ProductCard {...e} />
						</div>
					)}
				</div>
			</div>
		</section>
	)
}