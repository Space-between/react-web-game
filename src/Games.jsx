import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import GameMatcher from './GameMatcher';

const Games = () => {
  return (
      <HashRouter>
        <div>
          <Link to="/game/number-baseball">숫자야구</Link>
          &nbsp;
          <Link to="/game/rock-scissors-paper">가위바위보</Link>
          &nbsp;
          <Link to="/game/lotto-generator">로또생성기</Link>
          &nbsp;
          <Link to="/game/gugudan">구구단</Link>
          &nbsp;
          <Link to="/game/Ending">끝말잇기</Link>
          &nbsp;
          <Link to="/game/Minesweeper">지뢰찾기</Link>
          &nbsp;
          <Link to="/game/Response">반응속도</Link>
          &nbsp;
          <Link to="/game/index">게임 매쳐</Link>{/* /game/index두개단어이기만 하면 된다. /game/뒤에는 아무 단어나 넣으면 된다. */}
        </div>
        <div>
          <Route path="/game/:name" component={GameMatcher} /> {/* 라우트들이 너무 늘어나면 문제가 되기 때문에 효율적으로 라우트 갯수를 관리할 수 있는 동적 라우트 매칭 */}
          {/* 주소를 /game/:name 이런식으로 적는데 실제의 주소가 /game/:name 이건 아니고 /game/뒤에 :name이 있는데 얘네들을 파라미터라고 부른다. 줄여서 params라고 부른다. 이부분이 동적으로 바뀐다. :name이 될 수도 있고 :rock-scissors-paper가 될수 도 있고 :lotto-generator가 될수 도 있는 것이다.  */}
        </div>
      </HashRouter>
  );
};

export default Games;
