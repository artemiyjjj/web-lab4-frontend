import Header from "src/layout/components/header/Header.jsx";

const CommonLayout = ({children}) => {

    return (
        <>
            <Header/>
            {children}
        </>

    )
}

export default CommonLayout;