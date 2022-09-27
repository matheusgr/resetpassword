# ~/.local/bin/uvicorn main:app --reload
from fastapi import FastAPI, Request

import secrets

password_length = 13


app = FastAPI()

@app.post("/reset_password")
async def create_command(request: Request):
    print(await request.json())
    password = secrets.token_urlsafe(password_length)
    return str({"status": "ok", "password": password})
