// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      { title: "Project 1", description: "Description for project 1" },
      { title: "Project 2", description: "Description for project 2" },
      { title: "Project 3", description: "Description for project 3" },
    ];
  
    const projectList = document.querySelector('.project-list');
  
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectList.appendChild(projectCard);
    });
  });

  
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    alert('Thank you for reaching out!'); // Replace with your email service or backend integration
  });

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  