import json
import requests

API_URL = 'http://localhost:5000/items'

API_KEY = '12345'
WRONG_API_KEY = '67890'

headers = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
}

response = requests.get(API_URL, headers=headers)
if response.status_code == 200:
    data = json.dumps(response.json(), indent=4)
    print(data)

else:
    print(f'Error Code: {response.status_code}')
    print(f'Error Message: {response.text}')