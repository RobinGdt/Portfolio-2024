import styled from "styled-components";
import Button from "../Button/Button";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import project1 from "../../assets/project-1.jpeg";
import ProjectCard from "../ProjectCard/ProjectCard";
import puddle from "./puddle.svg";
import { Logo } from "../../utils/icon";

const StyledHome = styled.div`
  width: 100%;
  background-color: #f6f9fc;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8.4fr 4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Title = styled.div`
  width: 50%;
  display: flex;
  text-align: left;
`;

const Item = styled.div`
  border: 0.5px solid #d7e5f2;
  padding-left: 30px;
  padding-right: 30px;
  /* gap: 30px; */
  font-size: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;

  &.name-item {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;
  }

  &.setting-item {
    flex-direction: row;
  }

  &.puddle-item {
    background-image: url(${puddle});
  }

  &.zebra-item {
    background-image: url("https://img.freepik.com/premium-vector/zebra-print-background_125540-2347.jpg");
    background-size: cover;
    background-position: center;
  }

  &.new {
    grid-row: span 2;
  }
`;

const CustomItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 8.4fr 1fr;
  grid-template-rows: repeat(1fr, 4fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Home = () => {
  const projectData = [
    {
      title: "NOM DU PROJET",
      projet: "projet personnel",
      image: project1,
    },
    {
      title: "NOM DU PROJET",
      projet: "projet personnel",
      image: project1,
    },
    {
      title: "NOM DU PROJET",
      projet: "projet personnel",
      image: project1,
    },
  ];
  return (
    <StyledHome>
      <Grid>
        <Item></Item>
        <Item className={`item name-item`}>
          <Logo />
          <p>
            <strong>Robin Godart</strong>
          </p>
        </Item>
        <Item className={`item setting-item`}>
          <p>FR -- EN</p>
          <p>LIGHT</p>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <Title>
            <h1>
              DEVELOPPEUR <strong>FRONT - END</strong>
            </h1>
          </Title>
        </Item>
        <Item className={`item puddle-item`}></Item>
        <Item></Item>
        <Item></Item>
        <Item className={`item puddle-item`}></Item>
        <Item className={`item contact-item`}>
          <Subtitle text="CONTACT" />
          <Button title="Me contacter" />
        </Item>
        <Item></Item>
        <Item></Item>
        <Item>
          <Subtitle text="A PROPOS" />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet consectetur. Amet nisi tempor faucibus viverra viverra facilisi. Cursus risus consequat tincidunt nisi urna vestibulum.Amet nisi tempor faucibus viverra viverra facilisi."
            }
          />
          <Button title="En savoir plus" />
        </Item>
        <Item>
          <Subtitle text="SOCIAL" />
          <Button title="GitHub" />
          <Button title="Linkedin" />
        </Item>
        <Item>1</Item>
      </Grid>
      <CustomItem>
        <Item></Item>
        <Item>
          <Subtitle text="PROJETS" />
        </Item>
        <Item className={`item new`}>
          <Subtitle text="PROJETS" />
          {projectData.map((item, index) => (
            <ProjectCard
              background={item.image}
              title={item.title}
              projet={item.projet}
              key={index}
            />
          ))}
        </Item>
        <Item className={`item new`}>4</Item>
        <Item>1</Item>
        <Item>
          <div className="">
            <Subtitle text="PROJETS" />
            <Button title="M'envoyer un mail" />
            <Button title="M'appeler" />
          </div>
        </Item>
        <Item>1</Item>
        <Item className={`item name-item`}>
          <Logo />
          <p>
            <strong>Robin Godart</strong>
          </p>
        </Item>
        <Item>3</Item>
        <Item>4</Item>
      </CustomItem>
    </StyledHome>
  );
};

export default Home;
