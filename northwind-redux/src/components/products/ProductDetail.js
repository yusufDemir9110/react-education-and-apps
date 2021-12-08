import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from '../toolbox/TextInput'


const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange
}) => {
    return (
        <form onSubmit={onSave}>
            <h3>{product.id ? "Guncelle" : "Ekle"}</h3>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata"
            />
            <SelectInput
                name='categoryId'
                label='category'
                value={product.categoryId || ''}
                defaultOption='Seciniz'
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error='Hata'
            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error="Hata"
            />
            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error="Hata"
            />
            <TextInput
                name="unitsInStock"
                label="Units In Stocks"
                value={product.unitsInStock}
                onChange={onChange}
                error="Hata"
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default ProductDetail