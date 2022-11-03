'use strict';

const SKILLS = {
  1: ['HTML 5', 'https://i.ibb.co/9rdbnd5/html.png'],
  2: ['CSS 3', 'https://i.ibb.co/bJGqvWP/css.png'],
  3: ['JavaScript', 'https://i.ibb.co/d7wN9vS/javascript.png'],
  4: ['TypeScript', 'https://i.ibb.co/Fqwcz1N/typescript.png'],
  5: ['Node JS', 'https://i.ibb.co/LzNB5mw/nodejs.png'],
  6: ['React JS', 'https://i.ibb.co/jDjVBxB/react.png'],
  7: ['Kotlin', 'https://i.ibb.co/nrV0PHx/kotlin.png'],
  8: ['SQL', 'https://i.ibb.co/4JfYFNw/sql.png'],
  9: ['PostgreSQL', 'https://i.ibb.co/x6S2Nbz/postgresql.png'],
  10: ['Docker', 'https://i.ibb.co/LvRTJfd/docker.webp'],
  11: ['GCP', 'https://i.ibb.co/CMwG7vH/gcp.png'],
  12: ['Git', 'https://i.ibb.co/8bwZfDy/git.png'],
};

function renderFooter() {
  document.getElementById(
    'footer__title-h3'
  ).innerHTML = `Made with &#128153; by Rafael Salazar\nCopyright &copy; ${new Date().getFullYear()}`;
}

function renderSkills() {
  var i = 0;
  let e = document.getElementsByClassName('skills_container');
  while (i <= e.length) {
    for (const item in SKILLS) {
      e[0].innerHTML += `<div class="skill_box">
        <div class="skill__title">
          <div class="skill_img">
            <img
              src=${SKILLS[item][1]}
              alt=${SKILLS[item][0]}
              class="skill__icon"
            />
          </div>
          <h3>${SKILLS[item][0]}</h3>
        </div>
      </div>`;
      i++;
    }
  }
}

window.onload = () => {
  renderFooter();

  renderSkills();
};
