export default class LengthConverter {
    conversionFactor = {
        mm:{
            cm: 0.1,
            inch: 0.0393701,
            foot: 0.00328084,
            meter: 0.001,
            yard: 0.00109361,
            km: 1e-6,
            mile: 6.2137e-7
        },
        cm: {
            mm: 10,
            inch: 0.393701,
            foot: 0.0328084,
            meter: 0.01,
            yard: 0.0109361,
            km: 1e-5,
            mile: 6.2137e-6
        },
        inch: {
            mm: 25.4,
            cm: 2.54,
            foot: 0.0833333,
            meter: 0.0254,
            yard: 0.0277778,
            km: 2.54e-5,
            mile: 1.5783e-5
        },
        foot: {
            mm: 304.8,
            cm: 30.48,
            inch: 12,
            meter: 0.3048,
            yard: 0.333333,
            km: 0.0003048,
            mile: 0.000189394
        },
        meter: {
            mm: 1000,
            cm: 100,
            inch: 39.3701,
            foot: 3.28084,
            yard: 1.09361,
            km: 0.001,
            mile: 0.000621371
        },
        yard: {
            mm: 914.4,
            cm: 91.44,
            inch: 36,
            foot: 3,
            meter: 0.9144,
            km: 0.0009144,
            mile: 0.000568182
        },
        km: {
            mm: 1e6,
            cm: 100000,
            inch: 39370.1,
            foot: 3280.84,
            meter: 1000,
            yard: 1093.61,
            mile: 0.621371
        },
        mile: {
            mm: 1.609e6,
            cm: 160934,
            inch: 63360,
            foot: 5280,
            meter: 1609.34,
            yard: 1760,
            km: 1.60934
        }
    }

    static convert(value, from, to) {
        if(from !== to){
            const factor = this.conversionFactor[from][to];
            return value * factor;
        }
    }
}