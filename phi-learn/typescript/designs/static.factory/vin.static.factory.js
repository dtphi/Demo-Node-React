"use strict";

// https://anonystick.com/blog-developer/phan-2-factory-pattern-cach-ma-toi-trien-khai-trong-nha-may-vinfast-fresher-va-junior-nen-bo-qua-phan-3-2020110554662242

class VIN {
}
class LUXA20 extends VIN {
    run() {
        console.log("LUXA20 Ô tô");
    }
}
class LUXSA20 extends VIN {
    run() {
        console.log("LUXSA20 Ô tô");
    }
}
class VINFactory {
    static produceVIN(model) {
        if (model === "A.20") {
            return new LUXA20();
        }
        else {
            return new LUXSA20();
        }
    }
}


const luxA20 = VINFactory.produceVIN("A.20");
const luxSA20 = VINFactory.produceVIN("SA.20");
luxA20.run();
luxSA20.run();
