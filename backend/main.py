from fastapi import FastAPI

app = FastAPI()


@app.get("/domi")
async def root():
    return {"message": "Hello Domi"}
