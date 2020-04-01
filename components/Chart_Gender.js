import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch';

const Chart_Gender = props => {

    const [male, setMale] = useState();
    const [female, setFemale] = useState();
    const [unknown, setUnknown] = useState();

    async function Call_Api() {
        fetch('https://covid19.th-stat.com/api/open/cases/sum')
            .then(res => res.json())
            .then(data => {
                setFemale(data.Gender.Female)
                setMale(data.Gender.Male)
                setUnknown(data.Gender.Unknown)
            })
    }

    /*chartRef = React.createRef();

    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
        type: 'line',
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    });    */

    useEffect(() => {
        Call_Api();
    }, [])

    return (
        <div className="row mt-1">
            <div className="col-lg-4 text-center">
                <div className="card" style={{ backgroundColor: 'pink' }}>
                    <div className="card-body">
                        <i style={{ color: 'pink' }} className="fa fa-female"></i> หญิง <b>{female}</b> ราย <br />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <div className="card" style={{ backgroundColor: 'lightblue' }}>
                    <div className="card-body">
                        <i style={{ color: 'lightblue' }} className="fa fa-male"></i> ชาย <b>{male}</b> ราย <br />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center">
                <div className="card" style={{ backgroundColor: 'gray' }}>
                    <div className="card-body text-center">
                        <i style={{ color: 'gray' }} className="fa fa-question"></i> ไม่ทราบ <b>{unknown}</b> ราย
                    </div>
                </div>
            </div>
            <div className="col-lg-12 justify-content-center">
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            
        </div>
    )
}

/*Chart_Gender.getInitialProps = async function () {
    const res = await fetch('https://covid19.th-stat.com/api/open/cases/sum');
    const data = await res.json();

    return {
        datas: data,
    };
}*/

export default Chart_Gender;