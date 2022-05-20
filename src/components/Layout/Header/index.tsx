import { useNavigate } from "react-router-dom";

import {
  BookSolidIcon,
  CheckOutlinedIcon,
  HeartOutlinedIcon,
  SearchOutlineIcon,
} from "assets/svgs";
import IconButton from "components/IconButton";
import S from "components/Layout/Header/Style";

function Header() {
  const navigate = useNavigate();

  const handleSearchIconButtonClick = () => {
    navigate("/search");
  };

  const handleHeartIconButtonClick = () => {
    navigate("/favorites");
  };

  const handleCheckIconButtonClick = () => {
    navigate("/finished");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.LogoBox>
        <IconButton
          onClick={handleLogoClick}
          color="lightgray"
          width="5rem"
          Icon={BookSolidIcon}
        />
      </S.LogoBox>
      <S.ToolBox>
        <IconButton
          onClick={handleSearchIconButtonClick}
          width="3rem"
          Icon={SearchOutlineIcon}
        />
        <IconButton
          onClick={handleHeartIconButtonClick}
          width="3rem"
          Icon={HeartOutlinedIcon}
        />
        <IconButton
          onClick={handleCheckIconButtonClick}
          width="3rem"
          Icon={CheckOutlinedIcon}
        />
      </S.ToolBox>
    </S.Container>
  );
}

export default Header;
