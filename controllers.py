from fastapi import FastAPI
from starlette.templating import Jinja2Templates
from starlette.requests import Request

app = FastAPI(
    title='FastAPIでつくるtoDoアプリケーション',
    description='FastAPIチュートリアル : FastAPI(とstarlette)でシンプルなtoDoアプリを作り魔性。',
    version='0.9 beta'
)

templates = Jinja2Templates(directory = "templates")
jinja_env = templates.env

def index(request: Request):
    return{'Hello' : 'World'}

def admin(request: Request):
    return templates.TemplateResponse('admin.html',
                                      {'request': request,
                                      'username': 'admin'})