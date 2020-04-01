import React, { useState, useEffect } from 'react'
import moment from 'moment'
import fetch from 'isomorphic-unfetch'

const img = [
    '/images/infect.png',
    '/images/death.png',
    '/images/recover.png',
    '/images/new.png',
    '/images/new_death.png',
]
const icon_size = 80
const Box_all = () => {

    const [text, setText] = useState();
    const [total_cases, setTotal_cases] = useState()
    const [total_deaths, setTotal_deaths] = useState()
    const [total_recovered, setTotal_recovered] = useState()
    const [new_cases, setNew_cases] = useState()
    const [new_deaths, setNew_deaths] = useState()
    const [update, setUpdate] = useState()
    const [NewConfirmed, setNewConfirmed] = useState()
    const [NewRecovered, setNewRecovered] = useState();
    const [Hospitalized, setHospitalized] = useState();
    const [loading, setLoading] = useState(false)

    const loading_screen = () => (
        <div>
            <img width="50" src="http://gg.gg/h34yc" />
        </div>
    )

    const call_api = async () => {
        await fetch("https://covid19.th-stat.com/api/open/today", {
            "method": "GET",
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                //console.log(data);
                const number = (number) => new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
                setTotal_cases(number(data.Confirmed))
                setTotal_deaths(number(data.Deaths))
                setTotal_recovered(number(data.Recovered))
                setNew_cases(number(data.NewHospitalized))
                setNew_deaths(number(data.NewDeaths))
                setNewConfirmed(number(data.NewConfirmed))
                setNewRecovered(number(data.NewRecovered))
                setHospitalized(number(data.Hospitalized))
                setUpdate(data.UpdateDate);
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        call_api()
    }, [])

    return (
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card">
                    <div className="card-body bg-theme text-white text-center">
                        <img style={{ margin: '0 auto', 'display': 'block' }} width={icon_size} src={img[0]} />
                        <h3 className="text-center mt-2">ผู้ติดเชื้อ</h3>
                        <h2>{loading ? total_cases : <img width="50" src="http://gg.gg/h34yc" />} <span>(+{NewConfirmed})</span> ราย</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card">
                    <div className="card-body bg-theme text-white text-center">
                        <img style={{ margin: '0 auto', 'display': 'block' }} width={icon_size} src={img[1]} />
                        <h3 className="text-center mt-2">ผู้เสียชีวิต</h3>
                        <h2>{loading ? total_deaths : <img width="50" src="http://gg.gg/h34yc" />} (+{new_deaths}) ราย</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card">
                    <div className="card-body bg-theme text-white text-center">
                        <img style={{ margin: '0 auto', 'display': 'block' }} width={icon_size} src={img[2]} />
                        <h3 className="text-center mt-2">หายดีแล้ว</h3>
                        <h2>{loading ? total_recovered : <img width="50" src="http://gg.gg/h34yc" />} (+{NewRecovered}) ราย</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card">
                    <div className="card-body bg-theme text-white text-center">
                        <img style={{ margin: '0 auto', 'display': 'block' }} width={icon_size} src={img[3]} />
                        <h3 className="text-center mt-2">รักษาอยุ่ที่ รพ.</h3>
                        <h2>{loading ? Hospitalized : <img width="50" src="http://gg.gg/h34yc" />} ราย</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card">
                    <div className="card-body bg-theme text-white text-center">
                        <img style={{ margin: '0 auto', 'display': 'block' }} width={icon_size} src={img[4]} />
                        <h3 className="text-center mt-2">เพิ่งเสียชีวิต</h3>
                        <h2>{loading ? new_deaths : <img width="50" src="http://gg.gg/h34yc" />} ราย</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 text-center">
                <h5 className="text-white bg-theme p-2">อัปเดตล่าสุด {update}</h5>
            </div>
        </div>
    )
}

export default Box_all;