import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import ContentLeft from "./components/ContentLeft.jsx";
import ContentRight from "./components/ContentRight.jsx";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <h1>How's the sky looking today?</h1>
            <div className="content">

                <Search/>
                <div className="content-leftright-container"><ContentLeft/>
                    <ContentRight/>

                </div>
            </div>
        </div>
    )
}
export default App
