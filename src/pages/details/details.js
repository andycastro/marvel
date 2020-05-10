import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadDataDetails, postDataCharacters } from "../../actions/index";
import { Container, Row, Column, MediumTitle } from "../../styles/grid.style";

function Details({ loadDataDetails, charactersDetails, ...props }) {
  useEffect(() => {
    loadDataDetails();
  }, [loadDataDetails]);
  const handleName = () => {
    props.dispatch(
      postDataCharacters({
        name: "osoa",
      })
    );
  };
  return (
    <>
      <Container>
        <Row>
          <Column mobile="12" tablet="12" desktop="12" padding={"40px 20px"}>
            <MediumTitle>Marvel Characters</MediumTitle>
          </Column>
          <Column mobile="12" tablet="12" desktop="12" padding={"0 20px"}>
            <h1>Details </h1>
            <button onClick={handleName}>Muda</button>
            {charactersDetails.length !== 0 && charactersDetails[0].name}
          </Column>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return { charactersDetails: state.charactersDetails };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ loadDataDetails }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
