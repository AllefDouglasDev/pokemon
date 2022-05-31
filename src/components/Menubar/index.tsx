import * as S from "./styles";
import UserProfile from "../../assets/images/user-profile.png";

function Menubar() {
  return (
    <S.Container>
      <S.Main>
        <S.Title>
          Olá, <strong>Ash Ketchum</strong>
        </S.Title>
        <S.Description>Bem Vindo! 😁</S.Description>
      </S.Main>

      <S.Profile>
        <S.ProfileBackgroundImage />
        <S.ProfileImage src={UserProfile} />
      </S.Profile>
    </S.Container>
  );
}

export default Menubar;
