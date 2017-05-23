import tornado.web


class _FilterHandler(tornado.web.RequestHandler):
    '''
        Handler for the /filter route
        
        Methods:
            - GET: Get the results from the specified filter
    '''

