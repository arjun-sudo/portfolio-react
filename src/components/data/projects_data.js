
import typing from "../../assets/projects_images/typing.png"
import employee from "../../assets/projects_images/employee.png"
import atm from "../../assets/projects_images/atm.jpg"
import kanban from "../../assets/projects_images/kanban.jpg"
import todo from "../../assets/projects_images/todo.png"
import contact from "../../assets/projects_images/contact.png"


const data_projects = [
    {
        name: 'Personal Kanban Tool',
        image: kanban,
        deployed_url: 'https://github.com/arjun-sudo/Personal-Project-Management-Tool',
        github_url: 'https://github.com/arjun-sudo/Personal-Project-Management-Tool',
        category: ['spring', 'react.js']
    },
    {
        name: 'Laser Typing Test',
        image: typing,
        deployed_url: 'https://lasertyping.netlify.app/',
        github_url: 'https://github.com/arjun-sudo/TypingTest',
        category: ['react.js']
    },
    {
        name: 'Employee Management System',
        image: employee,
        deployed_url: 'https://github.com/arjun-sudo/EmployeManagementSystem',
        github_url: 'https://github.com/arjun-sudo/EmployeManagementSystem',
        category: ['spring', 'react.js']
    },

    {
        name: 'Contact Management',
        image: contact,
        deployed_url: 'https://github.com/arjun-sudo/crm',
        github_url: 'https://github.com/arjun-sudo/crm',
        category: ['spring','react.js']
    },
    {
        name: 'Smart ATM Management System',
        image: atm,
        deployed_url: 'https://github.com/arjun-sudo/ATMWEB',
        github_url: 'https://github.com/arjun-sudo/ATMWEB',
        category: ['java']
    },


    {
        name: 'To do app',
        image: todo,
        deployed_url: 'https://lasertodo.netlify.app/',
        github_url: 'https://github.com/arjun-sudo/todo-app',
        category: ['react.js']
    },



]

export default data_projects;
