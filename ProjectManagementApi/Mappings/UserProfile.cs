namespace ProjectManagementApi.Mappings
{
    using AutoMapper;
    using ProjectManagementApi.DTO;
    using ProjectManagementApi.Model;

    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<Project, ProjectDTO>().ReverseMap();
        }
    }
}
