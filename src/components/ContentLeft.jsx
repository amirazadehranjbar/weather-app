const ContentLeft = () => {
    return (
        <div className="content-left">

            <div className="today">


                <div className="city-date">

                    <h3>Berlin,Germany</h3>
                    <p>tuesday,Aug 5,2025</p>
                </div>


                <div className="temp-icon">
                    <img src="../../src/assets/images/icon-sunny.webp" alt=""/>
                    <p>68</p>
                </div>




            </div>

            <div className="content-left_InfoCards">


                <div className="content-left_InfoCards-card">
                    <div className="content-left_InfoCards-card-info">
                        <p>feels like</p>
                        <h4>64</h4>
                    </div>
                </div>

                <div className="content-left_InfoCards-card">
                    <div className="content-left_InfoCards-card-info">
                        <p>feels like</p>
                        <h4>64</h4>
                    </div>
                </div>
                <div className="content-left_InfoCards-card">
                    <div className="content-left_InfoCards-card-info">
                        <p>feels like</p>
                        <h4>64</h4>
                    </div>
                </div>
                <div className="content-left_InfoCards-card">
                    <div className="content-left_InfoCards-card-info">
                        <p>feels like</p>
                        <h4>64</h4>
                    </div>
                </div>


            </div>

            <div className="content-left_dailyForecast">
                <h3>Daily Forecast</h3>
                <div className="forecast-cards-container">
                    <div className="forecast-card">

                    </div>
                </div>
            </div>


        </div>
    )
}
export default ContentLeft
