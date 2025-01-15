import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/pages';
import Workplace from './views/pages/workplace';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Apps from './views/pages/apps';
import SimpleCalculator from './views/workplace/apps/calculators/simple-calculators';
import TicTacToe from './views/workplace/games/tic-tac-toe/tic-tac-toe';
import Games from './views/pages/games';
import AgeCalculator from './views/workplace/apps/calculators/age-calculator';
import ColorConverter from './views/workplace/apps/converters/color-codes';
import RandomColorGenerator from './views/workplace/apps/generators/random-color';
import AccessibleColorGenerator from './views/workplace/apps/generators/accessible-color';

function App() {
  const workplace = {
    apps: [
        {
            title: "Simple Calculator",
            description: "",
            type: "calculators",
            component: <SimpleCalculator/>
        },
        {
            title: "Area Calculator",
            description: "",
            type: "calculators",
        },
        {
            title: "BMI Calculator",
            description: "",
            type: "calculators",
        },
        {
            title: "Age Calculator",
            description: "",
            type: "calculators",
            component: <AgeCalculator/>
        },
        {
            title: "Difference Calculator",
            description: "",
            type: "calculators"
        },
        {
            title: "Result Percentage Calculator",
            description: "",
            type: "calculators"
        },
        {
            title: "Percentage Calculator",
            description: "",
            type: "calculators"
        },
        {
            title: "Color Contrast Checker",
            description: "",
            type: "calculators"
        },
        {
            title: "Temprature Converter",
            description: "",
            type: "converters"
        },
        {
            title: "Area Converter",
            description: "",
            type: "converters"
        },
        {
            title: "Length Converter",
            description: "",
            type: "converters"
        },
        {
            title: "Currency Converter",
            description: "",
            type: "converters"
        },            
        {
            title:"Data Converter",
            description: "",
            type: "converters"
        },
        {
            title: "Time Converter",
            description: "",
            type: "converters"
        },
        {
            title: "Color Code Converter",
            description: "",
            type: "converters",
            component: <ColorConverter/>
        },
        {
            title: "Random Color Generator",
            description: "",
            type: "generators",
            component: <RandomColorGenerator/>
        },
        {
            title: "Random Accessible Color Generator",
            description: "",
            type: "generators",
            component: <AccessibleColorGenerator/>
        }

    ], 
    games: [
        {
            title: "Tic-Tac-Toe",
            description: "",
            component: <TicTacToe/>
        },
        {
            title: "Roll Dice",
            description: "",
        },
        {
            title: "Toss Coin",
            description: "",
        },
        {
            title: "Word Scramble",
            description: "",
        },
        {
            title: "Quiz",
            description: "",
        },
        {
            title: "Guess a Number",
            description: "",
        }
    ]
};
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/workplace",
      element: <Workplace workplace={workplace}/>,
    },
    {
      path: "/workplace/apps/:type",
      element: <Apps workplace={workplace}/>
    },
    {
        path: "/workplace/games/:type",
        element: <Games workplace={workplace}/>
    }
  ]);
  return (
    <div className="App d-flex flex-column min-vh-100">
        <RouterProvider router={router}></RouterProvider>
        <Outlet/>
    </div>
  );
}

export default App;
