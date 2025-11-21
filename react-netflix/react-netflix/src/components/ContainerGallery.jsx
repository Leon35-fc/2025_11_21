import Gallery from "./Gallery";

function ContainerGallery() {
  return (
    <>
    <div className="bg-dark container-fluid py-5 px-3">

      <Gallery barTitle="Trending Now"/>
      <Gallery barTitle="Watch Again"/>
      <Gallery barTitle="New Releases"/>
    </div>
    </>
  );
}

export default ContainerGallery;