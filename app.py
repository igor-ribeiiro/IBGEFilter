"""The main file of the server."""

import time
import signal
import os
import logging

import tornado.ioloop
import tornado.options
import tornado.web
import tornado.httpserver

from tornado.options import options, define

import handlers
from settings import settings


define('port', default=8080, help='run on the given port', type=int)

LOG_PATH = os.path.abspath('~/server.log')
MAX_WAIT_BEFORE_SHUTDOWN = 3


def sig_handler(sig, _):
    logging.warning('Caught signal: %s' % sig)
    tornado.ioloop.IOLoop.instance().add_callback(shutdown)


def shutdown():
    logging.info('Stopping http server')
    server.stop()

    logging.info('Will shutdown in %d seconds...', MAX_WAIT_BEFORE_SHUTDOWN)
    io_loop = tornado.ioloop.IOLoop.instance()

    deadline = time.time() + MAX_WAIT_BEFORE_SHUTDOWN

    def stop_loop():
        now = time.time()
        if now < deadline and (io_loop._callbacks or io_loop._timeouts):
            io_loop.add_timeout(now + 1, stop_loop)
        else:
            io_loop.stop()
            logging.info('SHUTDOWN')

    stop_loop()


def main():
    tornado.options.parse_command_line()

    application = tornado.web.Application([
        (r'/', handlers.MainHandler),
        (r'/filter', handlers.FilterHandler),
    ], **settings)

    global server

    server = tornado.httpserver.HTTPServer(application)
    server.listen(options.port)

    print('Server listening on port {}'.format(options.port))

    signal.signal(signal.SIGTERM, sig_handler)
    signal.signal(signal.SIGINT, sig_handler)

    tornado.ioloop.IOLoop.instance().start()

    logging.info('Exit...')


if __name__ == '__main__':
    main()
