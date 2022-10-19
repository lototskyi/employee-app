import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employees accounting in company N</h1>
            <h2>General amount of employees: {employees}</h2>
            <h2>Bonuses will get: {increased}</h2>
        </div>
    );
}

export default AppInfo;