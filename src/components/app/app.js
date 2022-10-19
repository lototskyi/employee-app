import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        let itemId = 0;
        this.setState(({data}) => {
            data.forEach(item => {
                if (item.id > itemId) {
                    itemId = item.id
                }
            });

            return {
                data: [...data, {name: name, salary: salary, increase: false, rise: false, id: itemId + 1}]
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                } 
                return item;
            })
        }));
    }

    render() {

        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                    <EmployeesList 
                        data={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>
                    <EmployeesAddForm onAdd={this.addItem}/>
                </div>
            </div>
        );
    }
}

export default App;