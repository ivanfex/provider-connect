import React from 'react';
import { connect } from  'react-redux';

export class Tasks extends React.Component {
    render(){
        const tasks = this.props.tasks.map((task, index) => <li key={index}>{task}</li>)
        return (
            <div>
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

export const AllTasks = connect(mapStateToProps)(Tasks);
