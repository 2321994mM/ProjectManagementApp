using ProjectManagementApi.Model;

namespace ProjectManagementApi.IRepositories
{
    public interface IUserRepository
    {
        User GetUserByUsername(string username);

    }
}
