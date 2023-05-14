from uuid import UUID



from fastapi import FastAPI, HTTPException
from typing import List
from h11 import PRODUCT_ID
from pydantic import BaseModel

import uvicorn
from fastapi.responses import JSONResponse
import json
import logging
from starlette.status import (
    HTTP_200_OK,
    HTTP_401_UNAUTHORIZED,
    HTTP_500_INTERNAL_SERVER_ERROR
)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [    "http://localhost",    "http://localhost:4200",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class prod(BaseModel):
     id: int
     name: str
     description: str
     price: str
     image: str
     category: str
     sizes: list[ str ]
     colors: list[ str ]

with open('db.json') as f:
    data = json.load(f)

@app.get("/api/v1/prods")
async def get_data():
    return JSONResponse(content=data)

@app.post("/api/v1/prods")
async def register_prod(prod:prod):
    data.append(prod.dict())
    return{"id" : prod.id}

@app.delete("/api/v1/prods/{prod_id}")
async def delete_prod(prod_id:int) :
    for prod in data:
         if prod['id'] == int(prod_id):
             data.remove(prod)
             return
    raise HTTPException(
        status_code=404,
        detail=f"Product with id: {prod_id} does not exist")

@app.get("/api/v1/prods/{prod_id}")
async def read_prod(prod_id: int):
    for prod in data["prods"]:
        if prod["id"] == prod_id:
            return prod
    raise HTTPException(status_code=404, detail="Product not found")





# @app.get("/api/v1/prods")
# async def get_data(prod_id: int = None):
#     if prod_id:
#         for product in data:
#             if product["id"] ==20 :
#                 return JSONResponse(content=product)
#         raise HTTPException(status_code=404, detail=f"Product with id: {prod_id} does not exist")
#     else:
#         return JSONResponse(content=data)
