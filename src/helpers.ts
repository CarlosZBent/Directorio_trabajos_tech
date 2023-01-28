function iterateJSONData (obj: Object) {
    let data = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let val = obj[key];
            let tempDict = new Object()
            tempDict.name = key
            tempDict.link = val
            data.push(tempDict)
        }
    }
    return data
}

export {iterateJSONData}
