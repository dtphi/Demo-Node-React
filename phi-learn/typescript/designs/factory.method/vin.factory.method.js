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
}
class LUXA20Factory extends VINFactory {
    produceVIN() {
        return new LUXA20();
    }
}
class LUXSA20Factory extends VINFactory {
    produceVIN() {
        return new LUXSA20();
    }
}

const luxa20Factory = new LUXA20Factory();
const luxsa20Factory = new LUXA20Factory();
const luxa20 = luxa20Factory.produceVIN();
const luxsa20 = luxsa20Factory.produceVIN();
luxa20.run();
luxsa20.run();