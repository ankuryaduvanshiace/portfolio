import employee from "../assets/employee.png";
import expense from "../assets/expense.png";
import cart from "../assets/cart.png";
import travel from "../assets/travel.png";

const projects = [
    {
        id: 0,
        title: "Travel Application",
        description: "A web app to manage list of employees where you can create, update, read and delete (CRUD) employees. There is also a search functionality to search employees by any details.",
        link: "http://www.exlporevoyagepackages.com/",
        codeLink: "",
        image: travel,
    },
    {
        id: 1,
        title: "Employees Management System",
        description: "A web app to manage list of employees where you can create, update, read and delete (CRUD) employees. There is also a search functionality to search employees by any details.",
        link: "https://employee-management-wine.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/employee-management",
        image: employee,
    },
    {
        id: 2,
        title: "Shopping Cart",
        description: "A shopping cart app to add items to a cart which gets updated automatically . Made use of redux toolkit, fetch api.",
        link: "https://shopping-cart-zeta-rouge.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/shopping-cart",
        image: cart,
    },
    {
        id: 3,
        title: "Expense Tracker",
        description: "An app to track expenses. User can add, delete expenses, alongwith functionality to search for the entries. This app made with contextApi.",
        link: "https://expense-tracker-ankur.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/expense-tracker",
        image: expense,
    },
    
];


export default projects;