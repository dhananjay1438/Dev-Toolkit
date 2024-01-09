from django.shortcuts import render
import ast
import json
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def format_json(request: HttpRequest):
    if request.method == 'POST':
        try:
            # Assuming the input is in the body of the request as a string
            input_string = request.body.decode('utf-8')

            # Convert Python-like dictionary string to valid JSON
            # Replace single quotes with double quotes
            valid_json_string = input_string.replace("'", '"')

            # Convert string to JSON object
            json_data = json.loads(valid_json_string)

            # Return JSON response
            return JsonResponse(json_data, safe=False)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': f'Invalid JSON: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


def home(request: HttpRequest):
    return HttpResponse('<h1> hello world </h1>')
