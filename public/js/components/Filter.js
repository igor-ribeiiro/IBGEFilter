/**
 * Created by luiscm on 24/05/17.
 */

import _Filter from '_Components/_Filter';

class Filter extends _Filter {
    constructor(props) {
        super(props);

        this.changeFiltersOptions = this.changeFiltersOptions.bind(this);
    }

    render() {
        return (
            <div>
                <a>Selecione o filtro: </a>
                <select className="custom-select" onChange={this.changeFiltersOptions} name="filter">
                    <option defaultChecked value="populacao">População</option>
                    <option value="familias">Famílias</option>
                    <option value="fecundidade">Fecundidade</option>
                    <option value="nupicialidade">Nupicialidade</option>
                    <option value="rendimento">Rendimento</option>
                </select>

                {this.filterOptions}
            </div>
        );
    }
}

