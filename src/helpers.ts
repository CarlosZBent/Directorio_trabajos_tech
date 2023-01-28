function iterateJSONData (obj: Object) {
    let data = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let val = obj[key];
            /* new JSON object to store the data 
            for the {#each} block in the markup */
            let tempDict = new Object()
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

export {iterateJSONData}
