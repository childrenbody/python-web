# -*- coding: utf-8 -*-
import os
import sys
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# 如果在开发环境中运行，使用相对路径
# 如果在打包的应用中运行，使用绝对路径
path = os.path.join(sys._MEIPASS, "web/out") if getattr(sys, 'frozen', False) else "web/out"

app.mount('/', StaticFiles(directory=path), name='static')
