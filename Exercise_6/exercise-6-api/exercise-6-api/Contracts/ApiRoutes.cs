namespace exercise_6_api.Contracts
{
    public static class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const string Base = Root + "/" + Version;

        public static class Product
        {
            public const string Create = Base + "/products";

            public const string GetAll = Base + "/products";

            public const string GetById = Base + "/products/{productId}";

            public const string Update = Base + "/products/{productId}";

            public const string Delete = Base + "/products/{productId}";
        }
    }
}
