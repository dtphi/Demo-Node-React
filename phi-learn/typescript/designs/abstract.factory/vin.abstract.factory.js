abstract class VIN {
    abstract run(): void;
}

class LUXA20 extends VIN {
    run(): void {
        console.log("LUXA20 Ô tô");
    }
}

class LUXSA20 extends VIN {
    run(): void {
        console.log("LUXSA20 Ô tô");
    }
}

abstract class VINFactory {
    abstract produceLUXA20(): LUXA20;
    abstract produceLUXSA20(): LUXSA20;
}

class ConcreteVINFactory extends VINFactory {
    produceLUXA20(): LUXA20 {
        return new LUXA20();
    }

    produceLUXSA20(): LUXSA20 {
        return new LUXSA20();
    }
}


const vinFactory = new ConcreteVINFactory();
const luxA20 = vinFactory.produceLUXA20();
const luxSA20 = vinFactory.produceLUXSA20();
luxA20.run();
luxSA20.run();