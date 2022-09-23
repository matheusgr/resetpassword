# ~/.local/bin/uvicorn main:app --reload
from typing import Union

from fastapi import FastAPI

from pydantic import BaseModel

class User(BaseModel):
    name: str
    picture: Union[str, None] = None
    user_id: str
    email: str
    email_verified: bool


app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/test")
def create_command(user: User):
    return {"status": "ok"}
