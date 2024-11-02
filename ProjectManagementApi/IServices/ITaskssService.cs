using ProjectManagementApi.DTO;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.IServices
{
    public interface ITaskssService
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<Tasks> GetTaskByIdAsync(int id);
        Task<Tasks> CreateTaskAsync(TasksDTO task);
        Task<Tasks> UpdateTaskAsync(TasksDTO task);
        Task<bool> DeleteTaskAsync(int id);
        Task<IEnumerable<Tasks>> GetOverdueTasksAsync();
    }
}
