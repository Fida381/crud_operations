import react,{useState, useEffect} from 'react';
import './App.css';
import { View } from './component/View';
//importing data from local storage
const getDataFromLS = () => {
  const dataa = localStorage.getItem('data');
  if(dataa){
    return JSON.parse(dataa);
  }
  else{
    return[]
  }
}

function App() {
//main array of objects state || student state || books array of objects

const [data, setdata]=useState(getDataFromLS());


//setting input states
 const [student , setStudent] = useState('');
 const [address , setAddress] = useState('');
 const [city , setCity] = useState('');
 const [mail , setMail] = useState('');

 //form submit event
 
 const handleAddDataSubmit=(e)=>{
    e.preventDefault();
    //creating an object
    let newData={
        student,
        address,
        city,
        mail
    }
    setdata([...data, newData])
    setStudent('');
    setAddress('');
    setCity('');
    setMail('');
  }
  // delete any student
  const deleteStudent=(mail) => {
    const filteredData= data.filter((element, index)=>{
      return element.mail!== mail
    })
      setdata(filteredData);
  }

  // saving data on local storage

    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
    }, [data])



//Forms
  return (
    <div className="wrapper">
      <h1>Student List</h1>
      <p>Add students to the list.</p>
     <div className="main">

        <div className='form-container'>
            <form autoComplete="off" className='form-group' onSubmit={handleAddDataSubmit}>
              {/* <label>Student: </label> */}
              <input type="text" className='form-control' placeholder='Name' required
               onChange={(e)=>setStudent(e.target.value)} value={student}></input>
              <br/>
              {/* <label>Address</label> */}
              <input type="text" className='form-control' placeholder='Address' required
              onChange={(e)=>setAddress(e.target.value)} value={address}></input>
              <br/>
              {/* <label>City</label> */}
              <input type="text" className='form-control' placeholder='City' required
              onChange={(e)=>setCity(e.target.value)} value={city}></input>
              <br/>
              <input type="text" className='form-control' placeholder='example@email.com' required
              onChange={(e)=>setMail(e.target.value)} value={mail}></input>
              <br/>
              <button type="submit" className='btn'>ADD</button>
            </form>
        </div>
        
        <div className='view-container'>
          {data.length>0 && <>
            <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>e-mail</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                      <View students= {data} deleteStudent={deleteStudent}/>
                  </tbody>
                </table>              
            </div>
            <button className="remove-btn" >Remove All</button>
          </>}
            {data.length<1 && <div>No data stored yet.</div>}
        </div>
     </div>
    </div>
  );
}

export default App;
