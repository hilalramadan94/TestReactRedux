import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Container>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">
              Test React Redux <FontAwesomeIcon icon={faAngry} />
            </h2>
            <p className="lead">
              This application made for test purpose only. Using React and
              Redux.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
