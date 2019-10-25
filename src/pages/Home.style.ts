import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  color: white;
  max-width: 1000px;
  margin: 100px auto;
`;

export const Discipline = styled.span`
  padding: 5px 50px;
  display: block;
  font-size: 0.75em;
  font-weight: 300;
  font-family: 'roboto mono', monospace;
  border-bottom: 1px solid rgba(white, 0.334);
  padding-bottom: 50px;

  @media screen and (min-width: 720px) {
    font-size: 1em;
  }
`;

export const Stats = styled.div`
  border-top: 1px solid rgba(white, 0.334);
  border-bottom: 1px solid rgba(white, 0.334);
  padding: 50px 0;
  overflow: hidden;

  @media screen and (min-width: 720px) {
    display: flex;
    text-align: center;
  }

  .icon {
    margin: 0 auto 0;
    font-size: 2em;
    line-height: 1.3em;
    vertical-align: text-top;
  }
`;

export const Portfolio = styled.a`
  .stats {
    display: block;
    padding: 20px 50px;
    margin: 0 auto;

    em {
      font-style: italic;
      font-weight: 700;
    }

    span {
      @include tag;
      margin: 10px 15px 0 0;

      @media screen and (min-width: 720px) {
        margin: 10px 0 0 15px;
      }
    }

    border: 1px solid rgba(white, 0.5);
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    border-radius: 4px;
    margin: 0 50px 50px;
    padding: 30px 20px;
    transition: 100ms;
    background: rgba(white, 0);
    text-align: center;

    @media screen and (min-width: 720px) {
      display: inline-block;
      margin: 0 0 0 50px;
    }

    &:hover {
      transform: scale(1.02) translateY(-1px);
      border: 1px solid rgba(white, 0.8);
      background: rgba(white, 0.05);
    }

    display: none;
    @media screen and (min-width: 720px) {
      display: inline-block;
    }
  }
`;

export const Current = styled.div`
  display: block;
  padding: 20px 50px;
  margin: 0 auto;

  em {
    font-style: italic;
    font-weight: 700;
  }

  span {
    @include tag;
    margin: 10px 15px 0 0;

    @media screen and (min-width: 720px) {
      margin: 10px 0 0 15px;
    }
  }
`;

export const Resume = styled.a`
  display: block;
  padding: 20px 50px;
  margin: 0 auto;

  em {
    font-style: italic;
    font-weight: 700;
  }

  span {
    @include tag;
    margin: 10px 15px 0 0;

    @media screen and (min-width: 720px) {
      margin: 10px 0 0 15px;
    }
  }

  border: 1px solid rgba(white, 0.5);
  min-width: 150px;
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  border-radius: 4px;
  margin: 0 50px 50px;
  padding: 30px 20px;
  transition: 100ms;
  background: rgba(white, 0);
  text-align: center;

  @media screen and (min-width: 720px) {
    display: inline-block;
    margin: 0 0 0 50px;
  }

  &:hover {
    transform: scale(1.02) translateY(-1px);
    border: 1px solid rgba(white, 0.8);
    background: rgba(white, 0.05);
  }
`;

export const Icon = styled.div`
  margin: 0 auto 0;
  font-size: 2em;
  line-height: 1.3em;
  vertical-align: text-top;
`;
