import "../styles/Description.scss";

function Description() {
  //move to portfolio rather than this app
  return (
    <div className="description">
      <div className="description__container">
        <span className="description__container--1">
          <span>
            A simple todo list app that I have created to solidify and
            demonstrate my knowledge of many technologies that I have learnt.
          </span>

          <span>Technologies used in this project are as follows:</span>
        </span>
        <ul>
          <li>React</li>
          <li>Redux for state management</li>
          <li>MongoDB for the database (using mongoose to connect)</li>
          <li>Node/express for the backend API server</li>
          <li>Authorization using google</li>
          <li>Sass for the CSS</li>
        </ul>
        <span>
          All styling was done with vanilla CSS. All code for this project can
          be found on my github page.
        </span>
      </div>
    </div>
  );
}

export default Description;
