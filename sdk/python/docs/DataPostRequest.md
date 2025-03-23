# DataPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.data_post_request import DataPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataPostRequest from a JSON string
data_post_request_instance = DataPostRequest.from_json(json)
# print the JSON string representation of the object
print(DataPostRequest.to_json())

# convert the object into a dict
data_post_request_dict = data_post_request_instance.to_dict()
# create an instance of DataPostRequest from a dict
data_post_request_from_dict = DataPostRequest.from_dict(data_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


