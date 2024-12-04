import { Provider } from "react-redux";
import { store } from "../../services/redux";

export const ReduxProvider = ({ children }: { children: any }) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>

    )
}