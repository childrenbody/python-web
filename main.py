# -*- coding: utf-8 -*-
try:
    import os
    import uvicorn
    import webbrowser
    from fastapi import FastAPI
    from loguru import logger
    import configparser

    from app import app

    config = configparser.ConfigParser()
    config.read("./config.ini")
    if not config.sections():
        raise ValueError("config.ini not found")

    host = config.get('server', 'host') or "127.0.0.1"
    port = config.get('server', 'port') or "8088"

    url = f"http://{host}:{port}/index.html"
    logger.info(f"Open {url}")
    webbrowser.open(url, new=2)
    uvicorn.run(app, port=8088)
except Exception as e:
    print(e)
    input("\n\nPress the Enter key to exit the program...")
