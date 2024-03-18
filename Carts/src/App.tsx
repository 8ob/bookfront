import CartItem from './pages/CartPage/CartItem.tsx';
import OrderConfirmation from './pages/CartPage/CheckoutForm.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Step1, Step2, Step3 } from './pages/CartPage/CheckoutForm.tsx';
import CheckoutForm from './pages/CartPage/CheckoutForm.tsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faShoppingCart);

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgSrc?: string;
  description?: string;
}



// 初始化購物車數據
// const initialCart: CartItemType[] = [
//   { id: 1, name: '商品A', price: 100, quantity: 2, imgSrc: '/path/to/imageA.png' },
//   { id: 2, name: '商品B', price: 200, quantity: 1, imgSrc: '/path/to/imageB.png' },
// ];


// App 組件，應用的主要入口點
const App: React.FC = () => {
  const memberId = ""
  const TestData = (memberId)
  if (TestData.isLoading) return <div>加載中...</div>


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/list' element={<OrderConfirmation />}>
            <Route index element={<Step1 />} />
            <Route path='/list/Step2' element={<Step2 />} />
            <Route path='/list/Step3' element={<Step3 />} />
          </Route>
        </Routes>
      </Router>
      {/* 在應用中顯示購物車頁面 */}
      {TestData.data?.data && <CartItem initialCart={TestData.data.data} />}
    </div>
  );
}


export default App;