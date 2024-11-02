using ProjectManagementApi.DTO;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.IServices
{
    public interface IAuthService
    {
        User Authenticate(UserDTO userDTO);

    }
}
