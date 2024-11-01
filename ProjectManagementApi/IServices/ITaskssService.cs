using ProjectManagementApi.Model;

namespace ProjectManagementApi.IServices
{
    public interface ITaskssService
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<Tasks> GetTaskByIdAsync(int id);
        Task<Tasks> CreateTaskAsync(Tasks task);
        Task<Tasks> UpdateTaskAsync(Tasks task);
        Task<bool> DeleteTaskAsync(int id);
        Task<IEnumerable<Tasks>> GetOverdueTasksAsync();
    }
}
