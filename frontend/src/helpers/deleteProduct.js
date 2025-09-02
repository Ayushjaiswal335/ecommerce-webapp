const deleteProduct = async (productId) => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/delete-product/${productId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include" // Add this for cookie-based auth
        }
    );
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    const result = await response.json();
    return result;
};

export default deleteProduct;