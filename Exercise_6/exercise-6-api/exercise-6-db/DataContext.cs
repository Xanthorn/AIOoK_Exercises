using exercise_6_db.Models;
using Microsoft.EntityFrameworkCore;

namespace exercise_6_db
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
