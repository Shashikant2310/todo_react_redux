import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App() {
  // function addNotes(newNote) {
  //   dispatch(addToList(newNote));
  // }
  return (
    <div>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
