//Typography

function App() {
  return(
    <div className="whitespace-nowrap">
      <h1 className="text-3xl italic underline uppercase">Title 1</h1>
      <h2 className="text-2xl line-through mb-5 decoration-double decoration-red-300">Title 2</h2>
      <h3 className="text-xl overline ">Title 3</h3>
      <p className="text-base underline decoration-wavy decoration-4 underline-offset-8 mb-10">A regular paragraph</p>
      <p className="text-sm capitalize">A description Paragraph</p>
      <p className="note text-xs lowercase">A little Note</p>
      <p className="truncate">This is a long sentense with a lot of words tha explain that truncatte will truncate my sentence</p>
    </div>
  );
}

export default App
