// interface
interface MyInterface {
    property1?: string
    property2: number
    property3: boolean
}

interface MyInterfaceThree {
    property5: string
}

interface MyInterfaceTwo extends MyInterface, MyInterfaceThree {
    property4: string
}

async function myFunction(input:MyInterfaceTwo): Promise<MyInterface> {
    return input
}


// type
type MyType = {
    property1: string
}
export type MyTypeTwo = {
    property2: string
    property3: MyEnum
} & MyType

async function myFunction2(input:MyTypeTwo): Promise<MyTypeTwo> {
    return input
}

// enum
enum MyEnum {
    enumOne = 'enumOne',
    enumTwo = 'enumTwo'
}
