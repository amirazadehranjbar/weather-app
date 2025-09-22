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
                    <DropDownList className="k-dropdownlist" data={days} defaultValue={days[0]} rounded="medium"/>
                </div>


            </div>


        </div>
    )
}
export default ContentRight
