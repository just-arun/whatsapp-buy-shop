import { GlobalStateStore } from "../../stores"
import { OrderLoader } from "../ui/loaders/orbit";
import { ProductGrid } from "../ui/product-grid/product-grid"

export const HomePage = () => {
    const state = GlobalStateStore.useContainer();
    return (
        <div>
            {state.loading ? <div className="flex items-center justify-center ">
                <div>
                    <OrderLoader />
                    <div className="text-center">
                        loading...
                    </div>
                </div>
            </div> :
                <ProductGrid data={state.data} />}
        </div>
    )
}