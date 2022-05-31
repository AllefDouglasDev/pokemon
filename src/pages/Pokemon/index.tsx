import { useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
import { IoMdMale, IoMdFemale } from "react-icons/io";

import * as S from "./styles";
import theme from "../../styles/theme";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { readableColor } from "../../utils/color";

function isNumeric(arg: string | undefined) {
  return arg && /^-?\d+$/.test(arg);
}

export default function Pokemon() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, isLoading } = useFetchPokemon(Number(id) || 0);
  console.log(pokemon);
  const goBack = () => {
    navigate("/");
  };

  const getStat = useCallback(
    (key: string) => {
      if (!pokemon) return 0;
      return pokemon.stats.find((s) => s.stat.name === key)?.base_stat || 0;
    },
    [pokemon]
  );

  const totalStat = useMemo(() => {
    if (!pokemon) return 0;
    return pokemon.stats.reduce((acc, curr) => acc + curr.base_stat, 0);
  }, [pokemon]);

  useEffect(() => {
    if (!isNumeric(id)) {
      goBack();
    }
  }, []);

  const color = pokemon?.specieDetails.color.name || theme.colors.white;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Not found</div>;
  }

  return (
    <S.Wrapper>
      <S.ToolBar color={color}>
        <MdArrowBackIosNew
          size={24}
          color={readableColor(color)}
          onClick={goBack}
        />
        <AiOutlineHeart size={24} color={readableColor(color)} />
      </S.ToolBar>

      <S.Header color={color}>
        <S.Row justify="space-between">
          <S.Name color={color}>{pokemon?.name}</S.Name>
          <S.PokemonId color={color}>
            #{pokemon?.id?.toString().padStart(3, "0")}
          </S.PokemonId>
        </S.Row>

        <S.AbilityWrapper>
          {pokemon?.abilities.map(({ ability }) => (
            <S.Ability key={ability.url} color={color}>
              <span>{ability.name}</span>
            </S.Ability>
          ))}
        </S.AbilityWrapper>
      </S.Header>

      <S.Content color={color}>
        <S.PokemonImage
          src={pokemon?.sprites.other.dream_world.front_default}
        />

        <S.ContentTitle color={color}>Description</S.ContentTitle>
        <S.Description>
          {
            pokemon?.specieDetails.flavor_text_entries.find(
              (f) => f.language.name === "en"
            )?.flavor_text
          }
        </S.Description>

        <S.Metrics>
          <S.MetricWrapper>
            <S.MetricHeader>
              <FaWeight size={24} />
              <S.MetricValue>{pokemon.weight / 10} kg</S.MetricValue>
            </S.MetricHeader>

            <S.MetricName>Weight</S.MetricName>
          </S.MetricWrapper>

          <S.MetricWrapper>
            <S.MetricHeader>
              <S.RulerIcon size={24} />

              <S.MetricValue>{pokemon.height / 10} m</S.MetricValue>
            </S.MetricHeader>

            <S.MetricName>Height</S.MetricName>
          </S.MetricWrapper>

          <S.MetricWrapper>
            <S.MetricHeader>
              <S.MetricValue>{pokemon.moves[0]?.move.name}</S.MetricValue>
            </S.MetricHeader>

            <S.MetricName>Main Power</S.MetricName>
          </S.MetricWrapper>
        </S.Metrics>

        <S.Heading>Your characteristics</S.Heading>

        <S.CharacteristicGender>
          <S.CharacteristicTitle>Gender</S.CharacteristicTitle>

          <S.CharacteristicGenderPercentage>
            <IoMdMale size={18} color={theme.colors.purple} />
            <span>{pokemon.malePercentage || 0}%</span>
          </S.CharacteristicGenderPercentage>

          <S.CharacteristicGenderPercentage>
            <IoMdFemale size={18} color={theme.colors.pink} />
            <span>{pokemon.femalePercentage || 0}%</span>
          </S.CharacteristicGenderPercentage>
        </S.CharacteristicGender>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>Health</S.CharacteristicTitle>
          <S.CharacteristicValue>{getStat("hp")}</S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("hp")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>Attack</S.CharacteristicTitle>
          <S.CharacteristicValue>{getStat("attack")}</S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("attack")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>Defense</S.CharacteristicTitle>
          <S.CharacteristicValue>{getStat("defense")}</S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("defense")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>VI. Attack</S.CharacteristicTitle>
          <S.CharacteristicValue>
            {getStat("special-attack")}
          </S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("special-attack")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>VI. Defense</S.CharacteristicTitle>
          <S.CharacteristicValue>
            {getStat("special-defense")}
          </S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("special-defense")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>Speed</S.CharacteristicTitle>
          <S.CharacteristicValue>{getStat("speed")}</S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor
              filled={getStat("speed")}
            ></S.CharacteristicBarColor>
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.CharacteristicWrapper>
          <S.CharacteristicTitle>Total</S.CharacteristicTitle>
          <S.CharacteristicValue>{totalStat}</S.CharacteristicValue>
          <S.CharacteristicBar>
            <S.CharacteristicBarColor filled={(totalStat * 100) / 600} />
          </S.CharacteristicBar>
        </S.CharacteristicWrapper>

        <S.Heading>Strengths and weaknesses</S.Heading>

        <S.Description>
          Pokémon tipo grama são fortes contra pokémon do tipo Água, Terra,
          Pedra mas eles são fracos contra pokémon do tipo Fogo, Grama, Veneno,
          Voador, Inseto, Dragão. Pokémon tipo veneno são fortes contra pokémon
          do tipo Grama, Inseto, Fada mas eles são fracos contra pokémon do tipo
          Veneno, Terra, Pedra, Fantasma.
        </S.Description>
      </S.Content>
    </S.Wrapper>
  );
}
