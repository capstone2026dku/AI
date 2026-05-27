from fastapi import FastAPI
from pydantic import BaseModel
from ai.preference import get_preference
from ai.weather import get_weather

server = FastAPI()

class Request(BaseModel):
    menu: list[str]

@server.post("/preference")
async def preference(req: Request):
    result = get_preference(req.menu)

    return {
        "recommendations": result[:3]
    }

@server.get("/weather")
async def weather():
    result = get_weather()

    return {
        "recommendations": result[:3]
    }