# QueryMultiPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[QueryMultiPostRequestQueriesInner]**](QueryMultiPostRequestQueriesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_multi_post_request import QueryMultiPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMultiPostRequest from a JSON string
query_multi_post_request_instance = QueryMultiPostRequest.from_json(json)
# print the JSON string representation of the object
print(QueryMultiPostRequest.to_json())

# convert the object into a dict
query_multi_post_request_dict = query_multi_post_request_instance.to_dict()
# create an instance of QueryMultiPostRequest from a dict
query_multi_post_request_from_dict = QueryMultiPostRequest.from_dict(query_multi_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


