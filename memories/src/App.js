import React, { useState } from "react";
import "./App.css";
import GridSuspenseImage from "./components/GridSuspenseImage";
import section1 from "./images/backgrounds/section1.jpg";
import app from "./images/appreciation/Artboard2.png";
import mom from "./images/moms/Artboard3.png";
import fun from "./images/fun/Artboard4.png";
import mcd from "./images/mcd/Artboard5.png";
import babes from "./images/babes/Artboard6.png";
import chick1 from "./images/sidechick/Artboard7.png";
import chick2 from "./images/sidechick/Artboard8.png";
import kedam from "./audio/shygirl.mp3";
import Fade from "react-reveal/Fade";

const RenderMemory = (props) => {
  const { page } = props;
  switch (page) {
    case 0:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={app} height="80%" />
          </Fade>
        </section>
      );
    case 1:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={mom} height="80%" />
          </Fade>
        </section>
      );
    case 2:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={fun} height="80%" />
          </Fade>
        </section>
      );
    case 3:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={mcd} height="80%" />
          </Fade>
        </section>
      );
    case 4:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={babes} height="80%" />
          </Fade>
        </section>
      );
    case 5:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={chick1} height="80%" />
          </Fade>
        </section>
      );
    case 6:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={chick2} height="80%" />
          </Fade>
        </section>
      );
    default:
      return (
        <section>
          <Fade>
            <GridSuspenseImage src={app} height="80%" />
          </Fade>
        </section>
      );
  }
};

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <audio src={kedam} autoPlay />
      <header className="App-header">
        <GridSuspenseImage src={section1} width="100%" />
      </header>
      <section className="memory_container">
        <RenderMemory page={page} />
        <div className="nav">
          {page === 0 ? (
            <button onClick={() => setPage(6)}>Previous</button>
          ) : (
            <button onClick={() => setPage(page - 1)}>Previous</button>
          )}

          {page === 6 ? (
            <button onClick={() => setPage(0)}>Next</button>
          ) : (
            <button onClick={() => setPage(page + 1)}>Next</button>
          )}
        </div>
      </section>
      <section className="footer">
        <h1>Made With Love</h1>
        <h1>By Chamans</h1>
      </section>
    </div>
  );
}

export default App;
