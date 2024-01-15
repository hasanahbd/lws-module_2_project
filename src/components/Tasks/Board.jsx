import { useState } from "react";
import Actions from "./Actions";
import NewTaskMobel from "./Addnew";
import Lists from "./Lists";
import Search from "./Search";

export default function Board() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [addTaskModel, setAddTaskModel] = useState(false);

  const handleAddTask = () => {
    setAddTaskModel(true);
  }
  const handleSaveTask = (task) => {
    setTasks([...tasks, task]);
    setAddTaskModel(false);
  }
  return (
    <>
      <section className="mb-20" id="tasks">
        {addTaskModel && <NewTaskMobel  saveClick={handleSaveTask}/>}
        <div className="container">
          <div className="p-2 flex justify-end">
            <Search />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <Actions onAddClick={handleAddTask}/>
            <div className="overflow-auto">
              <Lists tasks={tasks}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
