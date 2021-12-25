import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import AddUser from './pages/AddUser'
import UserList from './pages/UserList'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/add-new-user" element={<AddUser />} />
      </Routes>
    </Router>
  )
}

export default App
