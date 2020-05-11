import styled from "styled-components";

import { DebounceInput } from "react-debounce-input";

export const InputCustom = styled(DebounceInput)`
  padding: 10px 20px;
  outline: none;
  min-width: 240px;
  width: 97%;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  height: 40px;
  font-size: 1em;
`;
