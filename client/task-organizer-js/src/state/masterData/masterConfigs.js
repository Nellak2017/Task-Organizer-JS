// This file should contain all the information that would tell HOW the components
// are to be rendered on the screen. 

import * as RiIcons from 'react-icons/ri';

export const MasterConfig =
{
    Globals: [],
    OrganizerMain: [
        {
            title: 'High Priority Tasks',
            icon: '',
            iconComponent: '',
            text: 'See All',
            link: 'TodoView',
            tableHeaders: '',
            data: '',
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
            component: "GridContent"
        }

    ],
    Templates: [],
    Stats: [],
    Settings: [],
    TodoView: [
        {
            title: 'All Tasks - sorted by Priority',
            icon: '',
            iconComponent: '',
            text: 'See All',
            link: 'TodoView',
            tableHeaders: '',
            data: '',
            component: "TableContent"
        },
    ],
    Threads: [],
    Timelines: [],
    Calendars: [],
    Gantts: [],
    PlanningAssistant: [],
    Trackers: []
};