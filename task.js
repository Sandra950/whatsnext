document.addEventListener("DOMContentLoaded", () => {
  const loginNotice = document.getElementById("loginNotice");
  const taskSection = document.getElementById("taskSection");
  const logoutBtn = document.getElementById("logoutBtn");
  const form = document.getElementById("taskForm");
  const taskName = document.getElementById("taskName");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const list = document.getElementById("taskList");

  // ✅ Check login
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    loginNotice.classList.remove("d-none");
    return;
  } else {
    taskSection.classList.remove("d-none");
    logoutBtn.classList.remove("d-none");
  }

  // ✅ Logout functionality
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "SignIn.html";
  });

  // ✅ Load saved tasks from localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userKey = `tasks_${currentUser?.email || "guest"}`;
  let tasks = JSON.parse(localStorage.getItem(userKey)) || [];

  // Render saved tasks
  tasks.forEach(renderTask);

  // ✅ Add new task
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = taskName.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;
    if (!name || !date || !time) return;

    const newTask = { name, date, time };
    tasks.push(newTask);
    localStorage.setItem(userKey, JSON.stringify(tasks));

    renderTask(newTask);
    form.reset();
  });

  // ✅ Render task function
  function renderTask(task) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <strong>${task.name}</strong>
        <small class="text-muted d-block">${task.date} at ${task.time}</small>
      </div>
      <div>
        <button class="btn btn-sm btn-warning edit-btn me-2">✎</button>
        <button class="btn btn-sm btn-danger delete-btn">✖</button>
      </div>
    `;
    list.appendChild(li);

    // Countdown alert
    const taskDateTime = new Date(`${task.date}T${task.time}`);
    const countdown = setInterval(() => {
      const diff = taskDateTime - new Date();
      if (diff <= 0) {
        clearInterval(countdown);
        alert(`⏰ Time for: "${task.name}"`);
      }
    }, 1000);

    // Edit task
    li.querySelector(".edit-btn").addEventListener("click", () => {
      const newName = prompt("Edit your task:", task.name);
      if (newName) {
        task.name = newName;
        localStorage.setItem(userKey, JSON.stringify(tasks));
        li.querySelector("strong").textContent = newName;
      }
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
      list.removeChild(li);
      tasks = tasks.filter(t => !(t.name === task.name && t.date === task.date && t.time === task.time));
      localStorage.setItem(userKey, JSON.stringify(tasks));
    });
  }
});
