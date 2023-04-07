import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={4} className="col-left left">
            <div className="avatar container d-flex justify-content-center">
              <Image
                thumbnail="true"
                roundedCircle="true"
                src="https://linxtheme.com/html/flex/images/resume.jpg"
                alt="Alternative title"
              ></Image>
            </div>
            <div className="container-fluid text-center">
              <h1>Fernando Garrido</h1>
              <p className="av1">Born in 25/09/1987</p>
              <p className="av1">Photographer &amp; Travler</p>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i class="fa-brands fa-telegram"></i></a>
            </div>
            {/* done avatar */}
            <div className="container-fluid info bloc">
              <h3 className="info-border">CONTACT INFO.</h3>
            </div>
            <div className="container-fluid mb-4 contact">
              <p className="p2">
                <i class="fa-solid fa-envelope"></i> fernando.garrido@gmail.com
              </p>
              <p className="p2">
                <i class="fa-solid fa-phone"></i> +(1) 202-555-2017
              </p>
              <p className="p2">
                <i class="fa-regular fa-mobile"></i> +(1) 435-234-5367
              </p>
              <p className="p2">
                <i class="fa-solid fa-location-dot"></i> PO Box 23127 - NY, USA
              </p>
            </div>
            {/* done Contact info */}
            <div className="container-fluid skills bloc">
              <h3 className="info-border">SKILLS</h3>
              <div className="container-fluid skills2">
                <span>All camera formats</span>
                <span>Digital capture</span>
                <span>Black-and-white</span>
                <span>Print</span>
                <span>Films</span>
                <span>Adobe Creative Suite</span>
                <span>In Design</span>
                <span>CSS/HTML</span>
                <span>Lightroom</span>
                <span>Photoshop</span>
              </div>
            </div>
            {/* done Skills */}
            <div className="container-fluid languages bloc">
              <h3 className="info-border">LANGUAGES</h3>
            </div>
            <div className="container-fluid checkbox">
              <p>
                English
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
              </p>
              <p>
                French
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
              </p>
              <p>
                Spanish
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
              </p>
              <p>
                Italian
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
                <ins></ins>
              </p>
              <p>
                Arabic
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins class="lx-op"></ins>
                <ins></ins>
                <ins></ins>
              </p>
            </div>
            {/* done languages */}
          </Col>
          {/* done col-left */}
          <Col sm={8} className="col-right">
            <div className="container-fluid about bloc">
              <h3 className="info-border">ABOUT ME</h3>
            </div>
            <div className="container-fluid ab2">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            {/* done about */}
            <div className="container-fluid work bloc">
              <div>
                <h3 className="info-border">WORK EXPERIENCES</h3>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  MID-LEVEL DESIGNER AT ENVATO MARKET
                </h4>
                <span>June 2016 - Up to now</span>
                <p>
                  Quisque semper justo at risus. Donec venenatis, turpis vel
                  hendrerit interdum, dui ligula ultricies purus, elit magna
                  vulputate arcu, vel tempus metus leo non est. Etiam sit amet
                  lectus quis est congue mollis. Phasellus congue lacus eget
                  neque.
                </p>
              </div>
              <div>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  WEB DESIGNER & DEVELOPER AT GOOGLE
                </h4>
                <span>February 2015 - Mai 2016</span>
                <p>
                Purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare.
                </p>
              </div>
              <div>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  FRONT-END DESIGNER AT PIXEL TOUCH
                </h4>
                <span>Mai 2013 - January 2015</span>
                <p>
                Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque.
                </p>
              </div>
            </div>
            {/* done work */}
            <div className="container-fluid education bloc">
              <h3>Education</h3>
              <div>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  ART & PHOTO EDITING<ins>CAMBRIDGE UNIVERSIRTY</ins>
                </h4>
                <span>Spetember 2009 - June 2012</span>
                <p>
                Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque.
                </p>
              </div>
              <div>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  WEB DESIGN TECHNIQUES<ins>ISTA BEN MSIK TRAINING CENTER</ins>
                </h4>
                <span>September 2007 - June 2009</span>
                <p>
                Purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare.
                </p>
              </div>
              <div>
                <h4>
                  <i
                    class="fa-solid fa-circle fa-2xs"
                    style={{ color: "#e01039" }}
                  ></i>
                  BACCALAUREATE: EXPERIMENTAL SCIENCES<ins>MLY ISMAIL HIGH SCHOOL</ins>
                </h4>
                <span>September 2003 - June 2006</span>
                <p>
                Sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque.
                </p>
              </div>
            </div>
            {/* done education */}
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
