import styled from "styled-components";

export const Container = styled.div`
  max-width: 1360px;
  padding: ${(props) => (props.padding ? props.padding : "0 15px")};
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

function getWidthGrid(value) {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%`;
}

export const Column = styled.div`
  float: left;
  min-height: 1px;
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : "0.25rem")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "none")};
  height: ${(props) => (props.height ? props.height : "auto")};

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }
  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }
  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;

export const Box = styled.span`
  padding: ${(props) => (props.padding ? props.padding : "0 15px")};
  margin: ${(props) => (props.margin ? props.margin : "0 15px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "none")};
  display: flex;
  transition: background-color 0.5s;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "none"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
  &:hover {
    background-color: ${(props) => (props.hover ? props.hover : "")};
    transition: background-color 0.5s;
  }
  box-sizing: border-box;
`;

export const ContentBox = styled.div`
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "10px 0 0 0")};
`;

export const P = styled.p`
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "none")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  opacity: ${(props) => (props.opacity ? props.opacity : "")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Pline = styled.p`
  color: ${(props) => (props.color ? props.color : "")};
  &::before,
  &::after {
    content: " ";
    height: 10px;
    padding: ${(props) => (props.padding ? props.padding : "0 40px")};
    margin: 12px 8px;
    text-decoration: line-through;
    border-top: solid 1px #f9f9f9;
    float: left;
  }
  &::after {
    float: right;
  }
  span {
    text-transform: uppercase;
  }
`;

export const MediumTitle = styled.h2`
  color: ${(props) => (props.color ? props.color : "#f9f9f9")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.7em")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  span {
    font-size: 0.5em;
  }
`;

export const WarningText = styled.span`
  color: ${(props) => (props.color ? props.color : "#c2ccc7")};
  font-weight: 100;
  font-style: italic;
  font-size: 0.8em;
`;

export const ClearSpace = styled.div`
  width: 100%;
  overflow: hidden;
  height: 1px;
`;

export const Buttons = styled.button`
  width: ${(props) => (props.width ? props.width : "30px")};
  height: ${(props) => (props.height ? props.height : "34px")};
  margin: ${(props) => (props.margin ? props.margin : "20px auto")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "none")};
  transition: background-color 0.5s;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 0.8em;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => (props.hover ? props.hover : "")};
    transition: background-color 0.5s;
  }
`;
