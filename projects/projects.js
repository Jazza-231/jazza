const projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const parentId = project.parentElement.id;

    history.pushState(null, null, window.location.href.split("#")[0]);
    window.location.pathname += parentId;
  });
});
