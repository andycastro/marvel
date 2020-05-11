import React from "react";
import { InputCustom } from "./header.style";

const Header = (props) => {
  const { handleInputChange } = props;

  return (
    <>
      <form>
        <InputCustom
          debounceTimeout={700}
          type="text"
          placeholder="Busca"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Header;
