import Head from 'next/head'
import Box_all from '../components/Box_all'
import Box_thai from '../components/Box_thai'

const Home = () => (
  <div style={{ backgroundImage: 'url("/images/bg.jpg")', height: '650px',paddingTop: '40px' }}>
    <div className="container">
      <Head>
        <title>Corova - app</title>
      </Head>
      <h3 className="text-center bg-theme text-white p-2 mb-3"><i className="fa fa-newspaper"></i> รายงานผลการติดเชื้อทั่วโลก</h3>
      <Box_all />
      <h3 className="text-center bg-theme text-white p-2 mt-5 mb-3"><i className="fa fa-newspaper"></i> รายงานผลการติดในไทย</h3>
      <Box_thai />
    </div>
  </div>
)

export default Home
