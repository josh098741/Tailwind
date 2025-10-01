//Layouts
import table from './assets/table.jpg'
import web from './assets/web.jpg'

function App() {
  return(
    <div className="h-screen bg-slate-900 text-white Parent">
      <div className="container px-2">
        <img className="w-64 float-left" src={table}/>
        <img className="w-32 float-right" src={web} />
        <p className="clear-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda fugiat obcaecati eaque, aliquam perferendis quis quam rerum voluptate eligendi excepturi voluptas placeat quo vitae. Aspernatur velit dignissimos eligendi eos!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum, animi modi ex, rerum quisquam exercitationem aliquid veniam reiciendis itaque, voluptate repudiandae adipisci fugit voluptatibus voluptatem sit est optio facere?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum recusandae magnam eos nostrum illo quas nam voluptates reiciendis. Architecto, vero consequatur aperiam cum tenetur nesciunt dolorum eligendi earum velit?</p>
      </div>
      <div className="container px-2">
        <div className="relative bg-red-500 rounded-lg p-8 w-32 h-32">
          <div className="absolute -top-10 left-4 w-24 h-24 bg-green-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default App
