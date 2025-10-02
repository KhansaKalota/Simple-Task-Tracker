// Task list: array of objects (description + isCompleted)
let taskList = [
  { description: "Finish homework",    isCompleted: true  },
  { description: "Study for quiz",     isCompleted: false },
  { description: "Wash dishes",        isCompleted: true  },
  { description: "Practice coding",    isCompleted: false },
  { description: "Call mom",           isCompleted: true  }
];

// 1) Initialize counter as the assignment asks
let completedTasksCount = 0;

// 2) Function that loops through tasks, checks completion, increments counter and logs each completed task
function countCompletedTasks(tasks) {
  // reset to 0 so repeated calls don't double-count
  completedTasksCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    // if this task is completed
    if (tasks[i].isCompleted) {
      completedTasksCount++; // increase the counter
      console.log(`Task '${tasks[i].description}' is complete!`);
    }
  }
}

// 3) Function that returns the summary string (takes totalTasks as argument)
function printTaskSummary(totalTasks) {
  // calculate percentage (careful with division)
  const percentage = (completedTasksCount / totalTasks) * 100;
  // round to two decimal places (optional)
  const rounded = Math.round(percentage * 100) / 100;
  return `You have completed ${completedTasksCount} out of ${totalTasks} tasks (${rounded}%).`;
}

// --- Run the tracker ---
countCompletedTasks(taskList);                     // runs the loop + logs completed items
console.log(printTaskSummary(taskList.length));    // prints the returned summary string