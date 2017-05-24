import ujson

import tornado.web


class _FilterHandler(tornado.web.RequestHandler):
    '''
        Handler for the /filter route
        
        Methods:
            - GET: Get the filtered data
    '''

    def __init__(self, application, request):
        super(_FilterHandler, self).__init__(application, request)
        self.json_args = {}
        self.db = self.settings['db']

    def prepare(self):
        str(self)
        str(self.request)
        str(self.request.body)
        self.json_args = ujson.loads(self.request.body)

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

        print(filters)

        if filters:
            for index, element in enumerate(res):
                state = element['estado']
                _filter = filters['filter']

                if _filter == 'populacao':
                    genero = filters['genero']
                    faixa = filters['idade']

                    res[index]['value'] = self.db[state][_filter][genero][faixa]
                else:
                    _value = filters['value']
                    res[index]['value'] = self.db[state][_filter][_value]

        self.write(ujson.dumps(res))
        self.finish()
