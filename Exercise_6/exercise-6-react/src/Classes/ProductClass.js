class ProductClass {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

export const statuses = {
    0: "aktywny",
    1: "w koszyku",
    2: "kupiony"
};

export default ProductClass;