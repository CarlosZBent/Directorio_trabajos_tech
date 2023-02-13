interface ItemObject {
    name: string,
    /* link property has a type==any because if set to string it returns 
    an error when being assigned to `val` inside the function,
    maybe because of the way val is created iterating over an Object */
    link: any
}

export function iterateJSONData (obj: Object) {
    let data = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let val = obj[key as keyof typeof obj];
            /* new JSON object to store the data 
            for the {#each} block in the markup */
            let tempDict: ItemObject = {name:'', link:''}
            /* assigning the properties parsed from
            Config as values for the new Object*/
            tempDict.name = key
            tempDict.link = val
            /* storing every single key-value pair
            on the data array*/
            data.push(tempDict)
        }
    }
    return data
}

export function getKeyOfObj (key:string, obj:Object) {
    for (let keyItem in obj) {
      if (obj.hasOwnProperty(keyItem)) {
        if (keyItem == key)
          return keyItem
    }
  }
}
