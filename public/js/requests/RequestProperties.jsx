
function RequestProperties(name, i) {
    let data = [];

    for(let j = 0; j <= i; j ++) {
        data.push(j.toString());
    }

    return data;
}

export default RequestProperties;