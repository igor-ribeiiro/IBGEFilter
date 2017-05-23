import os

settings = {
    'template_path': os.path.join(os.path.dirname(__file__), 'views'),
    'static_path': os.path.join(os.path.dirname(__file__), 'public'),
    'debug': True
}
