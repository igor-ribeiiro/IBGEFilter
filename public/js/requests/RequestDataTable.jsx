
function RequestDataTable(values) {
    let data =[];
    data.push({
        estado: "Ceará",
        valor: "1982"
    });
    data.push({
        estado: "São Paulo",
        valor: "917144"
    });

    // fetch('/filter', {
    //     method: 'GET'
    // }).then(function(response) {
    //     data = response;
    //     console.log(data);
    // }).catch(function(err) {
    //     // Error :(
    //     throw err;
    // });

    return data;
}

export default RequestDataTable;