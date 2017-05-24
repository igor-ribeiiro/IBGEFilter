import os
import json
import logging


def get_db():
    """
        Get the jsons from the files in db/ folder
        :return: Dict with each state information.
    """

    estados = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia']
    db = {}

    for estado in estados:
        filename = os.path.join('db', '{}.json'.format(estado))

        try:
            with open(filename) as file:
                db[estado] = json.load(file)
        except FileNotFoundError or IOError as err:
            logging.error('Fail opening {}'.format(filename))
            raise err

    return db

settings = {
    'template_path': os.path.join(os.path.dirname(__file__), 'views'),
    'static_path': os.path.join(os.path.dirname(__file__), 'public'),
    'debug': True,
    'db': get_db()
}
