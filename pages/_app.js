import PageLayout from '../components/PageLayout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

function App({Component,pageProps}){
    return (
        <PageLayout>
            <Component {...pageProps}></Component>
        </PageLayout>
    )
}

export default App;