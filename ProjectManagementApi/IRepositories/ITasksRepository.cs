using ProjectManagementApi.DTO;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.IRepositories
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<Tasks> GetTaskByIdAsync(int id);
        Task<Tasks> CreateTaskAsync(TasksDTO task);
        Task<Tasks> UpdateTaskAsync(TasksDTO task);
        Task<bool> DeleteTaskAsync(int id);
        Task<IEnumerable<Tasks>> GetOverdueTasksAsync();
    }
}
