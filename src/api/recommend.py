from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from ai.preference import get_preference
from ai.weather import get_weather

router = APIRouter()

class Menu(BaseModel):
    menuId: int
    corner: str
    alias: str
    price: int

class Request(BaseModel):
    menu: List[str]

class Response(BaseModel):
    menu: List[Menu]

@router.post("/preference", response_model = Response)
def preference_res(req: Request):
    recommendations = get_preference(req.menu)

    return {"menu": recommendations[:3]}

@router.get("/weather", response_model = Response)
def weather_res():
    recommendations = get_weather()

    return {"menu": recommendations[:3]}