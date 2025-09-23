// API service functions

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Generic API service class
export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Create a default instance
export const apiService = new ApiService();

// Specific service functions
export const propertyService = {
  getAll: () => apiService.get('/properties'),
  getById: (id: string) => apiService.get(`/properties/${id}`),
  create: (property: any) => apiService.post('/properties', property),
  update: (id: string, property: any) => apiService.put(`/properties/${id}`, property),
  delete: (id: string) => apiService.delete(`/properties/${id}`),
};

export const reviewService = {
  getAll: () => apiService.get('/reviews'),
  getByPropertyId: (propertyId: string) => apiService.get(`/reviews/property/${propertyId}`),
  create: (review: any) => apiService.post('/reviews', review),
};
