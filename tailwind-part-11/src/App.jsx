import {useState} from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState("Option 1")

  const updatedValue = (value) => {
    setSelectValue(value)
    setIsOpen(false)
  }

  return(
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a href="https://freecodecamp.org">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">This is a secondary button</button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">This is a disabled button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="flex">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita at ad dicta culpa, impedit quam iusto eveniet tempora quasi consectetur officia voluptatibus maxime magnam repudiandae, amet sint enim nulla sapiente!</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="Select">
        <div className="child" onClick={() => setIsOpen(!isOpen)}>{selectValue}</div>
        {
          isOpen && (
            <div>
              <ul className="flex flex-col divide-y border-t">
                <li className="child" onClick={() => updatedValue("Option 1")}>Option 1</li>
                <li className="child" onClick={() => updatedValue("Option 2")}>Option 2</li>
                <li className="child" onClick={() => updatedValue("Option 3")}>Option 3</li>
                <li className="child" onClick={() => updatedValue("Option 4")}>Option 4</li>
              </ul>
            </div>
          )
        }
        
      </div>
      <h1>This is another title</h1>
      <h2>This is another subtitle</h2>
    </div>
  );
}

export default App
