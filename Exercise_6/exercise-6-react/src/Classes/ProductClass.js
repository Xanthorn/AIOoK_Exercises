class ProductClass {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

export const statuses = {
    ACTIVE: "aktywny",
    INBASKET: "w koszyku",
    BOUGHT: "kupiony"
};

export default ProductClass;