import styled from "styled-components";

import ArrowIcon from "../../assets/arrow.svg";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import UpworkIcon from "../../assets/upwork.svg";
import Button from "../../UI/Button/Button";
import Image from "../../UI/Image/Image";

const LINKS = [
  {
    label: "Github",
    url: "https://github.com/aiveeKeiSoriano",
    icon: GithubIcon,
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/aiveekei/",
    icon: LinkedinIcon,
  },
  {
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/~01ea444485a837d689",
    icon: UpworkIcon,
  },
];

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -33px;
  width: 100%;
  flex-wrap: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  width: 250px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet2}) {
    width: 100%;
  }
`;

const LinkButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2em;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em 1.5em;

  & * {
    transition: all 0.5s ease;
  }

  &:hover {
    background: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  &:hover img {
    filter: invert(1);
  }
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Links() {
  return (
    <Wrapper>
      {LINKS.map((link) => (
        <Link href={link.url} key={link.label} target="_blank">
          <LinkButton icon={ArrowIcon} iconPosition="right" label={link.label}>
            <ButtonLabel>
              <Image
                alt={link.label}
                height="24px"
                src={link.icon}
                width="24px"
              />
              {link.label}
            </ButtonLabel>
          </LinkButton>
        </Link>
      ))}
    </Wrapper>
  );
}
