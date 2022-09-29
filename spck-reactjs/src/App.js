import './index.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {useState} from 'react';
import { Input, FormGroup, Label,Row } from 'reactstrap'

function App() {
  const [blockSearch, setBlockSearch] = useState(false)
  const handleBlock = () => {
    setBlockSearch(!blockSearch)
  }
  const handelDeleteBlock = () => {
    setBlockSearch(false)
  }
  return (
    <>
        
    <div className="App">

          <Header onBlock = {handleBlock} />
          { blockSearch && <>
            <div   className='search-block  '>
            
              <FormGroup>
                <Label for="exampleSearch">
                  
                </Label>
                <Input
                  style={{margin: 'auto', width :'58%',marginLeft:'18%'}}
                  id="exampleSearch"
                  name="search"
                  placeholder="Search.."
                  type="search"
              /></FormGroup>
             <span onClick={handelDeleteBlock} className='delete-block '>X</span>
          </div> 

        </>}
          <Content />
          <Footer />
    </div>
  </>
  );
}

export default App;
