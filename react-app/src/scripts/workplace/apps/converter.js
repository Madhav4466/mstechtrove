export default class ConverterUtils {
    static converter = {
        length: {
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
        },
        temprature: {
            C: {
                F: (temp) => (temp * 9/5) + 32,
                K: (temp) => temp + 273.15
            },
            F:{
                C: (temp) => ((temp - 32) * 5) / 9,
                K: (temp) => ((temp - 32) * 5) / 9 + 273.15
            },
            K: {
                C: (temp) => temp - 273.15,
                F: (temp) => ((temp - 273.15) * 9) / 5 + 32
            }
        },
        area: {
            SquareMeter: {
                SquareFoot: 10.7639,
                Hectre: 0.0001,
                Acre: 0.000247105,
                Gunta: 0.009884215,
            },
            SquareFoot: {
                SquareMeter: 0.092903,
                Hectre: 9.2903e-6,
                Acre: 2.2957e-5,
                Gunta: 0.000918273,
            },
            Hectre: {
                SquareMeter: 10000,
                SquareFoot: 107639,
                Acre: 2.47105,
                Gunta: 98.842153518,
            },
            Acre: {
                SquareMeter: 4046.86,
                SquareFoot: 43560,
                Hectre: 0.404686,
                Gunta: 40.4686,
            },
            Gunta: {
                SquareMeter: 101.17,
                SquareFoot: 1089,
                Hectre: 0.0101,
                Acre: 0.0247,
            }
        },
        currency: {
            dollar: {
                euro: 0.93,
                pound: 0.82,
                yen: 138.2,
                rupee: 82.7,
            },
            euro: {
                dollar: 1.08,
                pound: 0.88,
                yen: 148.2,
                rupee: 89.0,
            },
            pound: {
                dollar: 1.22,
                euro: 1.14,
                yen: 168.4,
                rupee: 101.5
            },
            yen: {
                dollar: 0.0072,
                euro: 0.0067,
                pound: 0.0059,
                rupee: 0.6
            },
            rupee: {
                dollar: 0.012,
                euro: 0.011,
                pound: 0.0098,
                yen: 1.67
            }
        }

    }

    // static convert(value, from, to) {
    //     if(from !== to){
    //         const factor = this.conversionFactor[from][to];
    //         return value * factor;
    //     }
    // }

    static convert(value, category, from, to) {
        if (from === to) {
            return value;
        }

        const conversionData = this.converter[category]?.[from]?.[to];

        if (!conversionData) {
            throw new Error(`Conversion from ${from} to ${to} in category ${category} is not supported.`);
        }

        if (typeof conversionData === "function") {
            return conversionData(value);
        }

        return value * conversionData;
    }
}