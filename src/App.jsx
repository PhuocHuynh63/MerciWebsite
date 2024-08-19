import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout'
import NotFound from './pages/notFound/NotFound'

function App() {

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout Component={NotFound} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
