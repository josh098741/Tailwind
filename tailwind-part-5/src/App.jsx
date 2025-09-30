//Flex
//  flex || flex-row || flex-col || flex-row-reverse => the elements  are reversed in direction 
// || grow => takes most of the space
//  basis => assigns width based on fractions
// Justify || justify-center || justify-start - left || justify-end - right || justify-between - space between || justify-evenly - equal space between
// align || items-center || items-end -left || 

function App() {
  return(
    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-row">
        <div className="grow">Main Content</div>
        <div className="flex flex-col">
          <div>Side Bar</div>
          <div>Menu</div>
        </div>
      </div>

      <div className="bg-slate-500">Basis</div>
      <div>Header</div>
      <div className="flex">
        <div className="basis-1/4 bg-red-300">Sidebar</div>
        <div className="bg-green-400 basis-2/4">Main Content</div>
        <div className="bg-blue-300 basis-1/4">SideBar</div>
      </div>

      <div className="underline font-bold bg-black text-white mt-5">Size Auto Adjusting</div>
      <div>Header</div>
      <div className="flex flex-col md:flex-row mb-5">
        <div className="md:w-32 bg-sky-500">Sidebar</div>
        <div className="w-full bg-red-600">Main Content</div>
      </div>

      <div className="text-bold underline">Flex Wrap</div>
      <div>Header</div>
      <div className="flex flex-col md:flex-row mb-5">
        <div className="flex flex-wrap w-full">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">04</div>
          <div className="w-32 grow">05</div>
          <div className="w-32 grow">06</div>
        </div>
      </div>

      <div>Justify content</div>
      <div>Header</div>
      <div className="flex items-center justify-evenly">
        <div>Sidebar</div>
        <div>
          <h1>Main Content</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat est quasi, tempora magni aperiam hic. Dolorum voluptatum odio nihil deserunt nulla atque, asperiores repellendus, accusantium doloremque ea accusamus nobis.</p>
        </div>
        <div>Another side Bar</div>
      </div>
    </div>
  );
}

export default App
