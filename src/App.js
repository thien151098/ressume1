import "./App.css";
import CountUp from "react-countup";
import ReactPlayer from "react-player";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="App">
      <div className="header-logo">
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3"
            bg="black"
            variant="dark"
            fixed="top"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/themes/romea-wp/images/logo.png"></img>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action2">Portfolio</Nav.Link>
                    <Nav.Link href="#action2">Education</Nav.Link>
                    <Nav.Link href="#action2">Skills</Nav.Link>
                    <Nav.Link href="#action2">Experience</Nav.Link>
                    <Nav.Link href="#action2">Blog</Nav.Link>
                    <Nav.Link href="#action2">Cover Letter</Nav.Link>
                    <Nav.Link href="#action2">Testimonial</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                    <NavDropdown
                      title="Extra Pages"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        FULL BLOG
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        POST PAGE
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      {/* end-header */}
      <div className="container-fluid mt-3 text-white bg-black">
        <div className="row">
          <div className="col">
            <br />
            <br />
            <h1>Hello I'm Rob Davidson</h1>
            <p>
              A full stack allaround <strong>designer </strong>that placerat in
              massa consectetur
            </p>
            <button>
              <a href="https://demo.cocobasic.com/documentation/MANUAL-RomeaWP.pdf">
                DOWNLOAD CV
              </a>
            </button>
          </div>
          <div className="col">
            <img
              img-fluid
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/profile_image.jpg"
            ></img>
          </div>
        </div>
      </div>
      {/* end-page1 */}
      <div className="about container-fluid mt-3">
        <h1>About</h1>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque </strong>lobortis vitae faucibus diam
        </p>
        <div className="row">
          <div className="col p-3">
            <h3>Design</h3>
            <h1>
              <i className="fa-light fa-circle-1"></i>1
            </h1>
            <h2>
              Dolor sit amet, consectetur adipiscing elit viverra tristique
            </h2>
            <p>
              Faucibus sed tristique fames sed aliquet ultr eget viverra arcu.
              Vitae faucibus diam polo consequat maecenas. Turpis metus sit diam
              purus leo in varius ac quam nunc amet lorem.
            </p>
            <button>
              <a href="#education">LEARN MORE</a>
            </button>
          </div>
          <div className="col p-3">
            <h3>Code</h3>
            <h1>
              <i className="fa-light fa-circle-1"></i>2
            </h1>
            <h2>
              {" "}
              Lorem consectetur adipiscing elit viverra tristique donec est
              setera
            </h2>
            <p>
              {" "}
              Tristique fames sed aliquet ultricies eget viverra arcu mous
              faucibus diam consequat maecenas it diam purus leo in varius ac
              quam nunc amet tristique volutpat adipiscing polis.
            </p>
            <button>
              <a href="#skills">LEARN MORE</a>
            </button>
          </div>
        </div>
      </div>
      {/* end-page2 --About */}
      <div className="container-fluid mt-3 text-white bg-black">
        <h2 className="Portfolio">Portfolio</h2>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
        <div>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item1.jpg"></img>
                </Tooltip>
              }
            >
              <Button className="bg-black" variant="secondary" style={{border:"none"}}>
                <div style={{ display: "flex" }}>
                  <h6 style={{ padding:"0"}}>01</h6>
                  <h3>Parallax</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item2.jpg"></img>
                </Tooltip>
              }
            >
              <Button className="bg-black" variant="secondary" style={{border:"none"}}>
                <div style={{ display: "flex" }}>
                  <h6>02</h6>
                  <h3>Grid</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item3.jpg"></img>
                </Tooltip>
              }
            >
              <Button className="bg-black" variant="secondary" style={{border:"none"}}>
                <div style={{ display: "flex" }}>
                  <h6>03</h6>
                  <h3>Video</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <div>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/p_item4.jpg"></img>
                </Tooltip>
              }
            >
              <Button className="bg-black" variant="secondary" style={{border:"none"}}>
                <div style={{ display: "flex" }}>
                  <h6>04</h6>
                  <h3>Slide</h3>
                </div>
              </Button>
            </OverlayTrigger>
          ))}
        </div>
      </div>
      {/* end-page3 --Portfolio*/}
      <div className="container-fluid">
        <h2>Education</h2>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
      </div>
      <div className="container-fluid">
        <p>
          <strong>2015 – 2016</strong>
        </p>
        <p>
          Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu
          vitae faucibus diam consequat.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      <div className="container-fluid">
        <p>
          <strong>2016 – 2017</strong>
        </p>
        <p>
          Aliquam nec tortor non dolor sagittis accumsan. Vivamus tristique
          metus et venenatis pull.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      <div className="container-fluid">
        <p>
          <strong>2017 – 2018</strong>
        </p>
        <p>
          Donec mattis justo mi, eu ultricies augue gravida id lorem ipsum dolom
          setos tutorias bolonos.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      <div className="container-fluid">
        <p>
          <strong>2018 – 2010</strong>
        </p>
        <p>
          Sed eu risus dignissim sapien sollicitudin sceleri vamus cursus purus
          eget ligula lorem ipsum.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      <div className="container-fluid">
        <p>
          <strong>2019 – 2020</strong>
        </p>
        <p>
          Molestie, a laoreet urna tempor vivamus vel gravida augue, quis
          imperdiet sem etiam sedio.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      <div className="container-fluid">
        <p>
          <strong>2020 – 2021</strong>
        </p>
        <p>
          Phasellus id arcu venenatis felis maximus pelle eu a enim integer eget
          mauris norius kolopios.
          <br />
          <a href="#">www.siteexamplehere.com</a>
        </p>
      </div>
      <div className="container"></div>
      {/*end page4 --Education */}
      <div className="container-fluid mt-3 text-white bg-dark">
        <h2>Skills</h2>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-white"
            role="progressbar"
            aria-valuenow="62"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "62%" }}
          >
            <span style={{ color: "black", margin: "0px 0px 0px 0px" }}>
              PHOTOSHOP
            </span>
          </div>
          <div className="progress-bar bg-dark" style={{ width: "38%" }}>
            <span style={{ margin: "0px 0px 0px 0px" }}>62%</span>
          </div>
        </div>
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-white"
            role="progressbar"
            aria-valuenow="84"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "84%" }}
          >
            <span style={{ color: "black", margin: "0px 0px 0px 0px" }}>
              AFFINITY DESIGNER
            </span>
          </div>
          <div className="progress-bar bg-dark" style={{ width: "16%" }}>
            <span style={{ margin: "0px 0px 0px 0px" }}>16%</span>
          </div>
        </div>
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-white"
            role="progressbar"
            aria-valuenow="62"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "62%" }}
          >
            <span style={{ color: "black", margin: "0px 450px 0px 0px" }}>
              PHOTOSHOP
            </span>
          </div>
          <div className="progress-bar bg-dark" style={{ width: "38%" }}>
            <span style={{ margin: "0px 0px 0px 300px" }}>62%</span>
          </div>
        </div>
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-white"
            role="progressbar"
            aria-valuenow="62"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "62%" }}
          >
            <span style={{ color: "black", margin: "0px 450px 0px 0px" }}>
              PHOTOSHOP
            </span>
          </div>
          <div className="progress-bar bg-dark" style={{ width: "38%" }}>
            <span style={{ margin: "0px 0px 0px 300px" }}>62%</span>
          </div>
        </div>
        <div className="progress" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-white"
            role="progressbar"
            aria-valuenow="62"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "62%" }}
          >
            <span style={{ color: "black", margin: "0px 450px 0px 0px" }}>
              PHOTOSHOP
            </span>
          </div>
          <div className="progress-bar bg-dark" style={{ width: "38%" }}>
            <span style={{ margin: "0px 0px 0px 300px" }}>62%</span>
          </div>
        </div>
      </div>
      {/* end-page5--Skills */}
      <div className="container-fluid">
        <h2>Experience</h2>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">COMPANY</th>
              <th scope="col">POSITION</th>
              <th scope="col">YEAR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Massa Fames </strong>/ New York
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Lobrissa </strong>/ Chicago
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Faucibuse </strong>/ Seattle
              </td>
              <td>Junior Developer</td>
              <td>
                <strong>2016</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Vivera Arcu </strong>/ Seattle
              </td>
              <td>PhP Developer</td>
              <td>
                <strong>2017</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Ultricies Esta </strong>/ Denver
              </td>
              <td>C++ Developer</td>
              <td>
                <strong>2018</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Diam Quam </strong>/ San Francisco
              </td>
              <td>Senior Developer</td>
              <td>
                <strong>2019</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Ercusa </strong>/ San Francisco
              </td>
              <td>Senior Developer</td>
              <td>
                <strong>2020</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Reesturato </strong>/ New York
              </td>
              <td>CEO</td>
              <td>
                <strong>2021</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* end-page6 --Experience */}
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_01@2x.png"
              alt="..."
              className="img-fluid mb-7 mb-md-0"
            ></img>
          </div>
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_02@2x.png"
              alt="..."
              className="img-fluid mb-7 mb-md-0"
            ></img>
          </div>
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_03@2x.png"
              alt="..."
              className="img-fluid mb-7 mb-md-0"
            ></img>
          </div>
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_04@2x.png"
              alt="..."
              className="img-fluid mb-7 mb-md-0"
            ></img>
          </div>
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_05@2x.png"
              alt="..."
              className="img-fluid mb-6 mb-sm-0"
            ></img>
          </div>
          <div className="col-4 col-sm-3 col-md text-center">
            <img
              src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/company_logo_06@2x.png"
              alt="..."
              className="img-fluid mb-6 mb-sm-0"
            ></img>
          </div>
        </div>
      </div>
      {/* end-page7 -BRAND */}
      <div className="container-fluid">
        <div className="container">
          <h2>Blog</h2>
          <p>
            A full stack allaround designer that tristique est placerat in massa{" "}
            <strong>consectetur quisque</strong> lobortis vitae faucibus diam
          </p>
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="card h-100">
                <img
                  src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2019/11/blog_01-768x356.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://demo.cocobasic.com/romea-wp/demo-1/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table">
                      Hundreds of thousands a still more glorious nights around
                      art table
                    </a>
                  </h5>
                  <p className="card-text">
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms ...
                  </p>
                  <a
                    href="https://demo.cocobasic.com/romea-wp/demo-1/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table/"
                    className="btn btn-primary"
                  >
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2019/11/blog_02-768x356.jpg"
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="https://demo.cocobasic.com/romea-wp/demo-1/preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years/">
                        Preserve and cherish that pale blue dot are creatures of
                        the cosmos light years
                      </a>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://demo.cocobasic.com/romea-wp/demo-1/preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years/"
                      className="btn btn-primary"
                    >
                      <span>READ MORE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end-page8 -blog */}
      <div className="container bg-dark text-white">
        {" "}
        Aliquet ultricies eget viverra arcu vitae faucibus diam consequat
        maecenas lorem ispum dolor sit amet nunc
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <CountUp end={52} />K<p>Hours</p>
            </div>
            <div className="col">
              <CountUp start={1} end={1.7} decimals={1} />
              K+
              <p>Coffee</p>
            </div>
            <div className="col">
              <CountUp end={95} />+<p>Connections</p>
            </div>
            <div className="col">
              <CountUp end={7} />
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* end-page9 -Number + */}
      <div className="container-fluid">
        <div className="container">
          <h2>Cover Letter</h2>
          <div className="row">
            <div className="col">
              <h5>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
              </h5>
              <p>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit
                diam purus leo in varius ac quam nunc amet tristique volutpat
                adipiscing. Morbi malesuada arcu egestas dolor blandit ultricies
                in at diam. Maecenas eget nisi vel nisl
                <a className="slow-scroll" href="#portfolio">
                  sollicitudin
                </a>{" "}
                porta aliquet vel leo. Sed feugiat soda les nulla. In consequat
                nisl sem, in aliquam libero tempor nec. Maecenas sit amet felis
                sed justo aliquam vulputate tempor ut orci. Suspendisse interdum
                velit tortor, a semper ex posuere quis. Morbi velit nulla,
                lobortis ac ipsum et, accumsan convallis odio. Proin turpis leo,
                hendrerit a lacus sed, porta placerat diam. Aliquam vitae magna
                et libero auctor lobortis non ac risus. Vivamus lacus tellus,
                pharetra ut vulputate sed, auctor sed ex. Nulla volutpat nisi et
                neque pulvinar luctus cras semper ipsum moronos textures
                asonius.
              </p>
            </div>
            <div className="col">
              <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/cover.jpg"></img>
              <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/signature_dark@2x.png"></img>
            </div>
          </div>
        </div>
      </div>
      {/* end-page10 - Cover Letter */}
      <div className="container-fluid">
        <div className="player-wrapper">
          <ReactPlayer
            url="https://player.vimeo.com/141995552"
            playing={true}
            controls={true}
            light={
              <img src="https://demo.cocobasic.com/romea-wp/demo-1/wp-content/uploads/2020/09/video_image.jpg"></img>
            }
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* end-page10 - video */}
      <div className="container-fluid">
        <h2>Testimonial</h2>
        <p>
          A full stack allaround designer that tristique est placerat in massa{" "}
          <strong>consectetur quisque</strong> lobortis vitae faucibus diam
        </p>
        <div className="scrollmenu ">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      {/* end-page11 - Testimonial */}
      <div className="container-fluid bg-dark">
        <a
          className="text-center"
          href="https://demo.cocobasic.com/documentation/MANUAL-RomeaWP.pdf"
          rel="nofollow"
        >
          Download CV
        </a>
        <div className="text-white text-center">
          {" "}
          PDF aliquet ultricies eget viverra arcu vitae faucibus diam co lorem
          ispum dolor sed est
        </div>
      </div>
      {/* end-page11 - Download */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Contact</h2>
            <p>
              A full stack allaround designer that tristique est placerat in
              massa <strong>consectetur quisque</strong> lobortis vitae faucibus
              diam
            </p>
            <div>
              <strong>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
              </strong>
            </div>
            <p>
              <strong>Name:</strong> Rob Davidson
              <br />
              <strong>Address:</strong> New York, USA
              <br />
              <strong>Phone:</strong> +1 234-567-890
              <br />
              <strong>Hours:</strong> 6:00 am – 2:00 am
            </p>
          </div>

          <div className="col">
            <div className="wrapper">
              {submitting && <div>Submtting Form...</div>}
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <label>
                    <p>Name</p>
                    <input name="name"></input>
                  </label>
                  <br />
                  <label>
                    <p>Email</p>
                    <input name="email"></input>
                  </label>
                  <br />
                  <label>
                    <p>Subject</p>
                    <input name="subject"></input>
                  </label>
                  <br />
                  <label>
                    <p>Message</p>
                    <input name="message"></input>
                  </label>
                  <br />
                </fieldset>
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end-page12 - contact */}
      <div className="container-fluid text-center">
        <p>
          © 2022 Romea WordPress Theme by{" "}
          <a href="https://cocobasic.com/">CocoBasic</a>
        </p>
        <div d-sm-flex>
          <i className="fa-brands fa-twitter fa-2xl"></i>
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <i className="fa-brands fa-dribbble fa-2xl"></i>
          <i className="fa-solid fa-rss fa-2xl"></i>
        </div>
      </div>
      {/* end-page13 - footer */}
    </div>
  );
}

export default App;
