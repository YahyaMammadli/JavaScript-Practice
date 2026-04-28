const employees = [
  { 
    id: 1, 
    name: "Ethan Reynolds", 
    position: "Frontend Developer", 
    department: "Web Development", 
    skills: ["JavaScript", "React", "CSS"], 
    experienceYears: 3, 
    isRemote: true 
  },
  {
   id: 2, 
   name: "Sophia Martinez", 
   position: "Backend Developer",
   department: "Server Development", 
   skills: ["Node.js", "Express", "MongoDB"], 
   experienceYears: 5, 
   isRemote: false 
  },
  { 
   id: 3, 
   name: "Liam Johnson", 
   position: "DevOps Engineer", 
   department: "Infrastructure", 
   skills: ["Docker", "Kubernetes", "AWS"], 
   experienceYears: 4, 
   isRemote: true 
  },
  { 
   id: 4, 
   name: "Olivia Brown", 
   position: "QA Engineer",
   department: "Quality Assurance", 
   skills: ["Selenium", "Cypress", "Test Automation"], 
   experienceYears: 2, 
   isRemote: false 
  },
  { 
   id: 5, 
   name: "Noah Wilson", 
   position: "Project Manager",
   department: "Management", 
   skills: ["Agile", "Scrum", "Communication"], 
   experienceYears: 6, 
   isRemote: true 
  },
  { 
   id: 6, 
   name: "Emma Davis", 
   position: "Senior Frontend Developer",
   department: "Web Development", 
   skills: ["TypeScript", "React", "Redux", "GraphQL"], 
   experienceYears: 7, 
   isRemote: false
  },
  { 
   id: 7, 
   name: "James Thompson",
   position: "Data Scientist", 
   department: "Data Science", 
   skills: ["Python", "SQL", "Machine Learning"], 
   experienceYears: 4, 
   isRemote: true 
  },
  { 
   id: 8, 
   name: "Ava Garcia",
   position: "UX Designer",
   department: "Design", 
   skills: ["Figma", "Sketch", "User Research"], 
   experienceYears: 5, 
   isRemote: true 
  },
  { 
   id: 9, 
   name: "William Anderson",
   position: "Full Stack Developer",
   department: "Web Development", 
   skills: ["JavaScript", "Node.js", "React", "MongoDB"], 
   experienceYears: 6, 
   isRemote: false 
  },
  { 
   id: 10, 
   name: "Isabella Taylor",
   position: "Security Engineer",
   department: "Security", 
   skills: ["Penetration Testing", "Linux", "Network Security"], 
   experienceYears: 8, 
   isRemote: true
  },
  { 
   id: 11, 
   name: "Benjamin Hernandez",
   position: "Mobile Developer", 
   department: "Mobile Development", 
   skills: ["Swift", "Kotlin", "Flutter"], 
   experienceYears: 3, isRemote: false 
  },
  { 
   id: 12, 
   name: "Mia White",
   position: "Cloud Architect",
   department: "Cloud Engineering", 
   skills: ["Azure", "Terraform", "CI/CD"], 
   experienceYears: 9, 
   isRemote: true 
  },
  { 
   id: 13, 
   name: "Lucas Moore",
   position: "Database Administrator", 
   department: "Data Management", 
   skills: ["PostgreSQL", "Redis", "Database Design"], 
   experienceYears: 6, 
   isRemote: false 
  },
  { 
   id: 14, 
   name: "Charlotte Clark",
   position: "Product Owner", 
   department: "Management", 
   skills: ["Jira", "Roadmapping", "Stakeholder Management"], 
   experienceYears: 5, 
   isRemote: true 
  },
  { 
   id: 15, 
   name: "Henry Lewis",
   position: "ML Engineer",
   department: "Data Science", 
   skills: ["TensorFlow", "PyTorch", "Computer Vision"], 
   experienceYears: 4, 
   isRemote: true 
  },
  { 
   id: 16, 
   name: "Amelia Hall", 
   position: "Technical Writer",
   department: "Documentation", 
   skills: ["Markdown", "API Documentation", "DITA"], 
   experienceYears: 2, 
   isRemote: true 
  },
  { 
   id: 17, 
   name: "Alexander Walker",
   position: "Site Reliability Engineer", 
   department: "Infrastructure", 
   skills: ["Prometheus", "Grafana", "Go"], 
   experienceYears: 7, 
   isRemote: false 
  },
  { 
   id: 18, 
   name: "Harper Young",
   position: "Scrum Master", 
   department: "Agile Coaching", 
   skills: ["Scrum", "Kanban", "Facilitation"], 
   experienceYears: 4, 
   isRemote: true 
  },
  { 
   id: 19, 
   name: "Jack King",
   position: "Embedded Systems Engineer",
   department: "IoT", 
   skills: ["C++", "RTOS", "ARM Cortex"], 
   experienceYears: 10, 
   
   isRemote: false 
  },
  { 
   id: 20, 
   name: "Evelyn Scott",
   position: "UX Researcher",
   department: "Design", 
   skills: ["Usability Testing", "A/B Testing", "Persona Creation"], 
   experienceYears: 3, 
   isRemote: true 
  }
];

let list = document.querySelector("#list");

function renderEmployees(arr) {
  list.innerHTML = '';
  arr.forEach(item => {
    let card = document.createElement("div");
    card.className = 'worker';
    card.innerHTML = `
      <h2>${item.name}</h2>
      <h3>${item.position}</h3>
      <h3>${item.department}</h3>
      <h3>${item.skills.join(" - ")}</h3>
      <h3>${item.experienceYears} year(s)</h3>
      <h3>${item.isRemote ? "remote" : "offline"}</h3>
    `;
    list.appendChild(card);
  });
}

renderEmployees(employees);

document.querySelector("#showAll").addEventListener('click', () => {
  renderEmployees(employees);
});

document.querySelector("#btn1").addEventListener('click', () => {
  renderEmployees(employees.filter(e => e.isRemote));
});

document.querySelector("#btn2").addEventListener('click', () => {
  renderEmployees(employees.filter(e => e.experienceYears > 3));
});

document.querySelector("#btn3").addEventListener('click', () => {
  renderEmployees(employees.filter(e => e.department === "Web Development"));
});

document.querySelector("#btn4").addEventListener('click', () => {
  renderEmployees(employees.filter(e => e.skills.includes("React")));
});

document.querySelector("#btn5").addEventListener('click', () => {
  renderEmployees([...employees].sort((a, b) => a.experienceYears - b.experienceYears));
});

document.querySelector("#btn6").addEventListener('click', () => {
  renderEmployees([...employees].sort((a, b) => b.experienceYears - a.experienceYears));
});

document.querySelector("#btn7").addEventListener('click', () => {
  renderEmployees(
    employees.filter(e => e.experienceYears >= 4).sort((a, b) => a.name.localeCompare(b.name))
  );
});

document.querySelector("#btn8").addEventListener('click', () => {
  let names = employees.filter(e => e.position === "Backend Developer").map(e => e.name);
  list.innerHTML = '';
  let ul = document.createElement("ul");
  ul.className = "names-list";
  names.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });
  list.appendChild(ul);
});

document.querySelector("#btn9").addEventListener('click', () => {
  let maxExp = Math.max(...employees.map(e => e.experienceYears));
  renderEmployees(employees.filter(e => e.experienceYears === maxExp));
});

document.querySelector("#btn10").addEventListener('click', () => {
  renderEmployees(employees.filter(e => e.skills.length > 2));
});

document.querySelector("#btn11").addEventListener('click', () => {
  let sorted = [...employees].sort((a, b) => a.department.localeCompare(b.department) || a.experienceYears - b.experienceYears);
  renderEmployees(sorted);
});

document.querySelector("#btn12").addEventListener('click', () => {
  let uniqueSkills = [];
  employees.forEach(emp => {
    emp.skills.forEach(skill => {
      if (!uniqueSkills.includes(skill)) uniqueSkills.push(skill);
    });
  });
  list.innerHTML = '';
  let ul = document.createElement("ul");
  uniqueSkills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
  list.appendChild(ul);
});

document.querySelector("#btn13").addEventListener('click', () => {
  renderEmployees(
    employees.filter(e => e.isRemote).sort((a, b) => b.experienceYears - a.experienceYears)
  );
});

document.querySelector("#btn14").addEventListener('click', () => {
  let grouped = {};
  employees.forEach(emp => {
    if (!grouped[emp.department]) grouped[emp.department] = [];
    grouped[emp.department].push(emp);
  });
  list.innerHTML = '';
  for (let dept in grouped) {
    let groupDiv = document.createElement("div");
    groupDiv.className = "department-group";
    groupDiv.innerHTML = `<h3>${dept}</h3>`;
    let deptGrid = document.createElement("div");
    deptGrid.className = "department-grid";
    deptGrid.style.display = "grid";
    deptGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(240px, 1fr))";
    deptGrid.style.gap = "20px";
    grouped[dept].forEach(emp => {
      let card = document.createElement("div");
      card.className = "worker";
      card.innerHTML = `
        <h2>${emp.name}</h2>
        <h3>${emp.position}</h3>
        <h3>${emp.department}</h3>
        <h3>${emp.skills.join(" - ")}</h3>
        <h3>${emp.experienceYears} year(s)</h3>
        <h3>${emp.isRemote ? "remote" : "offline"}</h3>
      `;
      deptGrid.appendChild(card);
    });
    groupDiv.appendChild(deptGrid);
    list.appendChild(groupDiv);
  }
});

document.querySelector("#btn15").addEventListener('click', () => {
  let avg = (employees.reduce((sum, e) => sum + e.experienceYears, 0) / employees.length).toFixed(1);
  list.innerHTML = '';
  let p = document.createElement("p");
  p.className = "avg-text";
  p.textContent = "Average experience: " + avg + " years";
  list.appendChild(p);
});

document.querySelector("#btn16").addEventListener('click', () => {
  renderEmployees(
    employees.filter(e => e.skills.includes("JavaScript") || e.skills.includes("Node.js"))
  );
});