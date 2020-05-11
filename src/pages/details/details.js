import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadDataDetails } from "../../actions/index";
import {
  Container,
  Row,
  Column,
  Box,
  MediumTitle,
  P,
  ClearSpace,
} from "../../styles/grid.style";

function Details({ loadDataDetails, charactersDetails }) {
  const currentUrl = window.location.pathname;
  const id = currentUrl.split("details/")[1];

  useEffect(() => {
    loadDataDetails(id);
  }, [id, loadDataDetails]);

  return (
    <>
      <Container>
        <Row>
          <Column mobile="12" tablet="12" desktop="12" padding={"40px 20px"}>
            <MediumTitle>Marvel Characters</MediumTitle>
          </Column>
          <Column mobile="12" tablet="12" desktop="12" padding={"0 20px"}>
            <h1>Details </h1>
            <MediumTitle fontSize={"1.5em"} margin={"0 0 20px 0"}>
              {charactersDetails.length !== 0 && charactersDetails[0].name}
            </MediumTitle>
            <Column mobile="12" tablet="4" desktop="4" padding={"0 20px"}>
              <img
                width="300px"
                src={`${
                  charactersDetails.length !== 0 &&
                  charactersDetails[0].thumbnail.path
                }.${
                  charactersDetails.length !== 0 &&
                  charactersDetails[0].thumbnail.extension
                }`}
                alt={`${
                  charactersDetails.length !== 0 && charactersDetails[0].name
                }`}
              />
            </Column>
            <Column mobile="12" tablet="8" desktop="8" padding={"0 20px"}>
              <Box margin={"0 0 20px 0"}>
                <P>
                  {charactersDetails.length !== 0 &&
                    charactersDetails[0].description}
                </P>
              </Box>
              <MediumTitle>Series</MediumTitle>
              <ClearSpace />
              <Box margin={"10px 0 0 0"}>
                <ul>
                  {charactersDetails.length !== 0 &&
                    charactersDetails[0].series.items.map((seriesDetails) => {
                      return (
                        <li key={seriesDetails.resourceURI}>
                          {seriesDetails.name}
                        </li>
                      );
                    })}
                </ul>
              </Box>
            </Column>
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
