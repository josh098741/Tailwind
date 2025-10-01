//Effects and Filters
//shadow || shadow-md || shadow-lg || shadow-xl || shadow-2xl || shadow-inner || shadow-cyan-500/50 => (/50) represents opacity

//Opacity
//opacity-1 => opacity-100

//blur
//blur || blur-md || blur-lg || blur-xl || blur-2xl

//brightness
//brightness-0 || brightness-50 || brightness-75 || brightness-100 || brightness-105

function App() {
  return(
    <div className="h-screen p-4 Parent">
      <div className=" inline-block text-center p-4 text-black bg-white border rounded-lg shadow-md">
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This Is My Div</p>
        <button className="px-3 brightness-200 opacity-10 py-2 bg-cyan-500 rounded-lg cursor-pointer shadow-md shadow-cyan-500/50 text-white">
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default App
