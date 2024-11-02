namespace ProjectManagementApi.Services
{
    using ProjectManagementApi.DTO;
    using ProjectManagementApi.IRepositories;
    using ProjectManagementApi.IServices;
    using ProjectManagementApi.Model;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectService(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        public async Task<IEnumerable<Project>> GetAllProjectsAsync() =>
            await _projectRepository.GetAllProjectsAsync();

        public async Task<Project> GetProjectByIdAsync(int id) =>
            await _projectRepository.GetProjectByIdAsync(id);

        public async Task<Project> CreateProjectAsync(ProjectDTO project) =>
            await _projectRepository.CreateProjectAsync(project);

        public async Task<Project> UpdateProjectAsync(ProjectDTO project) =>
            await _projectRepository.UpdateProjectAsync(project);

        public async Task<bool> DeleteProjectAsync(int id) =>
            await _projectRepository.DeleteProjectAsync(id);
    }

}
