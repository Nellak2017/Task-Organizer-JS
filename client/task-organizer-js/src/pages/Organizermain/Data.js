import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Templates',
    path: '/templates',
    icon: <CgIcons.CgTemplate />,
    cName: 'nav-text'
  },
  {
    title: 'Stats',
    path: '/stats',
    icon: <AiIcons.AiOutlineLineChart />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiOutlineSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Todo View',
    path: '/todo View',
    icon: <RiIcons.RiTodoLine/>,
    cName: 'nav-text'
  },
  {
    title: 'Threads',
    path: '/threads',
    icon: <RiIcons.RiStackLine />,
    cName: 'nav-text'
  },
  {
    title: 'Timelines',
    path: '/timelines',
    icon: <MdIcons.MdTimeline />,
    cName: 'nav-text'
  },
  {
    title: 'Calendars',
    path: '/calendars',
    icon: <AiIcons.AiOutlineCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Gantts',
    path: '/gantts',
    icon: <RiIcons.RiBarChartHorizontalFill />,
    cName: 'nav-text'
  },
  
];