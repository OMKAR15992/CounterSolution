using CounterAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CounterSolution.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CounterController : ControllerBase
    {
        [HttpGet("global")]
        public IActionResult GetGlobal() => Ok(CounterStore.GlobalCount);

        [HttpPost("global/increment")]
        public IActionResult IncrementGlobal()
        {
            CounterStore.GlobalCount++;
            return Ok(CounterStore.GlobalCount);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetUser(string userId)
        {
            if (!CounterStore.UserCounts.ContainsKey(userId))
                CounterStore.UserCounts[userId] = 0;

            return Ok(CounterStore.UserCounts[userId]);
        }

        [HttpPost("user/{userId}/increment")]
        public IActionResult IncrementUser(string userId)
        {
            if (!CounterStore.UserCounts.ContainsKey(userId))
                CounterStore.UserCounts[userId] = 0;

            CounterStore.UserCounts[userId]++;
            return Ok(CounterStore.UserCounts[userId]);
        }
    }
}
