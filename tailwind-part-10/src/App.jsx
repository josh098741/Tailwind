//Animations and transitions
import web from './assets/web.jpg'
//translate => || -translate-y-6 || -translate-x-6
//  transition => delay-100 (0.1s) || duration-1000 || timing functions => (ease-in-out,ease,ease-in,ease-out)
//  animation => animate-pulse || animate-spin || animate-ping || animate-bounce
//  spin => scale-0 || scale-x-0 || scale-y-0 || scale-50 || scale-x-50
//  rotate => rotate-90

function App() {
  return(
    <div className="h-screen p-4 Parent">
      <div className="inline-block p-4 text-black bg-white border rounded-lg">
        <img src={web} alt="web" className='w-64 rotate-6 mb-4'/>
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is demonstration</p>
        <button className="border px-3 py-2 cursor-pointer hover:-translate-y-2 transition delay-100 duration-1000 rounded-lg bg-cyan-500 shadow-xl shadow-gray-600 text-white">Submit</button>
      </div>
      
    </div>
  );
}

export default App
