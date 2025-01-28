import ColorContrastChecker from "./ccc";

export default class ColorGenerator {
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
}