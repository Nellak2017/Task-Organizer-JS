import { SideNav, TodoViewSubNav, InfoSummary } from "../../components";
import { InfoSummaryData, TableHeaderData } from "../../pages/TodoView/Data";

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