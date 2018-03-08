import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import TaskList from '../components/TaskList';

class MyProjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLayoutChange: layout => {
        return;
      }
    };
  }

  render() {
    const tasks = [
      'my task 1',
      'my task 2',
      'my task 3',
      'my task 4',
      'my task 5',
      'my task 6',
      "my Hanif's task"
    ]; // TODO: REPLACE THIS
    //TODO: Attach each task to a link to the taskview.
    return (
      <div>
        <h2> Projects & Tasks Marketplace </h2>
        <TaskList onLayoutChange={this.state.onLayoutChange} items={tasks} />
      </div>
    );
  }
}

export default MyProjectsView;
