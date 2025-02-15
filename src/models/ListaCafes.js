class ListaCafes {
    constructor() {
        this.cafes = [];
    }

    addCafe(cafe) {
        this.cafes.push(cafe);
    }

    getAllCafes() {
        return this.cafes;
    }

    getCafeById(id) {
        const cafe = this.cafes.find((cafe) => cafe.id == id);
        if (!cafe) {
            throw new Error("Café não encontrado");
        }
        return cafe;
    }

    updateCafe(id, updateData) {
        const cafe = this.getCafeById(id);
        Object.assign(cafe, updateData);
        return cafe;
    }

    deleteCafe(id) {
        this.cafes = this.cafes.filter((cafe) => cafe.id != id);
    }
}

module.exports = ListaCafes;