// This file contains all of the tasks, and any other data that will be used to derive
// Other data to be displayed in the UI.
// The Configuration tells HOW it will be displayed in the UI.
// This tells WHAT will be displayed in the UI. 


// This is the Master list of all the task's data
// All views will derive from this list.
export const masterData = [
    {
        'task': 'Github (20 contribs)',
        'due': new moment('16:30, 8Aug2021', 'HH:mm, DMMMYYYY'),
        'priority': 'High',
        'status': 'Processing',
        'weight': '100',
        'order': '1',
        'periodicity': '100day',
        'time_to_complete': '5 hours',
        'creation_date': 'today',
        'last_completion_date': 'yesterday',
        'parent_thread': 'Experience',
        'pipelinable': 'No',
        'number_of_dependencies': '0',
        'id': '0',
        'completed': false
    },
    {
        'task': 'Relax',
        'due': new moment('10:30, 9Aug2021', 'HH:mm, DMMMYYYY'),
        'priority': 'Low',
        'status': 'Open',
        'weight': '50',
        'order': '2',
        'periodicity': '100day',
        'time_to_complete': '2 hours',
        'creation_date': 'today',
        'last_completion_date': 'never',
        'parent_thread': 'Domestic',
        'pipelinable': 'No',
        'number_of_dependencies': '1',
        'id': '1',
        'completed': false
    }
];