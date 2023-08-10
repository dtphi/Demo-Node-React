class SingletonClass {
    private static instance?: SingletonClass

    private constructor() { }

    public static getInstance(): SingletonClass {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass()
        }

        return SingletonClass.instance
    }
}

export default SingletonClass