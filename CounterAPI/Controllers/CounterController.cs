using Microsoft.AspNetCore.Mvc;

namespace CounterAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CounterController : ControllerBase
    {
        private static int GlobalCounter = 0;

        [HttpGet("global")]
        public IActionResult GetGlobalCounter() => Ok(GlobalCounter);

        [HttpPost("global/increment")]
        public IActionResult IncrementGlobalCounter()
        {
            GlobalCounter++;
            return Ok(GlobalCounter);
        }
    }
}