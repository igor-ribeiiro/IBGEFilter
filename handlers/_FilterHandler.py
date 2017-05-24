import json

import tornado.web


class _FilterHandler(tornado.web.RequestHandler):
    '''
        Handler for the /filter route
        
        Methods:
            - GET: Get the options for the filters
            - POST: Get the filtered data
    '''

    def __init__(self, application, request):
        super(_FilterHandler, self).__init__(application, request)
        self.json_args = {}
        self.db = self.settings['db']

    def prepare(self):
        if self.request.headers["Content-Type"].startswith("application/json"):
            self.json_args = json.loads(self.request.body)
        else:
            self.json_args = None

    async def get(self):
        options = {
            'genero': [
                'feminino',
                'masculino'
            ],
            'faixa': [
                '0 a 4 anos',
                '5 a 9 anos',
                '10 a 14 anos',
                '15 a 19 anos',
                '20 a 24 anos',
                '25 a 29 anos',
                '30 a 34 anos',
                '35 a 39 anos',
                '40 a 44 anos',
                '45 a 49 anos',
                '50 a 54 anos',
                '55 a 59 anos',
                '60 a 64 anos',
                '65 a 69 anos',
                '70 a 74 anos',
                '75 a 79 anos',
                '80 a 84 anos',
                '85 a 89 anos',
                '90 a 94 anos',
                '95 a 99 anos',
                '100 ou mais anos'
            ],
            'familias': [
                '2 pessoas',
                '3 pessoas',
                '4 pessoas',
                '5 pessoas',
                'mais de 5 pessoas'
            ],
            'fecundidade': [
                'fundamental incompleto',
                'medio incompleto',
                'superior incompleto',
                'superior completo',
                'nao determinado'
            ],
            'nupicialidade': [
                'solteiro',
                'casado',
                'divorciado',
                'viúvo',
                'separado judicialmente'
            ],
            'rendimento': [
                'sem rendimento',
                '1 salário mínimo',
                '1 a 2 salários mínimos',
                '2 a 3 salários mínimos',
                '3 a 5 salários mínimos',
                '5 a 10 salários mínimos',
                '10 a 20 salários mínimos',
                'mais de 20 salários mínimos'
            ]
        }

        self.write(json.dumps(options))
        self.finish()

    async def post(self):
        filters = self.json_args
        res = [{'estado': state} for state in self.db.keys()]

        '''
            filters format:
            {
                'filter': 'rendimento',
                'value' : '1 salário mínimo'
            }
            or (for 'população' only)
            {
                'filter': 'população',
                'genero': 'feminino',
                'faixa': '0 a 4 anos'
            }
        '''

        if filters:
            for index, element in enumerate(res):
                state = element['estado']
                _filter = filters['filter']
                _value = filters['value']

                if _filter == 'população':
                    genero = filters['genero']
                    faixa = filters['faixa']

                    res[index]['value'] = self.db[state][_filter][genero][faixa]
                else:
                    res[index]['value'] = self.db[state][_filter][_value]

        self.write(json.dumps(res))
        self.finish()
