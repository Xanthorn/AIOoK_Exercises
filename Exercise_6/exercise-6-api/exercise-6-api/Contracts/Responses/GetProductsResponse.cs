using exercise_6_db.Models;
using System.Collections.Generic;

namespace exercise_6_api.Contracts.Responses
{
    public class GetProductsResponse
    {
        public List<Product> Products { get; set; }
    }
}
