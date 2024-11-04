import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './BoardList';
import Write from './Write';

import React, { Component } from 'react'

export default class App extends Component {
  state = { //초기화
    isModifyMode: false, //수정모드 여부 설정
    isComplete: true, //렌더 완료(목록 출력 완료)
    boardId : 0 //수정,삭제할 글 번호
  }

  handleModify = (checkList)=>{
    if(checkList.length === 0){
      alert('수정할 게시글을 선택하세요.');
    }else if(checkList.length > 1){
      alert('하나의 게시글만 선택하세요.')
    }

    this.setState({
      isModifyMode: checkList.length === 1 //1개면 true, 아니면 false
    })

    this.setState({
      boardId: checkList[0] || 0
    })
  }


  render() {
    return (
    <div className="container">
      <h1 className="my-3">React Board</h1>
      <BoardList handleModify={this.handleModify} />
      <hr />
      <Write 
      isModifyMode={this.state.isModifyMode} 
      boardId={this.state.boardId}
      />
    </div>
    )
  }
}


