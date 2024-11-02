using ProjectManagementApi.DTO;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.IRepositories
{
    public interface IProjectRepository
    {
        Task<IEnumerable<Project>> GetAllProjectsAsync();
        Task<Project> GetProjectByIdAsync(int id);
        Task<Project> CreateProjectAsync(ProjectDTO project);
        Task<Project> UpdateProjectAsync(ProjectDTO project);
        Task<bool> DeleteProjectAsync(int id);
    }
}
