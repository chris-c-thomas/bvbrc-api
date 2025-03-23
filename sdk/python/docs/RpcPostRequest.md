# RpcPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | [optional] 
**params** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.rpc_post_request import RpcPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RpcPostRequest from a JSON string
rpc_post_request_instance = RpcPostRequest.from_json(json)
# print the JSON string representation of the object
print(RpcPostRequest.to_json())

# convert the object into a dict
rpc_post_request_dict = rpc_post_request_instance.to_dict()
# create an instance of RpcPostRequest from a dict
rpc_post_request_from_dict = RpcPostRequest.from_dict(rpc_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


