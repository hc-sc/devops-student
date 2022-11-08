import { Link } from 'react-router-dom'

function Confirmation() {
    return (
        <>
            <main property="mainContentOfPage" className="container" resource="#wb-main" typeof="WebPageElement">
                <h1>Confirmation</h1>
                <p>
                    <Link to="/" data-testid={'return'} className="btn btn-primary">Return to Homepage</Link>
                    <span> {/* For spacing */}</span>
                    <a href="/data" data-testid={'view'} className="btn btn-primary">View Submissions</a>
                </p>
                <br /> <br /> <br />
            </main>
        </>
    );
}

export default Confirmation;