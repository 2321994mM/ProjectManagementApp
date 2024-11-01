using Microsoft.AspNetCore.Mvc;

namespace ProjectManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimpleController : ControllerBase
    {
        [HttpGet("projects")]
        public IActionResult GetProjects()
        {
            return Ok(new[] {
                new { ProjectId = 1, ProjectName = "Project A" },
                new { ProjectId = 2, ProjectName = "Project B" }
            });
        }

        [HttpGet("tasks")]
        public IActionResult GetTasks()
        {
            return Ok(new[] {
                new { TaskId = 1, TaskName = "Task 1", ProjectId = 1 },
                new { TaskId = 2, TaskName = "Task 2", ProjectId = 2 }
            });
        }
    }
}
