import styled from "styled-components";

import type { ProjectListType } from "../../data/ProjectList";

import Button from "../../UI/Button/Button";
import Image from "../../UI/Image/Image";
import Tag from "../../UI/Tag/Tag";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 4px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0.5rem 0.5rem 0 0 #000;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 2.5em;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleWrapper = styled.div`
  position: absolute;
  left: 0;
  margin-left: 10px;
  display: flex;
  gap: 0.3em;
`;

const Circle = styled.div`
  width: 1.3em;
  height: 1.3em;
  border: 4px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1em;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 7% top;
  border-bottom: 4px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 300px;
  }
`;
const Description = styled.div`
  padding: 1em 1em 0.5em;

  & h2 {
    font-weight: 700;
    font-size: 1.8em;
  }

  & p {
    font-weight: 500;
  }
`;

const Tags = styled.div`
  padding: 0 1em 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface ProjectCardType {
  project: ProjectListType;
}

export default function ProjectCard({ project }: ProjectCardType) {
  const { slug, title, shortDescription, image, tags } = project;
  return (
    <Wrapper>
      <Header>
        <CircleWrapper>
          <Circle />
          <Circle />
        </CircleWrapper>
        <Title>{slug}.tsx</Title>
      </Header>
      <CardImage src={image} alt={title} />
      <Description>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </Description>
      <Tags>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Button>Learn more</Button>
    </Wrapper>
  );
}
