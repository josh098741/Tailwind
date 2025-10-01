//  Grid

function App() {
  return(
    <div className="Parent min-h-screen text-white bg-slate-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-3">
          <div className="bg-red-400 p-6 rounded-lg  col-span-2">1</div>
          <div className="p-6 rounded-lg bg-sky-500">2</div>
          <div className="p-6 rounded-lg bg-sky-500">3</div>
          <div className="p-6 rounded-lg bg-red-400 col-span-2">4</div>
          <div className="p-6 rounded-lg bg-sky-500">5</div>
          <div className="p-6 rounded-lg bg-sky-500">6</div>
          <div className="p-6 rounded-lg bg-sky-500">6</div>
        </div>
        <div class="grid grid-cols-6 gap-4 my-4">
          <div class="col-start-2 bg-sky-300 p-6 col-span-4 rounded-lg">01</div>
          <div class="col-start-1 bg-sky-300 p-6 col-end-4 rounded-lg">02</div>
          <div class="col-end-7 bg-sky-300 p-6 col-span-2 rounded-lg">03</div>
          <div class="col-start-1 bg-sky-300 p-6 col-end-7 rounded-lg">04</div>
        </div>
        <div class="grid grid-flow-col grid-rows-4 gap-4 my-4">
          <div class="bg-sky-300 p-6 rounded-lg">01</div>
          <div class="bg-sky-300 p-6 rounded-lg">02</div>
          <div class="bg-sky-300 p-6 rounded-lg">03</div>
          <div class="bg-sky-300 p-6 rounded-lg">04</div>
          <div class="bg-sky-300 p-6 rounded-lg">05</div>
          <div class="bg-sky-300 p-6 rounded-lg">06</div>
        </div>
        <div class="grid grid-flow-col grid-rows-4 gap-4 my-4">
          <div class="bg-sky-300 p-6 rounded-lg row-span-2">01</div>
          <div class="bg-sky-300 p-6 rounded-lg">02</div>
          <div class="bg-sky-300 p-6 rounded-lg">03</div>
          <div class="bg-sky-300 p-6 rounded-lg">04</div>
          <div class="bg-sky-300 p-6 rounded-lg">05</div>
          <div class="bg-sky-300 p-6 rounded-lg row-span-2">06</div>
          <div class="bg-sky-300 p-6 rounded-lg">07</div>
          <div class="bg-sky-300 p-6 rounded-lg">08</div>
          <div class="bg-sky-300 p-6 rounded-lg">09</div>
          <div class="bg-sky-300 p-6 rounded-lg">10</div>
          <div class="bg-sky-300 p-6 rounded-lg">11</div>
          <div class="bg-sky-300 p-6 rounded-lg">12</div>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 my-4">
          <div class="bg-red-300 col-span-2 p-6 rounded-lg">01</div>
          <div class="bg-slate-300 col-span-3 p-6 rounded-lg">02</div>
          <div class="bg-sky-300 p-6 rounded-lg">03</div>
          <div class="bg-sky-300 p-6 rounded-lg row-span-2">04</div>
          <div class="bg-sky-300 p-6 rounded-lg">05</div>
          <div class="bg-sky-300 p-6 rounded-lg">06</div>
          <div class="bg-red-300 p-6 rounded-lg col-span-2">07</div>
          <div class="bg-sky-300 p-6 rounded-lg">08</div>
          <div class="bg-sky-300 p-6 rounded-lg">09</div>
          <div class="bg-sky-300 p-6 rounded-lg">10</div>
          <div class="bg-sky-300 p-6 rounded-lg">11</div>
          <div class="bg-sky-300 p-6 rounded-lg">12</div>
        </div>
      </div>
    </div>
  );
}

export default App
