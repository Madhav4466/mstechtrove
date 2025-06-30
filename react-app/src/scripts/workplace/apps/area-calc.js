export default class AreaCalc {
    static calculateAreaOfTriangle(base, height) {
        return 0.5 * base * height;
    }

    static calculateAreaOfRectangle(length, width) {
        return length * width;
    }

    static calaulateAreaOfCircle(radius) {
        return Math.PI * radius * radius;
    }

    static calculateAreaOfSquare(side) {
        return side * side;
    }

    static calculateAreaOfTrapezoid(base1, base2, height) {
        const totalBase = parseFloat(base1) + parseFloat(base2);
        const halfBase = 0.5 * totalBase;
        return halfBase * height;
    }

    static calculateAreaOfEllipse(majorAxis, minorAxis) {
        const sum = Math.PI * parseFloat(majorAxis) * parseFloat(minorAxis);
        return sum;
    }

    static calculateAreaOfParallelogram(base, height) {
        return base * height;
    }
}