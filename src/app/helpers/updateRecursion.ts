export const updateRecursion = (array: any, id: any, data: any) => {
    let fn = (array: any) => {
      return array.map((item: any) => {

        if(item.id === id) {
          return { ...item,  styles: data}
        } 
  
        if(item.content.length > 0) {
          return {...item, content: fn(item.content)}
        }
  
        return item;
  
      });
  
    }

    return fn(array)

}


export const updateContentRecursion = (array: any, id: any, data: any) => {
  let fn = (array: any) => {
    return array.map((item: any) => {

      if(item.id === id) {
        return { ...item,  content: [...item.content, data]}
      } 

      if(item.content.length > 0) {
        return {...item, content: fn(item.content)}
      }

      return item;

    });

  }

  return fn(array)

}