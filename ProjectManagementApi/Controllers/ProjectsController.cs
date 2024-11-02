using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProjectManagementApi.DTO;
using ProjectManagementApi.IServices;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService _projectService;
        private readonly IMapper _mapper;

        public ProjectsController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProjects()
        {
            var projects = await _projectService.GetAllProjectsAsync();
            return Ok(projects);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjectById(int id)
        {
            var project = await _projectService.GetProjectByIdAsync(id);
            if (project == null) return NotFound();
            return Ok(project);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject(ProjectDTO projectDto)
        {

           
            var createdProject = await _projectService.CreateProjectAsync(projectDto);
            return CreatedAtAction(nameof(GetProjectById), new { id = createdProject.ProjectId }, createdProject);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject(int id, ProjectDTO projectDto)
        {
            var project = new Project
            {
                ProjectName = projectDto.ProjectName,
                Description = projectDto.Description,
                Budget = projectDto.Budget,
                EndDate = projectDto.EndDate,
                OwnerId = projectDto.OwnerId,
                StartDate = projectDto.StartDate,
                Status = projectDto.Status,

            };
            if (id != project.ProjectId) return BadRequest();
            await _projectService.UpdateProjectAsync(project);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            var result = await _projectService.DeleteProjectAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }

}
