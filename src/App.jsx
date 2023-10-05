import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h1>THe base of my project</h1>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/cats' element={<h1>All the cats</h1>} />
        <Route path='/cats/:catId' element={<h1>The details of one cat😺</h1>} />
        <Route path='/ragnar-rules' element={<h1>Dogs are better than cats!</h1>} />
        <Route
          path='/ragnar-rules/food'
          element={<h1>Dogs are better than cats, at eating food!</h1>}
        />
        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
