export default class ColorCodeConverter {
    static convertRGBToHex(r, g, b) {
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