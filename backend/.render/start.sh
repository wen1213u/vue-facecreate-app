#!/usr/bin/env bash

# 安裝需求
pip install -r backend/requirements.txt

# 啟動 FastAPI
uvicorn backend.main:app --host 0.0.0.0 --port 10000