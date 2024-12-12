const fetchProductsApi = async (currentPage, itemsPerPage) => {
    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(`http://localhost:8000/api/v1/products/?page=${currentPage}&page_size=${itemsPerPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Re-lança o erro para o chamador lidar, se necessário
    }
};

export default fetchProductsApi;