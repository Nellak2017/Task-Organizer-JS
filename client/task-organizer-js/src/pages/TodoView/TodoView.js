import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";

// TODO: Add Context so that TodoView can talk to InfoSummaryData
const TodoView = () => {
    return (
        <>

            <SideNav />
            <TodoViewSubNav />
            {InfoSummaryData.map((value,key) => {
            return (
                <InfoSummary key={key} MyComponent={value.component} Data={[value]} TableHeaders={[TableHeaderData]}/>
            );
        })
        }
        </>
    );
}

export default TodoView;