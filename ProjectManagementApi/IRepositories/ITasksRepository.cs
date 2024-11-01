﻿using ProjectManagementApi.Model;

namespace ProjectManagementApi.IRepositories
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetAllTasksAsync();
        Task<Tasks> GetTaskByIdAsync(int id);
        Task<Tasks> CreateTaskAsync(Tasks task);
        Task<Tasks> UpdateTaskAsync(Tasks task);
        Task<bool> DeleteTaskAsync(int id);
        Task<IEnumerable<Tasks>> GetOverdueTasksAsync();
    }
}
