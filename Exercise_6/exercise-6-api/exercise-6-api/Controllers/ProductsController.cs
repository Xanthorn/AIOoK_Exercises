using exercise_6_api.Contracts;
using exercise_6_api.Contracts.Requests;
using exercise_6_api.Services;
using exercise_6_db;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exercise_6_api.Controllers
{
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly ProductsService _productsService;

        public ProductsController(DataContext dataContext)
        {
            _dataContext = dataContext;
            _productsService = new(dataContext);
        }

        [HttpPost(ApiRoutes.Product.Create)]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductRequest request)
        {
            var result = await _productsService.CreateProduct(request);

            if (result.ErrorCode == -1)
            {
                return Ok(result.Message);
            }
            
            else
            {
                return StatusCode(result.ErrorCode, result.Message);
            }
        }

        [HttpGet(ApiRoutes.Product.GetAll)]
        public async Task<IActionResult> GetProducts()
        {
            var result = await _productsService.GetProducts();

            return Ok(result);
        }

        [HttpGet(ApiRoutes.Product.GetById)]
        public async Task<IActionResult> GetProductById([FromRoute] Guid productId)
        {
            var result = await _productsService.GetProductById(productId);

            return Ok(result);
        }

        [HttpPut(ApiRoutes.Product.Update)]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid productId, [FromBody] UpdateProductRequest request)
        {
            var result = await _productsService.UpdateProduct(productId, request);

            if(result.ErrorCode == -1)
            {
                return Ok(result.Message);
            }

            else
            {
                return StatusCode(result.ErrorCode, result.Message);
            }
        }
    }
}
