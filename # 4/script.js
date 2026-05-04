const employees = [
  { id: 1, name: 'Alice Johnson', experienceYears: 2, skills: ['HTML', 'CSS', 'JavaScript'] },
  { id: 2, name: 'Bob Smith', experienceYears: 5, skills: ['Java', 'Spring', 'SQL'] },
  { id: 3, name: 'Carol White', experienceYears: 7, skills: ['Python', 'Django', 'JavaScript', 'React'] },
  { id: 4, name: 'David Brown', experienceYears: 1, skills: ['HTML', 'CSS'] },
  { id: 5, name: 'Eva Martinez', experienceYears: 3, skills: ['Java', 'Kotlin', 'Android'] },
  { id: 6, name: 'Frank Wilson', experienceYears: 4, skills: ['C#', '.NET', 'Azure'] },
  { id: 7, name: 'Grace Lee', experienceYears: 6, skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'] },
  { id: 8, name: 'Henry Taylor', experienceYears: 8, skills: ['Go', 'Docker', 'Kubernetes'] }
];

const searchNameInput = document.getElementById('searchName');
const searchSkillInput = document.getElementById('searchSkill');
const filterExperienceSelect = document.getElementById('filterExperience');
const btnSort = document.getElementById('btnSort');
const btnReset = document.getElementById('btnReset');
const employeeCountParagraph = document.getElementById('employeeCount');
const employeeListDiv = document.getElementById('employeeList');

let sortDirection = 1;

function filterEmployees() {
  const nameQuery = searchNameInput.value.trim().toLowerCase();
  const skillQuery = searchSkillInput.value.trim().toLowerCase();
  const experienceFilter = filterExperienceSelect.value;

  return employees.filter(emp => {
    if (nameQuery && !emp.name.toLowerCase().includes(nameQuery)) {
      return false;
    }

    if (skillQuery && !emp.skills.some(skill => skill.toLowerCase().includes(skillQuery))) {
      return false;
    }

    if (experienceFilter === 'junior' && emp.experienceYears >= 3) return false;
    if (experienceFilter === 'middle' && (emp.experienceYears < 3 || emp.experienceYears > 5)) return false;
    if (experienceFilter === 'senior' && emp.experienceYears <= 5) return false;

    return true;
  });
}

function sortEmployees(arr) {
  return arr.slice().sort((a, b) => {
    return a.name.localeCompare(b.name) * sortDirection;
  });
}

function drawList() {
  const filtered = filterEmployees();
  const sorted = sortEmployees(filtered);

  employeeCountParagraph.innerText = `Number of employees: ${filtered.length}`;

  const html = sorted.map(emp => {
    const expColor = emp.experienceYears < 3 ? 'red' :
                     emp.experienceYears <= 5 ? 'orange' : 'green';

    const skillsHtml = emp.skills
      .map(skill => `<span>${skill}</span>`)
      .join('');

    return `
      <div class="employee-card">
        <div class="employee-name">${emp.name}</div>
        <div class="employee-experience" style="color: ${expColor};">
          ${emp.experienceYears} year${emp.experienceYears !== 1 ? 's' : ''} exp.
        </div>
        <div class="employee-skills">${skillsHtml}</div>
      </div>
    `;
  }).join('');

  employeeListDiv.innerHTML = html;
}

searchNameInput.addEventListener('input', drawList);
searchSkillInput.addEventListener('input', drawList);
filterExperienceSelect.addEventListener('change', drawList);

btnSort.addEventListener('click', () => {
  sortDirection *= -1; 
  drawList();
});

btnReset.addEventListener('click', () => {
  searchNameInput.value = '';
  searchSkillInput.value = '';
  filterExperienceSelect.value = 'all';
  drawList();
});

drawList();