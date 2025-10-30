namespace CounterAPI.Models
{
    public static class CounterStore
    {
        public static int GlobalCount = 0;
        public static Dictionary<string, int> UserCounts = new Dictionary<string, int>();
    }
}
