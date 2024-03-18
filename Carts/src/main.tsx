import React from 'react'; // 導入 React 庫
import ReactDOM from 'react-dom/client'; // 導入 ReactDOM 庫
import App from './App.tsx'; // 導入 App 組件
import './index.css'; // 導入樣式表

import './assets/css/app.css'
import './assets/css/bootstrap.min.css'
import './assets/css/css2.css'
import './assets/css/font-awesome.css'
import './assets/css/ionrangeslider.css'
import './assets/css/slick-theme.css'
import './assets/css/slick.css'
import './assets/css/smart_wizard_all.min.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


// 使用 ReactDOM.createRoot 創建根元素並渲染應用
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // 使用 React.StrictMode 嚴格模式包裹應用組件
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);