from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import base64
import os
from datetime import datetime
import cv2
import numpy as np
from PIL import Image
from io import BytesIO
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def serve_frontend():
    return FileResponse("static/index.html")

# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 創建上傳目錄
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

class UploadRequest(BaseModel):
    user_id: str
    image: str  # base64
    angle: str

@app.post("/upload")
async def upload_image(request: UploadRequest):
    try:
        # 解碼base64圖片
        image_data = base64.b64decode(request.image.split(",")[1])
        
        # 轉換為OpenCV格式
        nparr = np.frombuffer(image_data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        # 創建用戶目錄
        user_dir = os.path.join(UPLOAD_FOLDER, request.user_id)
        os.makedirs(user_dir, exist_ok=True)
        
        # 保存圖片
        #timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{request.user_id}_{request.angle}.jpg"
        filepath = os.path.join(user_dir, filename)
        
        # 保存圖片
        cv2.imwrite(filepath, img)
        
        return {
            "success": True,
            "message": "圖片上傳成功",
            "filepath": filepath
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)