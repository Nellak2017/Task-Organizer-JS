// This file should contain all the information that would tell HOW the components
// are to be rendered on the screen. 

import * as RiIcons from 'react-icons/ri';

export const masterConfigs =
{
    Globals: [
        {
            delete_mode: false,
            current_page: 0
        }
    ]
    ,
    OrganizerMain: [
        {
            title: 'High Priority Tasks',
            icon: '',
            iconComponent: '',
            text: 'See All',
            link: 'TodoView',
            tableHeaders: ['task','due','priority','status','periodicity'],
            data: '',
            name: "TableContent",
            component: "TableContent"
        },

        {
            title: 'Thread Summary',
            icon: <RiIcons.RiTodoLine className="icon" />,
            iconComponent: '',
            text: '',
            link: '',
            tableHeaders: '',
            data: '',
            name: "GridContent",
            component: "GridContent"
        }

    ],
    Templates: [],
    Stats: [],
    Settings: [],
    TodoView: [
        {
            title: 'All Tasks',
            icon: '',
            iconComponent: '',
            text: 'See All',
            link: 'TodoView',
            tableHeaders: ["task", "due", "priority", "status", "weight", "order", "periodicity", "time_to_complete", "creation_date", "last_completion_date", "parent_thread", "pipelinable", "number_of_dependencies", "id", "completed"],
            data: '',
            name: "TableContent",
            component: "TableContent"
        },
    ],
    Threads: [
        {
            title: '',
            icon: '',
            iconComponent: '',
            text: '',
            link: '',
            tableHeaders: ["task","status"],
            data: '',
            name: "ThreadViewLarge",
            component: "TableContent"
        }
    ],
    Timelines: [],
    Calendars: [],
    Gantts: [],
    PlanningAssistant: [],
    Trackers: []
};