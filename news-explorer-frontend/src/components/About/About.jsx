import "./About.css";
import author from "../../assets/author.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={author} alt="Author" className="about__image" />

        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hello, my name is Lindsey Harris. I'm a software engineer with a
            passion for building scalable interactive web applications.
          </p>

          <p className="about__text">
            I attended Tripleten's Full Stack Developer program, where I learned
            about various development technologies. Some of the languages and
            frameworks I worked with include: JavaScript, React, Node.js, and
            Express and Google Cloud Platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
