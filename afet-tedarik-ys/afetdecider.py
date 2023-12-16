import requests 
from math import radians, sin, cos, sqrt, atan2

def get_backend_data(api_endpoint):
    try:
        response = requests.get(api_endpoint)
        if response.status_code == 200:
            return response.json()
        else:
            print("Backend'den veri alınamadı. Hata kodu:", response.status_code)
            return None
    except requests.RequestException as e:
        print("İstek gönderilirken bir hata oluştu:", e)
        return None

def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371.0  # approximate radius of Earth in km

    lat1_rad = radians(lat1)
    lon1_rad = radians(lon1)
    lat2_rad = radians(lat2)
    lon2_rad = radians(lon2)

    dlon = lon2_rad - lon1_rad
    dlat = lat2_rad - lat1_rad

    a = sin(dlat / 2)**2 + cos(lat1_rad) * cos(lat2_rad) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance

def decide_delivery_order(requests):
    sorted_requests = sorted(requests, key=lambda x: x[1], reverse=True)
    delivery_order = []
    remaining_requests = sorted_requests[:]
    current_location = (0, 0)

    while remaining_requests:
        closest_request = None
        min_distance = float('inf')

        for request in remaining_requests:
            dist = calculate_distance(current_location[0], current_location[1], request[2], request[3])
            if dist < min_distance:
                min_distance = dist
                closest_request = request

        remaining_requests.remove(closest_request)
        delivery_order.append(closest_request)
        current_location = (closest_request[2], closest_request[3])

    return delivery_order

def send_results_to_backend(api_endpoint, results):
    try:
        response = requests.post(api_endpoint, json=results)

        if response.status_code == 200:
            print("Yapay zeka sonuçları başarıyla backend'e gönderildi.")
        else:
            print("Yapay zeka sonuçları backend'e gönderilemedi. Hata kodu:", response.status_code)

    except requests.RequestException as e:
        print("İstek gönderilirken bir hata oluştu:", e)

def main():
    backend_api_endpoint = "backend_api"  # Backend verilerinin çekileceği API
    backend_results_endpoint = 'BACKEND_RESULTS_ENDPOINT'  # Backend'e sonuçların gönderileceği API

    # Backend'den veri al
    backend_data = get_backend_data(backend_api_endpoint)

    if backend_data:
        # Teslimat sırasını belirle
        delivery_sequence = decide_delivery_order(backend_data)
        
        for delivery in delivery_sequence:
            print(delivery)

        # Sonuçları backend'e gönder
        send_results_to_backend(backend_results_endpoint, delivery_sequence)

if __name__ == "__main__":
    main()
