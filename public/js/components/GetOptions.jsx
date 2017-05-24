import React from 'react';

function getOptions(itens) {
    let options =[];
    for(let i in itens) {
        if(itens.hasOwnProperty(i)) {
            /*
            Fazer a lógica da request
            */

            let aux = [];
            for(let j = 0; j <= i; j ++) {
                aux.push(j.toString());
            }
            let current = [];

            for(let j in aux) {
                if(aux.hasOwnProperty(j)) {
                    current.push(
                        <option defaultValue={aux[j]} key={aux[j]}>
                            {aux[j]}
                        </option>
                    );
                }
            }

            options.push(
                <select className="custom-select" key={itens[i].filter}>
                    <option defaultChecked>{itens[i].filter}</option>
                    {current}
                </select>
            );
        }
    }

    return options;
}

export default getOptions;