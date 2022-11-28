import { GlobalStateStore } from "../../stores"
import { LoaderWrapper } from "../ui/loaders/loader-wrapper";
import { OrderLoader } from "../ui/loaders/orbit";
import { ProductGrid } from "../ui/product-grid/product-grid"

export const HomePage = () => {
    const state = GlobalStateStore.useContainer();
    return (
        <div>
            {state.loading ? <LoaderWrapper><OrderLoader /></LoaderWrapper> :
                <ProductGrid data={state.data} />}
        </div>
    )
}