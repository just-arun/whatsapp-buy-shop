import { FC } from "react"
import { GeneralMiddleware } from "../middleware/general"
import { Header } from "../ui/header/header"

export const DefaultLayout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <GeneralMiddleware>
                    {children}
                </GeneralMiddleware>
            </div>
        </div>
    )
}