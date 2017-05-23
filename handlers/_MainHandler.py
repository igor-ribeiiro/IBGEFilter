import tornado.web


class _MainHandler(tornado.web.RequestHandler):
    '''
        Handler for the root route of the server.
        
        Methods:
            - GET: Render the page for the user
    '''

    async def get(self):
        self.render('index.html')
