using ProjectManagementApi.IRepositories;
using ProjectManagementApi.IServices;
using ProjectManagementApi.Model;
using ProjectManagementApi.Repositories;

namespace ProjectManagementApi.Services
{

    public class TaskssService : ITaskssService
    {
        private readonly ITasksRepository _tasksRepository;

        public TaskssService(ITasksRepository tasksRepository)
        {
            _tasksRepository = tasksRepository;
        }

        public async Task<IEnumerable<Tasks>> GetAllTasksAsync() =>
            await _tasksRepository.GetAllTasksAsync();

        public async Task<Tasks> GetTaskByIdAsync(int id) =>
            await _tasksRepository.GetTaskByIdAsync(id);

        public async Task<Tasks> CreateTaskAsync(Tasks task) =>
            await _tasksRepository.CreateTaskAsync(task);

        public async Task<Tasks> UpdateTaskAsync(Tasks task) =>
            await _tasksRepository.UpdateTaskAsync(task);

        public async Task<bool> DeleteTaskAsync(int id) =>
            await _tasksRepository.DeleteTaskAsync(id);

        public async Task<IEnumerable<Tasks>> GetOverdueTasksAsync() =>
            await _tasksRepository.GetOverdueTasksAsync();
    }

}
