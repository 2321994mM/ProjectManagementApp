using Microsoft.EntityFrameworkCore;
using ProjectManagementApi.Data;
using ProjectManagementApi.Enum;
using ProjectManagementApi.IRepositories;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Repositories
{
    public class TasksRepository : ITasksRepository
    {
        private readonly ApplicationDbContext _context;

        public TasksRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tasks>> GetAllTasksAsync() =>
            await _context.Tasks.Include(t => t.Project).ToListAsync();

        public async Task<Tasks> GetTaskByIdAsync(int id) =>
            await _context.Tasks.Include(t => t.Project).FirstOrDefaultAsync(t => t.TasksId == id);

        public async Task<Tasks> CreateTaskAsync(Tasks task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return task;
        }

        public async Task<Tasks> UpdateTaskAsync(Tasks task)
        {
            _context.Tasks.Update(task);
            await _context.SaveChangesAsync();
            return task;
        }

        public async Task<bool> DeleteTaskAsync(int id)
        {
            var task = await GetTaskByIdAsync(id);
            if (task == null) return false;

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Tasks>> GetOverdueTasksAsync() =>
            await _context.Tasks
                .Where(t => t.EndDate < DateTime.Now && t.TasksStatusId != (int)TasksStatusEnum.Completed)
                .ToListAsync();
    }

}
