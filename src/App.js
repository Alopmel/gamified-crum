
import './App.css';
// import Progress from './components/progress/Progress';
// import TasksList from './components/taskslist/TasksList';
// import Header from './components/header/Header';
// import Done from './components/done/Done';
import { TaskBanner } from './components/TaskBanner'
import Header from './components/Header';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import DragItem from "./components/drag-item";
import DropItem from "./components/drop-item";

const task = {
  
    1: {
      task: "6:30 AM It's time to get up and start planning the day! If you keep sleeping you don't score points." ,
      points: 10,
      done : false,
      progress: false,
      state: "TO DO"
    },
    2: {
      task: "Breakfast is one of the most important things. Make happy all your colleagues and prepare breakfast!" ,
      points: 15,
      done : false,
      progress: false,
      state: "TO DO"
    },
    3: {
      task: "We go on an expedition! Someone has to prepare everything we need to survive out there" ,
      points: 15,
      done : false,
      progress: false,
      state: "TO DO"
    },
    4: {
      task: "We have very little information about Mars, please collect photos about the environment to help us conduct research." ,
      points: 20,
      done : false,
      progress: false,
      state: "TO DO"
    },
    5 :{
      task: "we need someone to stay at the base maintaining communication with those who have gone on an expedition" ,
      points: 18,
      done : false,
      progress: false,
      state: "TO DO"
    },
    6 :{
      task: "0ne of your colleagues has gone out to investigate and we have lost connection with him. Someone will have to go get it." ,
      points: 30,
      done : false,
      progress: false,
      state: "TO DO"
    },
    7: {
      task: " One of our Manned Mars rovers is out of order and we need it as soon as possible. Who wants to fix it?" ,
      points: 25,
      done : false,
      progress: false,
      state: "TO DO"
    },
    8: {
      task: "Being so far from the family for so long can be depressing, gather all your companions and distract them with a game or whatever you can think of!",
      points: 15, 
      done : false,
      progress: false,
      state: "TO DO"
    },
    9: {
      task: "You have to start farming on Mars. We will send all the information about this project to whoever wants to start." ,
      points: 25,
      done : false,
      progress: false,
      state: "TO DO"
    },
    10: {
      task: "Don't forget to exercise. It is a fundamental part to maintain good physical and mental health on Mars" ,
      points: 25,
      done : false,
      progress: false,
      state: "TO DO"
    },
    11: {
      task: "It is time for dinner, which colleague will prepare a pleasant evening for all?" ,
      points: 25,
      done : false,
      progress: false,
      state: "TO DO"
    },

}
  
function App() {

  const [userName, setUserName] = useState('John')
  
   const [allValues, setValue] = useState(task);
  return (
   
      <div className="App">
          <Header title="Gamized Scrum " />
          <TaskBanner userName={userName}/>

          <div>
            <h2>Total points today:&nbsp;            
              {Object.keys(allValues)
                  .map(key => ({ id: key, ...allValues[key] }))
                  //filter tasks with state = DONE
                  .filter(all => all.state === "DONE")
                  //map to extract points field
                  .map((task) => task.points)
                  //use reduce to calculate the sum of all points
                  .reduce(function (previous, current) {
                    return previous + current;
                }, 0)
              }
            </h2>
          </div>

        <div className="box">
          <DropItem
            heading="TO DO"
            onDrop={id => {
            const currentAll = { ...allValues[id] };
            currentAll.state = "TO DO";
            setValue({ ...allValues, ...{ [id]: currentAll } });
          }}
         >
         {Object.keys(allValues)
            .map(key => ({ id: key, ...allValues[key] }))
            .filter(all => all.state === "TO DO")
            .map(all => <DragItem id={all.id} data={all} key={all.id} />)}
        </DropItem>
        <DropItem
          heading="PROGRESS"
          onDrop={id => {
            const currentAll = { ...allValues[id] };
            currentAll.state = "PROGRESS";
            setValue({ ...allValues, ...{ [id]: currentAll } });
          }}
        >
          {Object.keys(allValues)
            .map(key => ({ id: key, ...allValues[key] }))
            .filter(all => all.state === "PROGRESS")
            .map(all => <DragItem id={all.id} data={all} key={all.id} />)}
        </DropItem>
        <DropItem
          heading="DONE"
          onDrop={id => {
            const currentAll = { ...allValues[id] };
            currentAll.state = "DONE";
            setValue({ ...allValues, ...{ [id]: currentAll } });
          }}
        >
          {Object.keys(allValues)
            .map(key => ({ id: key, ...allValues[key] }))
            .filter(all => all.state === "DONE")
            .map(all => <DragItem id={all.id} data={all} key={all.id} />)}
        </DropItem>

      </div>
    
      
    </div>

    
  );
}

export default App;
