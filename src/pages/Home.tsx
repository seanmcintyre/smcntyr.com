import React from 'react';
import { Head, Clock, Page, About } from '../components';
import {
  Main,
  Discipline,
  Stats,
  Resume,
  Icon,
  Portfolio,
  Current,
} from './Home.style';

export function Home({}) {
  return (
    <Page>
      <Head
        title="Sean McIntyre | Design Systems, Front End, Product
        Design"
      />

      <Clock />

      <Main>
        <h1>Sean McIntyre</h1>
        <Discipline>Product Designer, Engineer</Discipline>

        <About />

        <Stats>
          <Resume href="assets/resume.pdf" target="_blank">
            <Icon>👩🏻‍🎤</Icon>
            <em>download my resume</em>
          </Resume>

          <Portfolio
            href="mailto:hello@smcntyr.com"
            target="_blank"
          >
            <Icon>🎨</Icon>
            <em>contact for my portfolio</em>
          </Portfolio>

          <Current>
            <em>current tech interests</em>
            <br />
            <span>TypeScript</span>
            <span>GraphQL</span>
            <span>Angular 6</span>
            <span>React</span>
            <span>Web Animation</span>
            <span>SVG</span>
            <span>CSS Grid</span>
            <span>PostCSS</span>
            <span>RxJS</span>
            <span>Progressive Web Apps</span>
          </Current>
        </Stats>
      </Main>
    </Page>
  );
}
