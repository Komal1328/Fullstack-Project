import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Homepage from './Homepage';

import Get from './Get'
import Fetch from './Fetch'

import Bills from './Bills';
import InsertBills from './InsertBills';
import UpdateBills from './UpdateBills';

import Food from './Food';
import InsertFood from './InsertFood';
import UpdateFood from './UpdateFood';

import Student from './Student';
import UpdateStudent from './UpdateStudent';
import InsertStudent from './InsertStudent';

import Rent from './Rent';
import InsertRent from './InsertRent';
import UpdateRent from './UpdateRent';

import Others from './Others';
import InsertOthers from './InsertOthers';
import UpdateOthers from './UpdateOthers';

import Homeaccessary from './Homeaccessary';
import InsertHomeaccessary from './InsertHomeaccessary';
import UpdateHomeaccessary from './UpdateHomeaccessary';

import Total from './Total';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/home' element={<Homepage />}></Route>

          <Route path='/student' element={<Student />}></Route>
          <Route path='/student/create' element={<InsertStudent />}></Route>
          <Route path='/student/update/:id' element={<UpdateStudent />}></Route>
        
          <Route path='/rent' element={<Rent />}></Route>
          <Route path='/rent/create' element={<InsertRent />}></Route>
          <Route path='/rent/update/:id' element={<UpdateRent />}></Route>

          <Route path='/food' element={<Food />}></Route>
          <Route path='/food/create' element={<InsertFood />}></Route>
          <Route path='/food/update/:id' element={<UpdateFood />}></Route>

          <Route path='/bills' element={<Bills />}></Route>
          <Route path='/bills/create' element={<InsertBills />}></Route>
          <Route path='/bills/update/:id' element={<UpdateBills />}></Route>

          <Route path='/homeaccessary' element={<Homeaccessary />}></Route>
          <Route path='/homeaccessary/create' element={<InsertHomeaccessary />}></Route>
          <Route path='/homeaccessary/update/:id' element={<UpdateHomeaccessary />}></Route>

          <Route path='/others' element={<Others />}></Route>
          <Route path='/others/create' element={<InsertOthers/>}></Route>
          <Route path='/Others/update/:id' element={<UpdateOthers />}></Route>

          <Route path='/total' element={<Total />}></Route>
          <Route path='/get' element={<Get />}></Route>
          <Route path='/fetch/' element={<Fetch />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;