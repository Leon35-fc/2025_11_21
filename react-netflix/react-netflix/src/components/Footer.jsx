import {Row, Col, Button} from 'react-bootstrap'

function Footer() { 
 return(
    <footer className="bg-dark text-info text-start pt-5">
    <Row className='justify-content-center'>
        <Col xs={6}>
        <Row align="start" className='mb-3'>
            <Col>
                <i className="bi bi-facebook me-2"></i>
                <i className="bi bi-instagram me-2"></i>
                <i className="bi bi-twitter me-2"></i>
                <i className="bi bi-youtube me-2"></i>
            </Col>
        </Row>
        <Row align="start" justify="between" className='flex-wrap g-2'>
            <Col xs={3}><a href="#audio" className="text-decoration-none">Audio and Subtitles</a></Col>
            <Col xs={3}><a href="#audio-description" className="text-decoration-none">Audio Description</a></Col>
            <Col xs={3}><a href="#help" className="text-decoration-none">Help Center</a></Col>
            <Col xs={3}><a href="#gift" className="text-decoration-none">Gift Cards</a></Col>
            <Col xs={3}><a href="#media" className="text-decoration-none">Media Center</a></Col>
            <Col xs={3}><a href="#investor-relations" className="text-decoration-none">Investor Relations</a></Col>
            <Col xs={3}><a href="#jobs" className="text-decoration-none">Jobs</a></Col>
            <Col xs={3}><a href="#terms-of-use" className="text-decoration-none">Terms of Use</a></Col>
            <Col xs={3}><a href="#privacy" className="text-decoration-none">Privacy</a></Col>
            <Col xs={3}><a href="#legal-notices" className="text-decoration-none">Legal Notices</a></Col>
            <Col xs={3}><a href="#cookies" className="text-decoration-none">Cookie Preferences</a></Col>
            <Col xs={3}><a href="#corporate-information" className="text-decoration-none">Corporate Information</a></Col>
            <Col xs={3}><a href="#contacts-us" className="text-decoration-none">Contact Us</a></Col>
        </Row>
        <Row>
            {/* <Col><button type="button" className='btn btn-outline-info rounded-0 px-2 my-3'>Service Code</button></Col> */}
            <Col><Button variant="outline-info" className='rounded-0 px-2 my-3' style={{
                                                                                    '--bs-btn-color': '#838383',
                                                                                    '--bs-btn-hover-bg': 'transparent',
                                                                                    '--bs-btn-hover-color': '#fff',
                                                                                    '--bs-btn-hover-border-color': 'transparent'
      }}>Service Code</Button></Col>
        </Row>
        <Row>
        <p>&copy; 2025 My Netflix Clone</p>
        </Row>
        </Col>
    </Row>
    </footer>
 )
}

export default Footer