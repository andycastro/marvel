import React from "react";

const Header = (props) => {
  const { handleInputChange } = props;

  return (
    <>
      <form>
        <input type="text" placeholder="Busca" onChange={handleInputChange} />
      </form>
    </>
  );
};

export default Header;
