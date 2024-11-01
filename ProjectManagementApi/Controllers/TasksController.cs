using Microsoft.AspNetCore.Mvc;
using ProjectManagementApi.IServices;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITaskssService _tasksService;

        public TasksController(ITaskssService tasksService)
        {
            _tasksService = tasksService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _tasksService.GetAllTasksAsync();
            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskById(int id)
        {
            var task = await _tasksService.GetTaskByIdAsync(id);
            if (task == null) return NotFound();
            return Ok(task);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTask(Tasks task)
        {
            var createdTask = await _tasksService.CreateTaskAsync(task);
            return CreatedAtAction(nameof(GetTaskById), new { id = createdTask.TasksId }, createdTask);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, Tasks task)
        {
            if (id != task.TasksId) return BadRequest();
            await _tasksService.UpdateTaskAsync(task);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var result = await _tasksService.DeleteTaskAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }

        [HttpGet("overdue")]
        public async Task<IActionResult> GetOverdueTasks()
        {
            var overdueTasks = await _tasksService.GetOverdueTasksAsync();
            return Ok(overdueTasks);
        }
    }

}
