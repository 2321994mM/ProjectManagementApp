using Microsoft.EntityFrameworkCore;
using ProjectManagementApi.Data;
using ProjectManagementApi.DTO;
using ProjectManagementApi.IRepositories;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly ApplicationDbContext _context;

        public ProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Project>> GetAllProjectsAsync() =>
            await _context.Projects.ToListAsync();

        public async Task<Project> GetProjectByIdAsync(int id) =>
            await _context.Projects.FindAsync(id);

        public async Task<Project> CreateProjectAsync(ProjectDTO projectDto)
        {
            try
            {
                var project = new Project
                {
                    ProjectName = projectDto.ProjectName,
                    Description = projectDto.Description,
                    Budget = projectDto.Budget,
                    EndDate = projectDto.EndDate,
                    OwnerId = projectDto.OwnerId,
                    StartDate = projectDto.StartDate,
                    Status = projectDto.Status,

                };
                _context.Projects.Add(project);
                await _context.SaveChangesAsync();
                return project;

            }
            catch (Exception ex) {

                return new Project();
            }
           
        }

        public async Task<Project> UpdateProjectAsync(ProjectDTO projectDto)
        {
            var project = new Project
            {
                ProjectId = projectDto.ProjectId,
                ProjectName = projectDto.ProjectName,
                Description = projectDto.Description,
                Budget = projectDto.Budget,
                EndDate = projectDto.EndDate,
                OwnerId = projectDto.OwnerId,
                StartDate = projectDto.StartDate,
                Status = projectDto.Status,

            };
            _context.Projects.Update(project);
            await _context.SaveChangesAsync();
            return project;
        }

        public async Task<bool> DeleteProjectAsync(int id)
        {
            var project = await GetProjectByIdAsync(id);
            if (project == null) return false;

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();
            return true;
        }
    }

}
