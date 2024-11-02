using Microsoft.AspNetCore.Mvc;
using ProjectManagementApi.DTO;
using ProjectManagementApi.IServices;
using ProjectManagementApi.Services;

namespace ProjectManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserDTO request)
        {
            var user = _authService.Authenticate(request);
            if (user == null) return Unauthorized();

            // Optionally return a token here (JWT, etc.)
            return Ok(new { UserId = user.UserId, Username = user.Username, RoleId = user.RoleId });
        }
    }

  
}
