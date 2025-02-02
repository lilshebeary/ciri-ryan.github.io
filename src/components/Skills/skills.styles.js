import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding: 4rem 1rem;
  background: #f0f9ff;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const SkillsContent = styled.div`
  max-width: 1000px;
  margin: 2em auto;
  
`;

export const SkillsTitle = styled.h2`
  font-size: 2.2rem;
  color: #0b3142;
  padding-bottom: 0.3em;
  margin-bottom: 2em;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    /* margin-top: 40px; */
  }
  @media screen and (max-width: 900px) {
    font-size: 2rem;
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  justify-items: start;
 
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const SkillsItem = styled.li`
  font-size: 2rem;
  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1.3rem;
    padding-right: -1rem;
  }
`;
