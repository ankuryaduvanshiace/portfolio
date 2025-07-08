import employee from "../assets/employee.png";
import expense from "../assets/expense.png";
import cart from "../assets/cart.png";
import travel from "../assets/travel.png";
import flight from "../assets/flight.png";

const projects = [
    {
        id: 0,
        title: "Travel Application Flight Booking",
        description: "A flight booking application front end with airport search and flight search api integration.",
        link: "https://travel-booking-nextjs.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/travel_booking_nextjs",
        image: flight,
    },
    {
        id: 1,
        title: "Travel Application Landing Page",
        description: "A landing page for a travel application.",
        link: "http://www.exlporevoyagepackages.com/",
        codeLink: "",
        image: travel,
    },
    {
        id: 2,
        title: "Employees Management System",
        description: "A web app to manage list of employees where you can create, update, read and delete (CRUD) employees. There is also a search functionality to search employees by any details.",
        link: "https://employee-management-wine.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/employee-management",
        image: employee,
    },
    {
        id: 3,
        title: "Shopping Cart",
        description: "A shopping cart app to add items to a cart which gets updated automatically . Made use of redux toolkit, fetch api.",
        link: "https://shopping-cart-zeta-rouge.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/shopping-cart",
        image: cart,
    },
    {
        id: 4,
        title: "Expense Tracker",
        description: "An app to track expenses. User can add, delete expenses, alongwith functionality to search for the entries. This app made with contextApi.",
        link: "https://expense-tracker-ankur.vercel.app/",
        codeLink: "https://github.com/ankurThakur1/expense-tracker",
        image: expense,
    },
    
];


export default projects;