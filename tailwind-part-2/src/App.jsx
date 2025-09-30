//Configuration 
//  mt- margin top | mb - margin bottom | text-xs - text size extra small 
//  bg-[#2345678] lets you create custom colors by providing the color picker

//  Plugins extending Tailwind with reusable third party plugins
//  Plugins let you register new styles for tailwind to inject into the users stylesheet using javascript instead of css

function App() {
  return(
    <div>
        <h1>Configuration of Tailwind Config</h1>
        <h1 className="text-xs lg:text-3xl">Hello Long Sentence</h1>
        <h1 className="text-xs sm:text-base md:text-lg lg:text-3xl">Another Long sentence</h1>
        <p className="mt-6 bg-[#c3ff00]">Another Another Long Sentence</p>
    </div>
  );
}

export default App
