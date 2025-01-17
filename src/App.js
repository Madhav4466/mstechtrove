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
import ColorContrastCalculator from './views/workplace/apps/calculators/color-contrast';

function App() {
  const workplace = {
    apps: [
        {
            title: "Simple Calculator",
            imageURL: "https://img.freepik.com/free-vector/calculator-math-icon_24877-83245.jpg?t=st=1736938255~exp=1736941855~hmac=e0d42c9cdf5c34bab79864f80a15aa7d353d5db3260cfb9cac7d6d355ce09ee9&w=740",
            description: "",
            type: "calculators",
            component: <SimpleCalculator/>
        },
        {
            title: "Area Calculator",
            imageURL: "https://img.freepik.com/free-vector/architecture-tools-design_24877-49734.jpg?t=st=1736938312~exp=1736941912~hmac=8666d2229f47a7800c5de00331e0661f4da549f3757074e662f2c61ce79dd1f1&w=740",
            description: "",
            type: "calculators",
        },
        {
            title: "BMI Calculator",
            imageURL: "https://img.freepik.com/free-vector/flat-woman-diet-control-normal-weight-with-bmi-scale_88138-933.jpg?t=st=1736938427~exp=1736942027~hmac=1c792d049cc73f41c2301f82affa852c82402df43ee2360eba5af9489023cde6&w=1380",
            description: "",
            type: "calculators",
        },
        {
            title: "Age Calculator",
            imageURL: "https://img.freepik.com/free-vector/asian-man-different-ages_23-2147854491.jpg?t=st=1736938529~exp=1736942129~hmac=7d4f0561c864b73177099ac269e44cb5081f98e0995b7a0b941421de5d207331&w=740",
            description: "",
            type: "calculators",
            component: <AgeCalculator/>
        },
        {
            title: "Difference Calculator",
            imageURL: "https://img.freepik.com/free-vector/isometric-mathematics-concept-with-algebra-equations_23-2148181799.jpg?t=st=1736938652~exp=1736942252~hmac=0aeecbe5c1a947877c2c5ad4020e1f14ca7572c7eb14121f62af56b088f49d81&w=740",
            description: "",
            type: "calculators"
        },
        {
            title: "Result Percentage Calculator",
            imageURL: "https://img.freepik.com/premium-vector/man-using-calculator-calculation-mathematics-accountant-concept_112255-1083.jpg?w=1380",
            description: "",
            type: "calculators"
        },
        {
            title: "Percentage Calculator",
            imageURL: "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1736938853~exp=1736942453~hmac=879974424b7f2bd1f5d375334bca6fa4ba9fcae1179d71b6e792412463149d56&w=740",
            description: "",
            type: "calculators"
        },
        {
            title: "Color Contrast Checker",
            imageURL: "https://img.freepik.com/free-vector/graphic-design-color_24877-82129.jpg?t=st=1736938920~exp=1736942520~hmac=ef553d846a4a7910a968af63bd1311e4adf4085f18d5111f5fe07edfc1548fce&w=740",
            description: "",
            type: "calculators",
            component: <ColorContrastCalculator/>
        },
        {
            title: "Temprature Converter",
            imageURL: "https://img.freepik.com/free-vector/air-quality-monitor-abstract-concept-illustration_335657-1884.jpg?t=st=1736939078~exp=1736942678~hmac=a8267807ce29d8eb2ec22da136f4617b0c3fd61e7233f8cc0be3ca9bb9e84e0d&w=740",
            description: "",
            type: "converters"
        },
        {
            title: "Area Converter",
            imageURL: "https://img.freepik.com/free-vector/colorful-geometric-shapes-pattern_1308-174464.jpg?t=st=1736939164~exp=1736942764~hmac=b4449f721bb45e603de57356126d213f5d4ce3ad9ab6618c8e212750ca5d0042&w=740",
            description: "",
            type: "converters"
        },
        {
            title: "Length Converter",
            imageURL: "https://img.freepik.com/free-vector/measuring-tape-with-inch-metric-scales-set_1284-52118.jpg?t=st=1736939206~exp=1736942806~hmac=7891655035cc1a0bc3c626a8e2880bb3b294a379d094637fd6accbfb0cb4a9b7&w=740",
            description: "",
            type: "converters"
        },
        {
            title: "Currency Converter",
            imageURL: "https://img.freepik.com/free-vector/indian-rupee-composition-with-flat-design_23-2147992019.jpg?t=st=1736939299~exp=1736942899~hmac=7bb9838eda72f0f76dd9ec5b306bae5588a6794ce05ffe91c25821a43ea98df2&w=740",
            description: "",
            type: "converters"
        },            
        {
            title:"Data Converter",
            imageURL: "https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg?t=st=1736939423~exp=1736943023~hmac=a0dae5379d79c7cbc2ec33722e3b142e26639bf3e2764da2802bd1b7ad459dcb&w=740",
            description: "",
            type: "converters"
        },
        {
            title: "Time Converter",
            imageURL: "https://img.freepik.com/free-vector/flat-design-time-management-concept_23-2148813012.jpg?t=st=1736939462~exp=1736943062~hmac=c3d5716bfea9786a2af03956fcc40a9cfdce8a3134fa5c2a6c924b6633e47d2b&w=740",
            description: "",
            type: "converters"
        },
        {
            title: "Color Code Converter",
            imageURL: "https://img.freepik.com/free-vector/colors-swatches-palette-paint-samples-fan-interior-design-colours-spectrum-scale-graphics-designer-guide-isolated-clipart_335657-193.jpg?t=st=1736939031~exp=1736942631~hmac=ea93589509e55cb0cfc082a1149193cbeea782f2cb96589c04cc730733287175&w=740",
            description: "",
            type: "converters",
            component: <ColorConverter/>
        },
        {
            title: "Random Color Generator",
            imageURL: "https://img.freepik.com/free-vector/polygonal-abstract-logo_1025-75.jpg?t=st=1736939006~exp=1736942606~hmac=4c63429a7df8da1abab09092007118580a4c4f4f79ea668a4704e14ef0fce587&w=740",
            description: "",
            type: "generators",
            component: <RandomColorGenerator/>
        },
        {
            title: "Random Accessible Color Generator",
            imageURL: "https://img.freepik.com/free-vector/printing-industry-illustration_23-2148890131.jpg?t=st=1736938970~exp=1736942570~hmac=5ba2e053b3b9021cb9cccc0eec0cd21ed5f5cfa56b1daaf4d54a1142ea1a48d6&w=740",
            description: "",
            type: "generators",
            component: <AccessibleColorGenerator/>
        }

    ], 
    games: [
        {
            title: "Tic-Tac-Toe",
            imageURL: "https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?t=st=1736939549~exp=1736943149~hmac=dbfdd6c553a359cdd472cdbcf8df73d6250919767f62d1cbad23621307dd3b81&w=740",
            description: "",
            component: <TicTacToe/>
        },
        {
            title: "Roll Dice",
            imageURL: "https://img.freepik.com/free-vector/cartoon-style-dice_78370-2824.jpg?t=st=1736939610~exp=1736943210~hmac=f9c931bf35d9e8b24dbc49559aac64bca54d334b2742948245e2b7cd883b10bf&w=740",
            description: "",
        },
        {
            title: "Toss Coin",
            imageURL: "https://img.freepik.com/free-vector/business-man-with-coins-leaves_24877-54740.jpg?t=st=1736939741~exp=1736943341~hmac=750f4f12ff199e7602256c4444b58af0e91d98f648e1a05fffab36970bc1435e&w=740",
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
