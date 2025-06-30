import ColorUtils from "./color-utils";

export default class ColorContrastEnhancer {
    static getRGBConvertedValues = (fgColor, bgColor) => {
        let rgbBG = ColorUtils.convertHexToRgb(bgColor).replace("rgb(", "").replace(")", "").split(",");
        let rgbFG = ColorUtils.convertHexToRgb(fgColor).replace("rgb(", "").replace(")", "").split(",");
        return {rgbFG, rgbBG};
    }

    static generateColorSuggestions = (fgColor, bgColor, conversionFor, numSuggestions = 50) => {
        const suggestions = {
            foreground: new Set(),
            background: new Set(),
        };
    
        const maxAdjustments = 1000;
        let contrastThreshold = 4.5;
    
        if (conversionFor === "largeText-min" || conversionFor === "non-text-contrast") {
            contrastThreshold = 3.0;
        } else if (conversionFor === "largeText-enh" || conversionFor === "regularText-min") {
            contrastThreshold = 4.5;
        } else if (conversionFor === "regularText-enh") {
            contrastThreshold = 7.1;
        }
    
        const isContrastValid = (color1, color2, contrastThreshold) => {
            let { rgbFG, rgbBG } = this.getRGBConvertedValues(color1, color2);
            let contrastRatio = ColorUtils.getContrastRatio(rgbFG, rgbBG);
            return contrastRatio >= contrastThreshold;
        };

        const addColorIfValid = (colorToEnhance, referenceColor, contrastThreshold, isForeground = true) => {
            let brightnessAdjustmentLight = 1.2;
            let brightnessAdjustmentDark = 0.8;
    
            let adjustedColorLight = this.adjustColorBrightness(colorToEnhance, brightnessAdjustmentLight);
            let adjustedColorDark = this.adjustColorBrightness(colorToEnhance, brightnessAdjustmentDark);
    
            let adjustmentAttemptsLight = 0;
            let adjustmentAttemptsDark = 0;
    
            for (let i = 0; i <= numSuggestions; i++) {
                while (adjustmentAttemptsLight < maxAdjustments) {
                    if (isContrastValid(adjustedColorLight, referenceColor, contrastThreshold)) {
                        if (isForeground) {
                            suggestions.foreground.add(adjustedColorLight);
                        } else {
                            suggestions.background.add(adjustedColorLight);
                        }
                    }
                    brightnessAdjustmentLight += 0.05; 
                    adjustedColorLight = this.adjustColorBrightness(colorToEnhance, brightnessAdjustmentLight);
                    adjustmentAttemptsLight++;

                    if (suggestions.foreground.size >= numSuggestions && isForeground) {
                        return;
                    }
                    if (suggestions.background.size >= numSuggestions && !isForeground) {
                        return;
                    }
                }
    
                while (adjustmentAttemptsDark < maxAdjustments) {
                    if (isContrastValid(adjustedColorDark, referenceColor, contrastThreshold)) {
                        if (isForeground) {
                            suggestions.foreground.add(adjustedColorDark);
                        } else {
                            suggestions.background.add(adjustedColorDark);
                        }
                    }
                    brightnessAdjustmentDark -= 0.05; 
                    adjustedColorDark = this.adjustColorBrightness(colorToEnhance, brightnessAdjustmentDark);
                    adjustmentAttemptsDark++;
    
                    if (suggestions.foreground.size >= numSuggestions && isForeground) {
                        return;
                    }
                    if (suggestions.background.size >= numSuggestions && !isForeground) {
                        return;
                    }
                }
            }
        };
    
        addColorIfValid(fgColor, bgColor, contrastThreshold, true);
        addColorIfValid(bgColor, fgColor, contrastThreshold, false);
    
        return {
            foreground: [...suggestions.foreground], 
            background: [...suggestions.background]
        };
    };
    
    static getContrastRatio = (fgColor, bgColor) => {
        const contrastRatio = ColorUtils.getContrastRatio(fgColor, bgColor);
        return contrastRatio;
    }

    static adjustColorBrightness = (hex, factor) => {
        let hexToRGB = ColorUtils.convertHexToRgb(hex)
        let [r,g,b] = hexToRGB.replace("rgb(", "").replace(")", "").split(',');
    
        r = Math.min(255, Math.max(0, r * factor));
        g = Math.min(255, Math.max(0, g * factor));
        b = Math.min(255, Math.max(0, b * factor));
    
        const rgbValue = `rgb(${r}, ${g}, ${b})`;
        //const hexValue = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
        const hexValue = ColorUtils.convertRGBToHex(rgbValue);
        return hexValue;
    };
}