import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadData } from "../../actions/index";
import Header from "../../Components/Header/Header";

import {
  Container,
  Row,
  Column,
  Box,
  ContentBox,
  MediumTitle,
  ClearSpace,
  Buttons,
} from "../../styles/grid.style";

function Main({ loadData, characters }) {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleInputChange = (e) => {
    const searchBy = e.target.value || "";
    const lowerSearch = searchBy.toLowerCase();
    const resultSearch = characters.filter((element) => {
      const lowerElement = element.name.toLowerCase();
      return lowerElement.indexOf(lowerSearch) !== -1;
    });
    setSearchResult(resultSearch);
  };

  const list = searchResult.length !== 0 ? searchResult : characters;

  return (
    <>
      <Container>
        <Row>
          <Column mobile="12" tablet="12" desktop="6" padding={"40px 20px"}>
            <MediumTitle>Marvel Characters</MediumTitle>
          </Column>
          <Column mobile="12" tablet="12" desktop="6" padding={"40px 20px"}>
            <Header handleInputChange={handleInputChange} />
          </Column>
          <ClearSpace />
          {list.map((character) => {
            return (
              <Column mobile="12" tablet="4" desktop="3" key={character.id}>
                <Box padding={"0"} margin={"0"}>
                  <Box margin={"20px 15px 20px 0"}>
                    <ContentBox margin={"0"}>
                      <Box
                        padding={"0"}
                        margin={"0"}
                        alignItems={"center"}
                        flexDirection={"column"}
                      >
                        <img
                          width="100%"
                          height="200px"
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt={`${character.name}`}
                        />
                        {character.name}
                        <Buttons
                          width={"70%"}
                          bgColor={"#2bf0ad"}
                          hover={"#fff"}
                          onClick={() => {
                            window.location.href = `/details/${character.id}`;
                          }}
                        >
                          Details
                        </Buttons>
                      </Box>
                    </ContentBox>
                  </Box>
                </Box>
              </Column>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return { characters: state.characters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ loadData }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
