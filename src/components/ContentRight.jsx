import {DropDownList} from '@progress/kendo-react-dropdowns';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const ContentRight = () => {
    return (
        <div className="content-right">


            <div className="hourlyforecast">


                <div className="hourlyforecast-title">
                    <p>Hourly forecast</p>
                    <DropDownList className="k-dropdownlist" data={days} defaultValue={days[0]} onChange={(data)=>{
                        console.log(data.value)}}/>
                </div>

                <div className="hourlyforecast-forecastCards">


                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>
                    <div className="hourlyforecast-card">
                        <div className="hourlyforecast-card_left">
                            <img src="../../src/assets/images/icon-fog.webp" alt=""/>
                            <p>3 PM</p>
                        </div>

                        <div className="hourlyforecast-card_right">
                            20°C
                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}
export default ContentRight
