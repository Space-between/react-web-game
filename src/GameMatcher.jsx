import React, { Component } from 'react'
import NumberBaseball from './Playlist/NumberBaseballFunction';
import RSP from './Playlist/RSPFunction';
import Lotto from './Playlist/LottoFunction';
import Gugudan from './Playlist/GuGuDan';
import Minesweeper from './Playlist/MineSearch';
import Ending from './Playlist/WordRelayFunction';
import Response from './Playlist/ResponseCheckFunction';
import Contact from './Contact/Contact';

class GameMatcher extends Component {
    render() {
        let urlSearchParmas = new URLSearchParams(this.props.location.search.slice(1));//라우트에서 받아오는 것이다. this.props안에 history객체가 있는데 this.props안에 있는 history객체는 내부적으로 브라우저에 있는 history객체를 사용하고 있다.
        console.log(urlSearchParmas.get('hello'));
        if (this.props.match.params.name === 'number-baseball') {
            return <NumberBaseball />
        } else if (this.props.match.params.name === 'rock-scissors-paper') {
            return <RSP />
        } else if (this.props.match.params.name === 'lotto-generator') {
            return <Lotto />
        } else if (this.props.match.params.name === 'gugudan') {
            return <Gugudan />
        } else if (this.props.match.params.name === 'Ending') {
            return <Ending />
        } else if (this.props.match.params.name === 'Minesweeper') {
            return <Minesweeper />
        } else if (this.props.match.params.name === 'Response') {
            return <Response />
        } else if (this.props.match.params.name === 'Contact') {
            return <Contact />
        }
        
        return (
            <div>
                주소록을 보시려면 주소록, 게임을 하시려면 게임을 선택해 주세요.
            </div>
        );
    }
}

export default GameMatcher;