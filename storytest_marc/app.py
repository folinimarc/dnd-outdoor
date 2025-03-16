from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


GLOBAL_STORE = {
    'hello': 'world',
    42: 'answer'
}

HERO_STORE = {
    'name': 'Marc',
    'wisdom': 2
}

class Store:
    def hero_get(self, key, default=None):
        return HERO_STORE.get(key, default)
    
    def hero_set(self, key, value):
        HERO_STORE[key] = value

    def global_get(self, key, default=None):
        return GLOBAL_STORE.get(key, default)
    
    def global_set(self, key, value):
        GLOBAL_STORE[key] = value

store = Store()

print(store.hero_get('name'))

###############

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/encounters/{id}", response_class=HTMLResponse)
async def read_item(request: Request, id: str):
    return templates.TemplateResponse(
        request=request, name=f"{id}/index.j2", context={"store": store}
    )
