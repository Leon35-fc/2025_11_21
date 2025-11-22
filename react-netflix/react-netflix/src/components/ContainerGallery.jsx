import { Container, Row, Col, DropdownButton, DropdownItem} from "react-bootstrap";
import Gallery from "./Gallery";

function ContainerGallery() {
  return (
    <>
    <div className="bg-dark container-fluid py-5 px-3">
    <Container fluid={true} className="mb-4">
        <Row>
            <Col xs={1} justify="middle">
                <h2 className="fs-2 fw-bold text-white mb-0">TV Shows</h2>
            </Col>
            <Col xs={1} className="d-flex justify-content-start align-items-center">
                        <DropdownButton id="dropdown-basic-button" title="Genres" variant="dark" className="btn btn-sm text-white">
                        <DropdownItem href="#comedy">Comedy</DropdownItem>
                        <DropdownItem href="#drama">Drama</DropdownItem>
                        <DropdownItem href="#thriller">Thriller</DropdownItem>
                        </DropdownButton>
            </Col>
            <Col xs={10} className="d-flex justify-content-end align-items-center gap-5">
            <i className="bi bi-grid fs-3"></i>
            <i className="bi bi-grid-3x3 fs-3"></i>
            </Col>
        </Row>
      <Gallery galleryTitle="Trending Now" searchFilm="Star Wars" />
      <Gallery galleryTitle="Watch Again" searchFilm="The Matrix" />
      <Gallery galleryTitle="New Releases" searchFilm="Lord of the Rings" />
    </Container>
    </div>
    </>
  );
}

export default ContainerGallery;