import { FC } from "react"
import { GeneralMiddleware } from "../middleware/general"
import { SearchHeader } from "../ui/search-header/search-header"

export const SearchLayout: FC = ({ children }) => {
    return (
        <div>
            <SearchHeader />
            <GeneralMiddleware>
                {children}
            </GeneralMiddleware>
        </div>
    )
}