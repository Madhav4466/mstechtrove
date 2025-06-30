import ColorContrastChecker from "./ccc";
import ColorGenerator from "./color-generator";

// export default class ColorPalleteGenerator {
//     static generatePalleteForColor(color) {
//         let colorPallete = [];
//         let attempts = 0;
        
//         while(true) {
//             const newColor = ColorGenerator.generateRandomColor();

//             const isColorCompliant = ColorContrastChecker.isColorCompliant(newColor, color);

//             if (isColorCompliant) {
//                 colorPallete.push(newColor);
//             }

//             attempts++;
//             if (attempts > 10000) {  
//                 console.warn("Exceeded maximum attempts for generating compliant colors.");
//                 break;
//             }

//             if (attempts > 5000 && colorPallete.length > 0) {
//                 break;  // No more valid colors to find
//             }
//         }
//         // for(let r = 0; r <= 255; r++){
//         //     for(let g = 0; g <= 255; g++) {
//         //         for(let b = 0; b <= 255; b++) {
//         //             const newColor = ColorGenerator.generateRandomColor();
//         //             const isColorCompliant = ColorContrastChecker.isColorCompliant(newColor, color);
//         //             if(isColorCompliant) {
//         //                 colorPallete.push(newColor);
//         //             }
//         //             if (colorPallete.length >= 50) {
//         //                 return colorPallete;
//         //             }
//         //         }
//         //     }
//         // }
//         return colorPallete;
//     }
// }

export default class ColorPalleteGenerator {
    static generatePalleteForColor(color) {
        let colorPallete = new Set();
        let randomColors = new Set();
        let possibleAttempts = (256 * 256 * 256);
        let attempts = 0;

        while(true) {
            const newColor = ColorGenerator.generateRandomColor();
            const isColorCompliant = ColorContrastChecker.isColorCompliant(newColor, color);
            if (isColorCompliant && !colorPallete.has(newColor)) {
                colorPallete.add(newColor);
            }

            attempts++;
            if (attempts > 5000) {  
                console.warn("Exceeded maximum attempts for generating compliant colors.");
                break;
            }

            if (attempts > 5000 && colorPallete.length > 0) {
                break;
            }
        }
        return colorPallete;
    }
}