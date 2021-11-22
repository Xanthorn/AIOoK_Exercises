using exercise_6_api.Contracts.Requests;
using exercise_6_api.Contracts.Responses;
using exercise_6_db;
using exercise_6_db.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<GetProductsResponse> GetProducts()
        {
            List<Product> products = await _dataContext.Products.ToListAsync();

            GetProductsResponse response = new()
            {
                Products = products
            };

            return response;
        }

        public async Task<GetProductByIdResponse> GetProductById(Guid productId)
        {
            Product product = await _dataContext.Products.Where(p => p.Id == productId).FirstOrDefaultAsync();

            GetProductByIdResponse response = new()
            {
                Product = product
            };

            return response;
        }

        public async Task<UpdateProductResponse> UpdateProduct(Guid productId, UpdateProductRequest request)
        {
            UpdateProductResponse response = new();

            Product existingProduct = await _dataContext.Products.Where(p => p.Id == productId).FirstOrDefaultAsync();

            if (existingProduct == null)
            {
                response.Message = "There is no product with given Id";
                response.ErrorCode = 404;
                return response;
            }

            existingProduct.Name = request.Name;
            existingProduct.Status = request.Status;

            var result = await _dataContext.SaveChangesAsync();


            if (result > 0)
            {
                response.Message = "Product updated succesfully";
            }

            else
            {
                response.ErrorCode = 500;
                response.Message = "Internal server error";
            }

            return response;
        }
    }
}
