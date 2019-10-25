import { gradients } from './Sky';
import { useReducer, useEffect, useRef } from 'react';
import { Styled, ClockStyled, Hour } from './Clock.style';

interface Props {}

interface State {
  dash?: string | number;
  hour: string | number;
  minute: string | number;
  offset: number;
  second: string | number;
  size: number;
}

type Action =
  | { type: 'SET_TIME'; payload: any }
  | { type: 'SET_OFFSET'; payload: {} };

const lZ = (i: number | string) =>
  (i < 10 ? (i = '0' + i) : i).toString();

const initialState = {
  dash: 0,
  offset: 0,
  size: 75,
  ...getTime(),
};

export function Clock({}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { size, hour, minute, second, offset } = state;

  useEffect(() => setTime(offset), []);
  useInterval(() => setTime(offset), 1000);

  function getDash() {
    const totalDiameter = size * 3.14;
    // @ts-ignore
    const diff = hour + minute / 60 + second / 600;
    const partialDiameter =
      Math.round(diff * (totalDiameter / 24) * 100) / 100;

    return `${partialDiameter} ${totalDiameter}`;
  }

  function nextHour(e: any) {
    const hours = new Date().getHours();
    const nextOffset = offset + 1;
    const nextHour =
      hours + offset >= 24 ? offset - 24 : offset + 1;

    dispatch({
      type: 'SET_OFFSET',
      payload: { hour: nextHour, offset: nextOffset },
    });
  }

  return (
    <Styled>
      <ClockStyled style={{ strokeDasharray: getDash() }}>
        <circle id="circle" r="37.5" cx="75" cy="75"></circle>
      </ClockStyled>

      <Hour onClick={nextHour}>{hour}</Hour>
    </Styled>
  );
}

function setTime(offset = 0) {
  const { hour, minute, second } = getTime(offset);
  document.body.style.background = `linear-gradient(${gradients[hour]})`;
}

function getTime(offset = 0) {
  const now = new Date();

  const hour = offset + now.getHours();
  const minute = lZ(now.getMinutes());
  const second = lZ(now.getSeconds());

  return { hour, minute, second };
}

function useInterval(callback: any, delay: any) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function reducer(
  state: State,
  { type, payload = null }: Action,
): State {
  switch (type) {
    case 'SET_TIME':
      return { ...state };
    case 'SET_OFFSET':
      return { ...state, ...payload };
  }
}
