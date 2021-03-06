import { useNavigate } from "react-router-dom";

import {
  CheckOutlinedIcon,
  HeartOutlinedIcon,
  SearchOutlineIcon,
} from "assets/svgs";
import IconButton from "components/IconButton";
import S from "components/Layout/Footer/Style";

function Footer() {
  const navigate = useNavigate();
  // TODO: move path to Constants
  return (
    <S.Container>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/search")}
          width="4rem"
          height="4rem"
          Icon={SearchOutlineIcon}
          label="search"
        />
      </S.LinkContainer>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/favorites")}
          width="4rem"
          height="4rem"
          Icon={HeartOutlinedIcon}
          label="favorites"
        />
      </S.LinkContainer>
      <S.LinkContainer>
        <IconButton
          onClick={() => navigate("/finished")}
          width="4rem"
          height="4rem"
          Icon={CheckOutlinedIcon}
          label="finished"
        />
      </S.LinkContainer>
    </S.Container>
  );
}

export default Footer;
