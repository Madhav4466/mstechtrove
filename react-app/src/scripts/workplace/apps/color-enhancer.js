import ColorContrastChecker from "./ccc";
import ColorCodeConverter from "./color-code-converter";

export default class ColorContrastEnhancer {
    static getRGBConvertedValues = (fgColor, bgColor) => {
        let rgbBG = ColorCodeConverter.convertHexToRgb(bgColor).replace("rgb(", "").replace(")", "").split(",");
        let rgbFG = ColorCodeConverter.convertHexToRgb(fgColor).replace("rgb(", "").replace(")", "").split(",");
        return {rgbFG, rgbBG};
    }

    static generateColorSuggestions = (fgColor, bgColor, conversionFor, numSuggestions = 50) => {
        const suggestions = [];
        const maxAdjustments = 1000;
        let contrastThreshold = 4.5;

        if (conversionFor === "largerText-min" || conversionFor === "non-text") {
            contrastThreshold = 3.0;
        }
        else if(conversionFor === "largerTextEnhanced" || conversionFor === "regularText-min"){
            contrastThreshold = 4.5;
        }
        else if (conversionFor === "regularText-enhanced") contrastThreshold = 7.1;
    
        let brightnessAdjustmentLight = 1.2; // Lighter direction
        let brightnessAdjustmentDark = 0.8;  // Darker direction
    
        const addColorIfValid = (adjustedColor) => {
            let { rgbFG, rgbBG } = this.getRGBConvertedValues(adjustedColor, bgColor);
            let contrastRatio = ColorContrastChecker.getContrastRatio(rgbFG, rgbBG);
            
            if (contrastRatio >= contrastThreshold && !suggestions.includes(adjustedColor)) {
                suggestions.push(adjustedColor);
            }
        };
    
        // Loop to find a range of distinct colors that meet the contrast ratio
        let adjustedColorLight = this.adjustColorBrightness(fgColor, brightnessAdjustmentLight);
        let adjustedColorDark = this.adjustColorBrightness(fgColor, brightnessAdjustmentDark);
    
        for (let i=0; i <= numSuggestions; i++) {
            let adjustmentAttemptsLight = 0;
            let adjustmentAttemptsDark = 0;
    
            // Lighten the color and add it to the suggestions if it meets the contrast ratio
            while (adjustmentAttemptsLight < maxAdjustments) {
                addColorIfValid(adjustedColorLight);
                brightnessAdjustmentLight += 0.05; // Lighten the color a bit
                adjustedColorLight = this.adjustColorBrightness(fgColor, brightnessAdjustmentLight);
                adjustmentAttemptsLight++;
    
                // Stop if we have enough suggestions
                if (suggestions.length >= numSuggestions) {
                    return suggestions;
                }
            }
    
            // Darken the color and add it to the suggestions if it meets the contrast ratio
            while (adjustmentAttemptsDark < maxAdjustments) {
                addColorIfValid(adjustedColorDark);
                brightnessAdjustmentDark -= 0.05; // Darken the color a bit
                adjustedColorDark = this.adjustColorBrightness(fgColor, brightnessAdjustmentDark);
                adjustmentAttemptsDark++;
    
                // Stop if we have enough suggestions
                if (suggestions.length >= numSuggestions) {
                    return suggestions;
                }
            }
        }
    
        // Final step: Set the color palette with the suggestions
        //setColorPallete(suggestions);
        return suggestions;
    };
    
    static getContrastRatio = (fgColor, bgColor) => {
        let fgRGB = ColorCodeConverter.convertHexToRgb(fgColor);
        let bgRGB = ColorCodeConverter.convertHexToRgb(bgColor);
        const contrastRatio = ColorContrastChecker.getContrastRatio(fgRGB.replace("rgb(", "").replace(")", "").split(","), bgRGB.replace("rgb(", "").replace(")", "").split(","));
        return contrastRatio;
    }

    static adjustColorBrightness = (hex, factor) => {
        // Step 1: Convert hex to RGB
        let hexToRGB = ColorCodeConverter.convertHexToRgb(hex)
        let [r,g,b] = hexToRGB.replace("rgb(", "").replace(")", "").split(',');
    
        // Step 2: Scale RGB values by the factor
        r = Math.min(255, Math.max(0, r * factor));
        g = Math.min(255, Math.max(0, g * factor));
        b = Math.min(255, Math.max(0, b * factor));
    
        // Step 3: Convert RGB back to hex
        const rgbValue = `rgb(${r}, ${g}, ${b})`;
        //const hexValue = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
        const hexValue = ColorCodeConverter.convertRGBToHex(rgbValue);
        return hexValue;
    };
}