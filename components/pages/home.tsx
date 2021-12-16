import { GlobalStateStore } from "../../stores"
import { ProductGrid } from "../ui/product-grid/product-grid"

export const HomePage = () => {
    const state = GlobalStateStore.useContainer();
    return (
        <div>
            <ProductGrid data={state.data} />
        </div>
    )
}