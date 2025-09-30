//  Spaces and sizes
//  Padding is the space around an element and its border
//  py || padding on the y - axis && px || padding on the x - axis
//
function App() {
  return(
    <div>
      <p className="bg-red-500 text-white font-bold text-3xl p-6">Padding Around</p>
      <p className="bg-lime-400 text-white font-bold text-3xl pl-9">Padding Left</p>
      <p className="bg-slate-400 pt-11 text-white">Padding Top</p>
      <p className="bg-emerald-400 pb-11">Padding Bottom</p>
      <p className="bg-black text-white py-11">Padding Y Axis</p>
      <p className="bg-blue-400 text-white font-bold px-11">Padding X axis</p>
      <p className="bg-red-200 m-5 text-center text-white">Margin Around</p>
      <p className="bg-slate-800 text-white ml-5 text-center">Margin Left</p>
      <p className="bg-lime-200 text-center mr-5">Margin Right</p>
      <p className="bg-gray-800 text-white mx-5">Margin X Axis</p>
      <p className="my-5 text-white bg-slate-600">Margin Y Axis</p>
      <div>
        <div class="w-36 h-16 bg-sky-400 opacity-20"></div>
        <div class="bg-sky-300 -mt-8 w-28 h-12 ml-4">-mt-8</div>
      </div>
      <div className="flex space-x-5 space-y-5">
        <div className="w-1/6 bg-red-500 min-h-screen">Side Bar</div>
        <div className="w-5/6 bg-green-500 min-w-min">Main Content</div>
      </div>
    </div>
  );
}

export default App
