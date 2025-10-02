

function App() {
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
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Checkbox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h1>This is another title</h1>
      <h2>This is another subtitle</h2>
    </div>
  );
}

export default App
