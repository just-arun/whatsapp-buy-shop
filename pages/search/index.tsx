
import { ProductGrid } from "../../components/ui/product-grid/product-grid";
import { GlobalStateStore } from "../../stores";
import Head from 'next/head'

const Search = () => {
    const state = GlobalStateStore.useContainer()
    return (
        <div>
            <Head>
                <title>Show Online</title>
                <meta name="description" content="sell, buy products online with your progressive web app which helps you reach you client easier" />
                <link rel="icon" href="/ico.svg" />
            </Head>
            <ProductGrid data={state.computedData} />
        </div>
    )
}

Search.layout = "search"

export default Search;