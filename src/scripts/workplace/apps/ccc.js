export default class ColorContrastChecker {
    #rgbToLinear(c) {
        c = c/255;
        if(c <= 0.03928){
            return c/12.92;
        }
        else{
            return Math.pow((c + 0.055) / 1.055, 2.4);
        }
    }

    #getLuminance(r, g, b) {
        r = this.rgbToLinear(r);
        g = this.rgbToLinear(g);
        b = this.rgbToLinear(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    static getContrastRatio(foreground, background) {
        const l1 = this.getLuminance(foreground[0], foreground[1], foreground[2]);
        const l2 = this.getLuminance(background[0], background[1], background[2]);
    
        //const [lighter, darker] = l1 < l2 ? [l2, l1] : [l1, l2];
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    static isColorCompliant(foreground, background) {
        const contrastRatio = this.getContrastRatio(foreground, background);
        return contrastRatio >= 4.5 ? true : false;
    }
}