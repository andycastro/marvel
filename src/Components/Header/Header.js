import React from "react";
import { DebounceInput } from "react-debounce-input";

const Header = (props) => {
  const { handleInputChange } = props;

  return (
    <>
      <form>
        <DebounceInput
          debounceTimeout={300}
          type="text"
          placeholder="Busca"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Header;
