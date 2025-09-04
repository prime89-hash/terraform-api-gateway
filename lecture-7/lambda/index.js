import os
import json

def lambda_handler(event, context):
    # Get environment variable
    env_value = os.getenv("VIDEO_NAME", "DefaultVideo")

    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps(f"Message from {env_value}")
    }
    return response
