export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Rony</p>
          <h1 className="hero--section--color">
            <span className="hero--section-tittle--color">Data Analyst</span>
            {""}
            {/* <br />
            Developer */}
          </h1>
          <p className="hero--section--description">
            Fresh Graduate in Information Systems with a strong foundation in SQL, Python, Java, and more.
            <br />Seeking collaborative opportunities in data analysis, business analysis, and AI-related projects. Open to expanding my professional
            network
          </p>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => window.open('https://www.linkedin.com/in/ronysamuelsinaga/', '_blank')}>
          Get in Touch
        </button>

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
