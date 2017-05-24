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
        str(self)
        str(self.request)
        str(self.request.body)
        #if self.request.headers["Content-Type"].startswith("application/json"):
        self.json_args = json.loads(self.request.body)
        #else:
         #   self.json_args = None

    async def get(self):


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
