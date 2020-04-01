import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch';
import Chart_Gender from '../components/Chart_Gender'
import DataTable from 'react-data-table-component';
import _ from 'lodash'

const url_map = 'https://covid19.th-stat.com/th/share/map';

const Cases = props => {

    //const [data, setData] = useState([]);

    //console.log(props.datas.Data);
    //setData(props.datas.Data)

    //const d = props.datas.Data;
    //console.log(props.cases_sum);

    const data = props.datas.Data

    const columns = [
        {
            name: 'ลำดับ',
            selector: 'No',
            sortable: true,
            center: true
        },
        {
            name: 'จังหวัด',
            selector: 'Province',
            sortable: true,
            center: true
        },
        {
            name: 'เชื้อชาตื',
            selector: 'Nation',
            sortable: true,
            center: true
        },
        {
            name: 'อายุ',
            selector: 'Age',
            sortable: true,
            center: true
        },
        {
            name: 'เพศ',
            selector: 'Gender',
            sortable: true,
            center: true
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 shadow-sm">
                    <iframe style={{ width: '100%', borderRadius: '0px', height: '400px', 'border': '0px', overflowY: 'none' }} src={url_map}></iframe>
                </div>
                {/*<div className="col-lg-5 bg-white pt-3 mt-2 shadow-sm">
                    <Chart_Gender />
                </div>*/}
            </div>
            <div className="row">
                <div className="col-lg-12 mt-3 bg-white pb-3">
                    <DataTable
                        title="รายละเอียด"
                        columns={columns}
                        data={data}
                        pagination={true}
                    />

                </div>
            </div>
        </div>
    )
}

Cases.getInitialProps = async function () {
    const res = await fetch('https://covid19.th-stat.com/api/open/cases');
    const data = await res.json();

    return {
        datas: data,
    };
}

export default Cases;