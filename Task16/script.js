const employees = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "IT",
        role: {
            title: "Software Engineer",
            level: "Senior"
        },
        contact: {
            email: "john.doe@example.com",
            phone: "123-456-7890"
        },
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Senior" },
        contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
      },
      {
        id: 3,
        name: "Hayk Hovhannisyan",
        age: 22,
        department: "IT",
        role: {
            title: "Software Enginer",
            level: "Middle"
        },
        contact: {
            email: "hayk.hovhannisyan@mail.ru",
            phone: "098425623"
        },
        skills: ["C", "C++"]
      },

];

function generateTableRows() {
    const tbody = document.querySelector("#employeeTable tbody");

    employees.forEach(employee => {
        const row = document.createElement("tr");


        ["id", "name", "age", "department"].forEach(property => {
            const cell = document.createElement("td");
            cell.textContent = employee[property];
            row.appendChild(cell);
        });


        ["title", "level"].forEach(property => {
            const cell = document.createElement("td");
            cell.textContent = employee.role[property];
            row.appendChild(cell);
        });


        ["email", "phone"].forEach(property => {
            const cell = document.createElement("td");
            cell.textContent = employee.contact[property];
            row.appendChild(cell);
        });

        const skillsCell = document.createElement("td");
        skillsCell.textContent = employee.skills.join(", ");
        row.appendChild(skillsCell);

        tbody.appendChild(row);
    });
}

generateTableRows();
