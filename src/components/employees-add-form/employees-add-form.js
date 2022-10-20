import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, salary} = this.state;
        const {onAdd} = this.props;
        
        if (name.length === 0 || salary.length === 0) {
            return;
        }

        onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary ($)?"
                        name="salary" 
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;