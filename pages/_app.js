import {Provider} from "react-redux";

import "src/styles/index.css"
import store from "src/store/store.js";
import Layout from "src/layout/CommonLayout.jsx"

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </div>
        </Provider>
    )
}