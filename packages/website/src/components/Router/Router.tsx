import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./elements"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
