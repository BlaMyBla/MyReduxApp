import React from 'react';
import { connect } from 'react-redux';
import * as coureseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {

    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value}
        this.setState({course: course});
    }

    handleSubmit = event => {
        event.preventDefault();
        debugger;
        this.props.dispatch(coureseActions.createCourse(this.state.course));
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <h2>Courses</h2>
                <h3>Add Courses</h3>
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.course.title} 
                />
                <input type="submit" value="Save" />
                { this.props.courses.map(course => (
                     // React benötigt key, beim iterieren 
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>            
        );
        
    }
}

function mapStateToPsops (state) {
    debugger;
    return {
        courses: state.courses
    };
}

CoursesPage.PropTypes = {
    dispatch: PropTypes.func.isRequired
};
 

export default connect(mapStateToPsops)(CoursesPage);