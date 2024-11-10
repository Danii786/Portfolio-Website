import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <br />
      <section>
        <h2>My Project's</h2>
        <div class="container">
          <div class="box" data-color="clr1">
            <div class="imgBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoSUOeNW1j1QKp8VFVegTxlkrulq1wYydjQ&s"
                alt="Daraz Clone "
              />
            </div>
            <div class="glass">
              <h3>
                Daraz Website
                <br />
                <span>Clone</span>
              </h3>
              <ul>
                <a
                  href="https://wowpedia.fandom.com/wiki/Headless_Horseman"
                  target="_blank"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
              </ul>
            </div>
          </div>
          <div class="box" data-color="clr2">
            <div class="imgBox">
              <img
                src="https://about.netflix.com/images/meta/netflix-symbol-black.png"
                alt="Netflix"
              />
            </div>
            <div class="glass">
              <h3>
                Netflix Website
                <br />
                <span>Clone</span>
              </h3>
              <ul>
                <a
                  href="https://en.wikipedia.org/wiki/Mummy_(undead)"
                  target="_blank"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
              </ul>
            </div>
          </div>
          <div class="box" data-color="clr3">
            <div class="imgBox">
              <img
                src="https://play-lh.googleusercontent.com/pgnGg3xiB_-N7HqG6Ulio2A1qeWtTZLQ548OA9_o9Xu52dPpbUPjgzNqoJ1Bn_rUXlg"
                alt="Ali baba"
              />
            </div>
            <div class="glass">
              <h3>
                Ali baba website
                <br />
                <span>Clone</span>
              </h3>
              <ul>
                <a
                  href="https://en.wikipedia.org/wiki/Werewolf"
                  target="_blank"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project;
