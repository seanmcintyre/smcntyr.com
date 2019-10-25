import styled from 'styled-components';

interface Props {}

export function About({}) {
  return (
    <Fun>
      <ul
      // @slideFade
      >
        <h3>fun facts about Sean</h3>
        <li>
          <Emoji>🧘🏻‍</Emoji>
          <span>
            buddhist/athe<em>ish</em>, daily meditator
          </span>
        </li>
        <li>
          <Emoji>🌱</Emoji>
          <span>
            aspiring to veganism (with wavering success)
          </span>
        </li>
        <li>
          <Emoji>🐶</Emoji>
          <span>
            her BFF is a 17 year old Westie named Murphy
          </span>
        </li>
        <li>
          <Emoji>🖌</Emoji>
          <span>
            prefers to design <em>in & with</em> code instead of{' '}
            <em>for</em> code
          </span>
        </li>
        <li>
          <Emoji>🌸</Emoji>
          <span>
            student of Kado (aka. Ikebana, the art of flower
            arrangment)
          </span>
        </li>
      </ul>
    </Fun>
  );
}

const Fun = styled.div`
  margin-top: 50px;
  font-family: 'roboto mono', monospace;
  font-size: 0.75rem;
`;

const Emoji = styled.span`
  font-size: 1.75em;
  display: inline;
  vertical-align: middle;
  margin-right: 15px;
  transform: translateY(-49%);
  position: absolute;
  top: 50%;
  left: 0;

  @media screen and (min-width: 720px) {
    font-size: 2.5em;
  }
`;

// h3 {
//   font-weight: 800;
// }

// li {
//   display: block;
//   margin: 15px 0;
//   vertical-align: top;
//   line-height: 1.3em;
//   padding-left: 50px;
//   position: relative;

//   @media screen and (min-width: 720px) {
//     min-height: 2.5em;
//     line-height: 2.5em;
//   }
// }

// span {
//   //line-height: 1.3em;
//   display: block;
//   vertical-align: middle;
// }
