function createNumberList(item: number): number[] {
    const newList: number[] = [];
  
    newList.push(item);
  
    return newList;
  }
  
  function createStringList(item: string): string[] {
    const newList: string[] = [];
  
    newList.push(item);
  
    return newList;
  }

  // just different type, can reuseable
  
  function createList<T>(item: T): T[] {
    const newList: T[] = [];
  
    newList.push(item);
  
    return newList;
  }
  
  const numberList = createList<number>(123);
  const stringList = createList<string>('abc');