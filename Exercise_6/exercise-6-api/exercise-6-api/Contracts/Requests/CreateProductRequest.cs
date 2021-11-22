using exercise_6_db.Models;

namespace exercise_6_api.Contracts.Requests
{
    public class CreateProductRequest
    {
        public string Name { get; set; }
        public Status Status { get; set; }
    }
}
