import React from "react";
import edit2 from "./edit2.jpg";
// import edit2 from "./edit"

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
      currentTask: "",
      editId: null,
      editText: "",
    };
  }

  typing = (e) => {
    this.setState({ currentTask: e.target.value });
  };
  submitting = (e) => {
    e.preventDefault();
   if(this.state.currentTask===""){
    alert("please enter a task");
   }
   else{
    const newTask = {
    id: this.state.task.length + 1,
    text: this.state.currentTask,
  };
  this.setState({
    task: [...this.state.task, newTask],
    currentTask: "",
  });
}
    
  };
  resubmittion = (e) => {
    e.preventDefault();
    if(this.state.editText ===""){
      alert("please update task")
    }
   else{
    const updatedTask = this.state.task.map((newlist) => {
      if (newlist.id === this.state.editId) {
        return { ...newlist, text: this.state.editText };
      } else {
        return newlist;
      }
    });
    this.setState({
      task: updatedTask,
      editId: null,
      editText: "",
    });
   }
  };
  update = (e) => {
    this.setState({
      editText: e.target.value,
    });
  };
  editing = (id, val) => {
    this.setState({
      editId: id,
      editText: val,
    });
  };
  delete = (del) => {
    const res = this.state.task.filter((del1) => del1.id !== del);
    this.setState({
      task: res,
    });
  };

  render() {
    return (
      <div id="container">
         <h3 style={{color:'chocolate',marginLeft:'200px',fontStyle:'italic',padding:'10px'}}>Todo List</h3>
        <form id="form" onSubmit={this.submitting}>
          <input
            id="input"
            type="text"
            placeholder=""
            value={this.state.currentTask}
            onChange={this.typing}
          />
          &nbsp;
          <button id="btn"> Add</button>
        </form>
        <div id="listu">
          {this.state.task.map((work) => (
            <div id="list" key={work.id}>
              {this.state.editId === work.id ? (
                <form id="save1" onSubmit={this.resubmittion}>
                  <input
                    id="inputadd"
                    type="text"
                    value={this.state.editText}
                    onChange={this.update}
                  />
                  <button id="save">✔</button>
                </form>
              ) : (
                <div id="margin">
                  <div id="adding">
                    <span id="add1">{work.text}</span>
                    <button
                      id="btn1"
                      onClick={() => this.editing(work.id, work.text)}
                    >
                      <img style={{ height: "23px" }} src={edit2} alt="e" />
                    </button>
                    <button id="btn2" onClick={() => this.delete(work.id)}>
                      ❌
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Project;
