interface MyInterface {
    property1?: string
    property2: number
    property3: boolean
}

const obj: Partial<MyInterface> = {}

const objTwo: Omit<MyInterface, 'property3' | 'property1'> = {
    property2: 112
}
