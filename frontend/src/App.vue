<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <!-- 狀態欄 -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-6 py-3 flex justify-between items-center">
      <div class="text-sm font-medium">人臉建檔</div>
      <div class="text-sm">{{ capturedAngles.length }}/{{ targetAngles.length }}</div>
    </div>

    <!-- 主要內容 -->
    <div class="flex-1 flex flex-col items-center justify-center p-6 text-center">
      <!-- 相機視圖容器 -->
      <div class="relative w-full max-w-md aspect-square mb-8 flex items-center justify-center">
        <!-- 相機視圖 -->
        <div class="relative w-[90%] h-[90%] rounded-full overflow-hidden">
          <video 
            ref="video" 
            autoplay 
            playsinline 
            muted
            class="w-full h-full object-cover"
          ></video>
          <canvas ref="canvas" class="hidden"></canvas>
          <canvas 
            ref="faceCanvas" 
            class="absolute inset-0 w-full h-full pointer-events-none"
          ></canvas>
        </div>
        
        <!-- 環形進度條 -->
        <div class="absolute inset-0">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- 背景圓環 -->
            <circle 
              cx="50" 
              cy="50" 
              r="47" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.2)" 
              stroke-width="4"
            />
            <!-- 進度圓環 -->
            <circle 
              cx="50" 
              cy="50" 
              r="47" 
              fill="none" 
              stroke="#10B981" 
              stroke-width="4"
              stroke-linecap="round"
              :stroke-dasharray="`${(capturedAngles.length / targetAngles.length) * 295.31}, 295.31`"
              transform="rotate(-90 50 50)"
              class="transition-all duration-500"
            />
          </svg>
        </div>
        
        <!-- 進度指示器 -->
        <div class="absolute -bottom-6 left-0 right-0 text-center text-white/80 text-sm">
          進度: {{ capturedAngles.length }} / {{ targetAngles.length }}
        </div>
      </div>

      <!-- 操作按鈕 -->
      <div class="flex flex-col w-full max-w-md gap-3">
        <button 
          @click="captureImage"
          :disabled="!userName || isCapturing"
          class="bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all"
          :class="{ 'opacity-50': !userName || isCapturing }"
        >
          <span v-if="!isCapturing">拍攝 {{ currentAngle.label }}</span>
          <span v-else class="flex items-center">
            <span class="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
            處理中...
          </span>
        </button>

        <button 
          @click="resetUser"
          class="text-white/70 py-4 text-sm"
          :class="{ 'opacity-50': capturedAngles.length === 0 }"
          :disabled="capturedAngles.length === 0"
        >
          重新開始
        </button>
      </div>
    </div>

    <!-- 用戶名輸入模態框 -->
    <div v-if="!userName" class="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50">
      <div class="w-full max-w-sm bg-gray-900 rounded-2xl p-6">
        <h2 class="text-xl font-semibold mb-2">設置您的個人資料</h2>
        <p class="text-gray-400 mb-6">請輸入您的姓名以開始人臉建檔</p>

        <div class="mb-6">
          <input
            v-model="userNameInput"
            type="text"
            placeholder="您的姓名"
            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            @keyup.enter="startEnrollment"
            autofocus
          >
        </div>

        <button 
          @click="startEnrollment"
          :disabled="!userNameInput"
          class="w-full bg-blue-500 text-white py-3 rounded-full font-medium disabled:opacity-50"
        >
          開始建檔
        </button>
      </div>
    </div>

    <!-- 完成提示 -->
    <div v-if="showCompletion" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div class="text-center p-6">
        <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-semibold mb-2">建檔完成！</h2>
        <p class="text-gray-400 mb-6">已成功建立您的人臉識別資料</p>
        <button 
          @click="resetUser"
          class="bg-blue-500 text-white py-3 px-8 rounded-full font-medium"
        >
          完成
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as faceapi from 'face-api.js';

// 響應式變量
const userName = ref('');
const userNameInput = ref('');
const showCompletion = ref(false);
const video = ref(null);
const canvas = ref(null);
const faceCanvas = ref(null);
const isCapturing = ref(false);
const faceDetection = ref(null);

// 拍攝角度設置
const targetAngles = ref([
  { name: 'front', label: '正面' },
  { name: 'left', label: '左轉' },
  { name: 'right', label: '右轉' },
  { name: 'up', label: '仰頭' },
  { name: 'down', label: '低頭' },
]);

const currentAngle = ref(targetAngles.value[0]);
const capturedAngles = ref([]);
let detectionAnimationId = null;

// 開始建檔
function startEnrollment() {
  if (userNameInput.value.trim()) {
    userName.value = userNameInput.value.trim();
  }
}

// 初始化相機和人臉檢測
onMounted(async () => {
  try {
    console.log('正在初始化相機...');
    
    // 請求相機權限
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        width: { ideal: 1280 }, 
        height: { ideal: 720 }, 
        facingMode: 'user' 
      } 
    });
       
    video.value.srcObject = stream;
    
    // 等待視頻元數據加載
    await new Promise((resolve) => {
      video.value.onloadedmetadata = () => {
        video.value.play().then(resolve).catch(console.error);
      };
    });
    
    console.log('相機初始化完成，正在加載人臉檢測模型...');
    
    // 加載人臉檢測模型
    const modelPath = '/models';
    console.log('模型路徑:', modelPath);
    
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(modelPath).then(() => {
        console.log('TinyFaceDetector 模型加載完成');
      }),
      faceapi.nets.faceLandmark68Net.loadFromUri(modelPath).then(() => {
        console.log('FaceLandmark68Net 模型加載完成');
      })
    ]);
    
    console.log('所有模型加載完成，開始人臉檢測循環');
    
    // 開始人臉檢測循環
    detectFacesLoop();
  } catch (error) {
    console.error('初始化失敗:', error);
    showError(`初始化失敗: ${error.message}`);
  }
});

// 組件卸載前清理資源
onBeforeUnmount(() => {
  stopCamera();
  if (detectionAnimationId) {
    cancelAnimationFrame(detectionAnimationId);
  }
});

// 停止相機
function stopCamera() {
  if (video.value?.srcObject) {
    video.value.srcObject.getTracks().forEach(track => {
      track.stop();
      track.enabled = false;
    });
    video.value.srcObject = null;
  }
}

// 人臉檢測循環
async function detectFacesLoop() {
  if (!video.value || !faceCanvas.value) {
    console.log('等待 video 或 faceCanvas 元素準備就緒...');
    detectionAnimationId = requestAnimationFrame(detectFacesLoop);
    return;
  }

  // 確保視頻尺寸有效
  if (video.value.videoWidth === 0 || video.value.videoHeight === 0) {
    console.log('等待視頻尺寸...');
    detectionAnimationId = requestAnimationFrame(detectFacesLoop);
    return;
  }

  const ctx = faceCanvas.value.getContext('2d');
  faceCanvas.value.width = video.value.videoWidth;
  faceCanvas.value.height = video.value.videoHeight;
  
  // 清空畫布
  ctx.clearRect(0, 0, faceCanvas.value.width, faceCanvas.value.height);
  
  try {
    // 打印調試信息
    console.log('開始檢測人臉...');
    
    // 檢測人臉
    const detectionOptions = new faceapi.TinyFaceDetectorOptions({
      inputSize: 640,
      scoreThreshold: 0.3
    });
    
    console.log('檢測選項:', JSON.stringify(detectionOptions));
    
    const detections = await faceapi.detectAllFaces(
      video.value,
      detectionOptions
    );
    
    console.log(`檢測到 ${detections.length} 張人臉`);

    // 繪製綠色邊框
    if (detections && detections.length > 0) {
      console.log('檢測到人臉:', detections);
      
      // 只處理最大的人臉
      const detection = detections.reduce((prev, current) => {
        const prevBox = prev.box || prev.detection?.box;
        const currentBox = current.box || current.detection?.box;
        
        if (!prevBox || !currentBox) {
          console.warn('無效的檢測結果:', { prev, current });
          return current;
        }
        
        const prevArea = prevBox.width * prevBox.height;
        const currentArea = currentBox.width * currentBox.height;
        return prevArea > currentArea ? prev : current;
      });
      
      const box = detection.box || detection.detection?.box;
      
      if (!box) {
        console.warn('無法獲取人臉框:', detection);
        faceDetection.value = null;
        return;
      }
      
      console.log('繪製人臉框:', box);
      
      // 繪製邊框
      ctx.strokeStyle = '#10B981'; // 綠色邊框
      ctx.lineWidth = 3;
      
      // 繪製圓角矩形
      const x = box.x;
      const y = box.y;
      const width = box.width;
      const height = box.height;
      const radius = 10; // 圓角半徑
      
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.stroke();
      
      // 保存檢測到的人臉信息
      faceDetection.value = { detection, box };
    } else {
      faceDetection.value = null;
    }
  } catch (error) {
    console.error('人臉檢測錯誤:', error);
  }
  
  // 繼續下一幀檢測
  detectionAnimationId = requestAnimationFrame(detectFacesLoop);
}

// 拍照並上傳
async function captureImage() {
  if (!userName.value) {
    showError('請先輸入姓名');
    return;
  }
  
  if (!faceDetection.value) {
    showError('未檢測到人臉');
    return;
  }
  
  // 檢查是否已拍攝過當前角度
  if (capturedAngles.value.includes(currentAngle.value.name)) {
    // 自動切換到下一個未拍攝的角度
    const nextAngle = targetAngles.value.find(
      angle => !capturedAngles.value.includes(angle.name)
    );
    if (nextAngle) {
      currentAngle.value = nextAngle;
    }
    return;
  }
  
  isCapturing.value = true;
  
  try {
    // 確保畫布尺寸正確
    canvas.value.width = video.value.videoWidth;
    canvas.value.height = video.value.videoHeight;
    const ctx = canvas.value.getContext('2d');
    
    // 繪製當前視頻幀到畫布
    ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    
    // 獲取人臉區域
    const box = faceDetection.value.detection.box;
    
    // 創建臨時畫布來裁剪人臉
    const faceCropCanvas = document.createElement('canvas');
    faceCropCanvas.width = box.width;
    faceCropCanvas.height = box.height;
    const cropCtx = faceCropCanvas.getContext('2d');
    
    // 繪製裁剪後的人臉
    cropCtx.drawImage(
      canvas.value,
      box.x,
      box.y,
      box.width,
      box.height,
      0,
      0,
      box.width,
      box.height
    );
    
    // 轉換為 base64
    const faceImageData = faceCropCanvas.toDataURL('image/jpeg');
    
    // 上傳到後端
    const response = await fetch('https://082f-203-64-95-146.ngrok-free.app/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userName.value,
        image: faceImageData,
        angle: currentAngle.value.name,
        face_box: {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        }
      })
    });

    const result = await response.json();
    
    if (result.success) {
      // 記錄已拍攝的角度
      if (!capturedAngles.value.includes(currentAngle.value.name)) {
        capturedAngles.value.push(currentAngle.value.name);
      }
      
      // 檢查是否所有角度都已完成
      const nextAngle = targetAngles.value.find(
        angle => !capturedAngles.value.includes(angle.name)
      );
      
      if (nextAngle) {
        currentAngle.value = nextAngle;
      } else {
        showCompletion.value = true;
      }
    } else {
      throw new Error(result.message || '上傳失敗');
    }
  } catch (error) {
    console.error('上傳失敗:', error);
    showError('上傳失敗: ' + (error.message || '未知錯誤'));
  } finally {
    isCapturing.value = false;
  }
}

// 重置用戶
function resetUser() {
  // 停止相機
  if (video.value?.srcObject) {
    video.value.srcObject.getTracks().forEach(track => track.stop());
  }
  
  // 重置狀態
  userName.value = '';
  userNameInput.value = '';
  capturedAngles.value = [];
  currentAngle.value = targetAngles.value[0];
  showCompletion.value = false;
  
  // 清除畫布
  if (faceCanvas.value) {
    const ctx = faceCanvas.value.getContext('2d');
    ctx.clearRect(0, 0, faceCanvas.value.width, faceCanvas.value.height);
  }
  
  // 重新初始化相機
  setTimeout(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 }, 
          facingMode: 'user' 
        } 
      });
      video.value.srcObject = stream;
    } catch (error) {
      showError('無法重新初始化相機');
    }
  }, 300);
}

// 顯示錯誤提示
function showError(message) {
  const el = document.createElement('div');
  el.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap';
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
</script>

<style>
/* 基礎動畫 */
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes scan {
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-scan {
  animation: scan 2s linear infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 按鈕懸停效果 */
button:not(:disabled) {
  transition: all 0.2s ease;
}

button:active:not(:disabled) {
  transform: scale(0.98);
}

/* 自定義滾動條 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>