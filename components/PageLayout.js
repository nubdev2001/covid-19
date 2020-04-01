import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head';

const Pagelayout = ({ children }) =>(
    <div>
        <Head>
            <link rel="icon" href="/favicon.png" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css" />
            <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" />
            <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
            <script src="script.js"></script>
            
        </Head>
        <Navbar />
        { children }
    </div>
)

export default Pagelayout;