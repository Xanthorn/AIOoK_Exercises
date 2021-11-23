class ProductClass {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

function createGuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const statuses = {
    ACTIVE: "aktywny",
    INBASKET: "w koszyku",
    BOUGHT: "kupiony"
};

export default ProductClass;