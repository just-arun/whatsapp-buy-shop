
import { ProductGrid } from "../../components/ui/product-grid/product-grid";
import { GlobalStateStore } from "../../stores";

const Search = () => {
    const state = GlobalStateStore.useContainer()
    return (
        <div>
            <ProductGrid data={state.computedData} />
        </div>
    )
}

Search.layout = "search"

export default Search;