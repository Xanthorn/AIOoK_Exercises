using System;
using System.ComponentModel.DataAnnotations;

namespace exercise_6_db.Models
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Status Status { get; set; } = Status.Active;
    }

    public enum Status
    {
        Active,
        InBasket,
        Bought
    }
}
