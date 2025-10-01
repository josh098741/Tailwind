

function App() {
  return(
    <div className="h-screen text-white bg-slate-900 Parent">
      <header className="w-full border-2 border-l-8  py-4">Header</header>
      <div className="divide-y divide-slate-200 my-5">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
      </div>
      <div className="my-5"> 
        <input type="text" className="border-2 border-rose-600 border-double outline-none"/>
      </div>
      <div className="my-5 grid grid-cols-3 divide-x divide-red-500 divide-double">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="my-5">
        <button className="outline mx-4 outline-offset-2 outline-4">Button A</button>
        <button className="outline mx-5 outline-offset-4 outline-4">Button B</button>
        <button className="outline outline-offset-8 outline-4 outline-blue-400">Button C</button>
      </div>
      <div>
        <button className="ring-offset-2 ring-4">Button A</button>
        <button className="mx-5 hover:ring-offset-2 ring-8">Button B</button>
      </div>
    </div>
  );
}

export default App
