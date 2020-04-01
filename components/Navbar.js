import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">covid - 19</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/"><a className="nav-link"><i className="fa fa-home"></i> หน้าแรก</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cases"><a className="nav-link"><i className="fa fa-map-marked"></i> ข้อมูลแต่ละเคส</a></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <li className="nav-link"></li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;