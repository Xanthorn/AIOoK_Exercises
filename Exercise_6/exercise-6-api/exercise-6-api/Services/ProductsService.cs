using exercise_6_api.Contracts.Requests;
using exercise_6_api.Contracts.Responses;
using exercise_6_db;
using exercise_6_db.Models;
using System;
using System.Threading.Tasks;

namespace exercise_6_api.Services
{
    public class ProductsService
    {
        private readonly DataContext _dataContext;

        public ProductsService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<CreateProductResponse> CreateProduct(CreateProductRequest request)
        {
            Product product = new()
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Status = request.Status
            };

            await _dataContext.Products.AddAsync(product);
            var result = await _dataContext.SaveChangesAsync();

            CreateProductResponse response = new();

            if(result > 0)
            {
                response.Message = "Product created succesfully";
            } 

            else
            {
                response.Message = "Internal server error";
                response.ErrorCode = 500;
            }

            return response;
        }
    }
}
