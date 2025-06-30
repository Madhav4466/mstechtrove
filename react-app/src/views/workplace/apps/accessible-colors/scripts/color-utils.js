export default class ColorUtils { 
    static generateRandomColor() {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ]
    }

    static generatetCompliantForegroundColor(backgroundColor) {
        const black = [0, 0, 0];
        const white = [255, 255, 255];
        const ccrWithBlack = ColorContrastChecker.getContrastRatio(black, backgroundColor);

        return ccrWithBlack >= 4.5 ? black : white;
    }

    static generateCompliantRandomColors() {
        let background = this.generateRandomColor();
        let foreground = this.generateRandomColor();

        while(!ColorContrastChecker.isColorCompliant(foreground, background)) {
            foreground = this.generateRandomColor();
        }
        return {foreground, background};
    }

    static generateCompliantPallete(color) {
        let colorPallete = new Set();
        let attempts = 0;

        while(true) {
            const newColor = ColorGenerator.generateRandomColor();
            const isColorCompliant = ColorContrastChecker.isColorCompliant(newColor, color);
            if (isColorCompliant && !colorPallete.has(newColor)) {
                colorPallete.add(newColor);
            }

            attempts++;
            if (attempts > 5000) {  
                console.warn("The maximum attempts for generating compliant colors are reached!!");
                break;
            }

            if (attempts > 5000 && colorPallete.length > 0) {
                break;
            }
        }
        return colorPallete;
    }

    static rgbToLinear(c) {
        c = c/255;
        const linearValue = (c <= 0.03928) ? c/12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        return linearValue;
    }

    static getLuminance(r, g, b) {
        r = this.rgbToLinear(r);
        g = this.rgbToLinear(g);
        b = this.rgbToLinear(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    static getContrastRatio(foreground, background) {
        const l1 = this.getLuminance(foreground[0], foreground[1], foreground[2]);
        const l2 = this.getLuminance(background[0], background[1], background[2]);
    
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        const cc = (lighter + 0.05) / (darker + 0.05);
        const roundedCC = Math.ceil(cc * 100)/100;
        return roundedCC.toFixed(2);

    }

    static convertRGBToHex(rgbValue) {
        const removeRGBInitials = rgbValue.replace('rgb(', '').replace(')', '').split(',');
        //let [r, g, b] = removeRGBInitials;
        let [r, g, b] = removeRGBInitials.map(num => parseInt(num.trim(), 10));
        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));
        
        const toHex = (value) => {
            const hex = value.toString(16).toUpperCase();
            return hex.length === 1 ? "0" + hex : hex;
        }
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    static convertHexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
}