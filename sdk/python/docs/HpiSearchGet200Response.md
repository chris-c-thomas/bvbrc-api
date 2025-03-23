# HpiSearchGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[HpiSearchGet200ResponseResultsInner]**](HpiSearchGet200ResponseResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.hpi_search_get200_response import HpiSearchGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of HpiSearchGet200Response from a JSON string
hpi_search_get200_response_instance = HpiSearchGet200Response.from_json(json)
# print the JSON string representation of the object
print(HpiSearchGet200Response.to_json())

# convert the object into a dict
hpi_search_get200_response_dict = hpi_search_get200_response_instance.to_dict()
# create an instance of HpiSearchGet200Response from a dict
hpi_search_get200_response_from_dict = HpiSearchGet200Response.from_dict(hpi_search_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


